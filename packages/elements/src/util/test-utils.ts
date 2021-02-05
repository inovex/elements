import { E2EPage } from "@stencil/core/testing";

export async function getFocusedElementOfPage(page: E2EPage) {
	return page.$eval(":focus", (el) => el);
}

export const pxToNumber = (s: string): number =>
	Number(s.substring(0, s.length - 2));
