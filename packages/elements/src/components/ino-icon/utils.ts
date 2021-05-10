import { getAssetPath } from '@stencil/core';

let CACHED_MAP: Map<string, string>;

export function getIconMap(): Map<string, string> {
	if (!CACHED_MAP) {
		const win = window as any;
		win.inoIcons = win.inoIcons || {};
		CACHED_MAP = win.inoIcons.map = win.inoIcons.map || new Map();
	}
	return CACHED_MAP;
}

export function addIcons(icons: { [name: string]: string }) {
	const map = getIconMap();
	Object.keys(icons).forEach((name) => map.set(name, icons[name]));
}

export const getSrc = (src: string | undefined) => {
	if (isStr(src)) {
		src = src.trim();
		if (isSrc(src)) {
			return src;
		}
	}
	return null;
};

export function getName(name: string | undefined) {
	if (name && !isSrc(name)) {
		return name;
	}
	return undefined;
}

export function getUrl(src: string | undefined, icon: string | undefined) {
	let url = getSrc(src);

	if (url) {
		return url;
	}
	url = getName(icon);
	if (url) {
		return getNamedUrl(url);
	}

	url = getSrc(icon);
	if (url) {
		return url;
	}

	return null;
}

export function getNamedUrl(name: string) {
	const url = getIconMap().get(name);
	if (url) {
		return url;
	}
	return getAssetPath(`./ino-icon/${name}.svg`);
}

export const isSrc = (str: string) => str.length > 0 && /(\/|\.)/.test(str);

export const isStr = (val: any): val is string => typeof val === 'string';

export const toLower = (val: string) => val.toLowerCase();
