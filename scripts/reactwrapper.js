const fs = require('fs-extra');
const path = require('path');
const camelcase = require('camelcase');

const projectBasePath = path.join(__dirname, '..');
const distBasePath = path.join(projectBasePath, 'dist');
const reactBasePath = path.join(distBasePath, 'react');

function getComponents() {
    const componentDir = path.join(distBasePath, 'collection/components');
    const componentNames = fs
        .readdirSync(componentDir)
        .filter((file) => fs.statSync(path.join(componentDir, file)).isDirectory);
    return componentNames;
};

function getReactName(componentName) {
    return camelcase(componentName, { pascalCase: true });
}

function getWrapper(componentName) {
    const reactName = getReactName(componentName);
    return `
        "use strict";
        var __rest = (this && this.__rest) || function (s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function")
                for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                    t[p[i]] = s[p[i]];
            return t;
        };

        var React = require('react');

        module.exports = {
            ${reactName}: function(_a) {
                var children = _a.children, props = __rest(_a, ["children"]);
                return React.createElement("${componentName}", Object.assign({}, props), children && React.createElement("span", null, children));
            }
        };
    `;
}

function getWrapperTypings(componentName) {
    const reactName = getReactName(componentName);
    return `
        import { Components } from '../types/components';
        export interface ${reactName}Props extends Components.${reactName}Attributes {}
        export declare const ${reactName}: React.SFC<${reactName}Props>;
    `;
}

function prepareFolder() {
    if(fs.existsSync(reactBasePath) && fs.statSync(reactBasePath).isDirectory) {
        fs.removeSync(reactBasePath);
    }
    fs.mkdirSync(reactBasePath);
}

function writeComponent(componentName, componentCode, typingCode) {
    const componentFileName = `${getReactName(componentName)}.js`;
    const typingsFileName = `${getReactName(componentName)}.d.ts`;
    const componentPath = path.join(reactBasePath, componentFileName);
    const typingsPath = path.join(reactBasePath, typingsFileName);
    fs.writeFileSync(componentPath, componentCode);
    fs.writeFileSync(typingsPath, typingCode);
}

function createReactWrappers() {
    prepareFolder();
    const components = getComponents();
    components.forEach((component) => {
        const code = getWrapper(component);
        const typings = getWrapperTypings(component);
        writeComponent(component, code, typings);
    });

    console.info(
    'Created react wrapper components'
    );
}

module.exports = createReactWrappers;