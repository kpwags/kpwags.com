const generateSlug = (tag: string): string => tag
    .toLowerCase()
    .replace(/\s/g, '-')
    .replaceAll('.', '')
    .replaceAll("'", '')
    .replaceAll('?', '');

const generateTagUrl = (tag: string): string => {
    switch (tag.toUpperCase()) {
        case '.NET':
            return 'dotnet';
        case 'C#':
            return 'csharp';
        case 'F#':
            return 'fsharp';
        default:
            return generateSlug(tag);
    }
};

export default generateTagUrl;
