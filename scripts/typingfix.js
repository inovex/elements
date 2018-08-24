const fs = require('fs');
const path = require('path');

module.exports = function() {
    const typescriptDefinitionsPath = path.join(
    __dirname,
    '..',
    'dist/types/components.d.ts'
    );

    // Fix typescript definitions
    const typescriptDefinitions = String(
    fs.readFileSync(typescriptDefinitionsPath)
    ).replace(/\n/g, '%NEWLINE%');
    
    const fixedTypescriptDefinitions =  typescriptDefinitions.replace(/(export interface \S+?Attributes extends HTMLAttributes {.+?)(})/g,
        (_, p1, p2) => { return p1 + '[key: string]: any;%NEWLINE%' + p2; }).replace(/%NEWLINE%/g, '\n');

    fs.writeFileSync(typescriptDefinitionsPath, fixedTypescriptDefinitions);

    console.info(
    'Fixed typescript definitions. // TODO remove this when stencil has a fix for that'
    );
};