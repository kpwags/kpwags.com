const decodeHtmlEntities = (str: string): string => str.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec));

export default decodeHtmlEntities;
