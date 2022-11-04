import dynamic from "next/dynamic";
// eslint-disable-next-line no-restricted-imports
import Components from "@inovex.de/elements-react/dist";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const importElement = <Component extends keyof typeof Components>(element: Component): typeof Components[Component]  => dynamic(import("@inovex.de/elements-react").then(m => m[element]), {
  ssr: false,
});

export const InoButton = importElement('InoButton');
export const InoChip = importElement('InoChip');
export const InoTab = importElement('InoTab');
export const InoTabBar = importElement('InoTabBar');
export const InoTooltip = importElement('InoTooltip');
export const InoIcon = importElement('InoIcon');
export const InoPopover = importElement('InoPopover');
