import { fileOpen } from "browser-fs-access";

// export const authorUrl = `http://192.100.100.52:2500/authors`;
export const authorUrl = `http://192.100.100.111:1000/authors`;
export const booksUrl = `http://192.100.100.111:1000/books`;
export const genresUrl = `http://192.100.100.111:1000/genres`;
export const classUrl = `http://192.100.100.111:1000/ed-classes`;
export const subjectUrl = 'http://192.100.100.111:1000/subjects';
export const languageUrl = 'http://192.100.100.111:1000/languages';
export const categoryUrl = 'http://192.100.100.111:1000/book-categories';
export const memberUrl = 'http://192.100.100.52:3002/members';
export const publisherUrl = 'http://192.100.100.111:1000/publishers';

export async function imgInputFilePicker() {
    const blob = await fileOpen({
        description: "Image files",
        mimeTypes: ["image/jpg", "image/png"],
        extensions: [".jpg", ".jpeg", ".png", ".jfif"],
    });

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const img = document.createElement("img");

        reader.readAsDataURL(blob);

        reader.onload = () => {
            img.src = reader.result;
        };

        img.onload = () => {
            resolve({ base64: reader.result.split(",")[1], name: blob.name });
        };

        img.onerror = () => {
            reject();
        };
    });
}