import { createClient } from "contentful";

let clientInstance = null;

export const useContentfulClient = () => {
    if (!clientInstance) {
        clientInstance = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
        });
    }

    return clientInstance;
};
