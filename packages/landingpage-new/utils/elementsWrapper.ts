import dynamic from 'next/dynamic';
// eslint-disable-next-line no-restricted-imports
import Components from '@inovex.de/elements-react/dist';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const importElement = <Component extends keyof typeof Components>(element: Component): typeof Components[Component] => dynamic(import('@inovex.de/elements-react').then((m) => m[element]),{
  ssr: false
});

export const InoButton = importElement('InoButton');
export const InoChip = importElement('InoChip');
export const InoTab = importElement('InoTab');
export const InoTabBar = importElement('InoTabBar');
export const InoTooltip = importElement('InoTooltip');
export const InoIcon = importElement('InoIcon');
export const InoPopover = importElement('InoPopover');
export const InoRange = importElement('InoRange');
export const InoSnackbar = importElement('InoSnackbar');
export const InoInput = importElement('InoInput');
export const InoSwitch = importElement('InoSwitch');
export const InoControlItem = importElement('InoControlItem');
export const InoSegmentGroup = importElement('InoSegmentGroup');
export const InoCard = importElement('InoCard');
export const InoList = importElement('InoList');
export const InoSegmentButton = importElement('InoSegmentButton');
export const InoTextarea = importElement('InoTextarea');
export const InoSelect = importElement('InoSelect');
export const InoOption = importElement('InoOption');
export const InoSpinner = importElement('InoSpinner');
export const InoCarousel = importElement('InoCarousel');
export const InoCarouselSlide = importElement('InoCarouselSlide');
export const InoIconButton = importElement('InoIconButton');
