import { Metadata } from "next";


interface MetadataConfig {
    title: string;
    description: string;
    path: string;
    images?: string | string[] | null;
    type?: "article" | "website";
    robots?: Metadata['robots'];
}

export function generateMetadata({ title, description, path, images, type = "article"}:MetadataConfig): Metadata {
    return {
        title: `${title} | JustDiego`,
        description: description,
        openGraph: {
            title: `${title} | JustDiego`,
            siteName: `JustDiego`,
            description: description,
            url: `https://justdiego.com${path}`,
            images: images 
                ? Array.isArray(images) 
                    ? images.map(url => ({ url })) 
                    : [{ url: images }] 
                : [],
            type,
        },
        alternates: {
            canonical: `https://justdiego.com${path}`,
        },
    }
}