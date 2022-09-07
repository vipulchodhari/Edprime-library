import { fileOpen } from "browser-fs-access";

export const authorUrl = `http://192.100.100.52:5000/authors`;
export const booksUrl = `http://192.100.100.34:3000/books`;

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