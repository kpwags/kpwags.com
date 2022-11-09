export const saveToLocalStorage = (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, value);
    }
};

export const retrieveFromLocalStorage = (key: string, isJson = false): string|unknown => {
    if (typeof window !== 'undefined') {
        const value = window.localStorage.getItem(key);

        if (value) {
            return isJson ? JSON.parse(value) : value;
        }
    }

    return null;
};
