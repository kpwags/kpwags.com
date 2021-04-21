import { ClientArguments } from '../types/models/ClientArguments';

const apiUrl = process.env.REACT_APP_FT_API_URL;
const localStorageKey = '__fittracker_token__';

function logout() {
    window.localStorage.removeItem(localStorageKey);
}

async function client(endpoint, { data = null, contentType = 'application/json', fileUpload = false, ...customConfig }) {
    if (contentType !== null) {
        headers['Content-Type'] = contentType;
    }

    let body;
    if (data && data !== null) {
        body = fileUpload ? data : JSON.stringify(data);
    }

    const config = {
        method: data ? 'POST' : 'GET',
        body,
        headers,
        ...customConfig,
    };

    return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (response) => {
        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        }

        return Promise.reject(responseData);
    });
}

const handleApiError = (error) => {
    if (typeof error === 'string') {
        return error;
    }

    if (typeof error.message === 'string') {
        return error.message;
    }

    return 'An error has occurred';
};

export { client, handleApiError };
