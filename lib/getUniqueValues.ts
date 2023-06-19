export default function getUniqueValues<T>(obj: T[]): T[] {
    return [...new Set(obj)];
}
