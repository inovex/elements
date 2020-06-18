export class SvgParser {
    private static parser = new DOMParser();
    private static serializer = new XMLSerializer();
    
    public static setSvgTitle(svgContent: string, title: string) {
        const parsedSVG = this.parser.parseFromString(svgContent,"image/svg+xml");
        const titleTag = parsedSVG.querySelector('title');
        if(titleTag) titleTag.innerHTML = title;
        return this.serializer.serializeToString(parsedSVG);
    }

    public static removeSvgTitle(svgContent: string) {
        const parsedSVG = this.parser.parseFromString(svgContent,"image/svg+xml");
        parsedSVG.querySelector('title')?.remove();
        return this.serializer.serializeToString(parsedSVG);
    }
}