import axios from "axios";
import { authorUrl, categoryUrl, classUrl, genresUrl, languageUrl, subjectUrl } from "./common";

export const getAuthorData = async() => {
    let data = await axios.get(authorUrl)
    // console.log("fetch data", data.data);

    return data.data
}

export const getGenreData = async() => {
    let data = await axios.get(genresUrl)
    // console.log("fetch data", data.data);

    return data.data
}

export const getClassData = async() => {
    let data = await axios.get(classUrl)
    // console.log("fetch data", data.data);

    return data.data
}

export const getSubjectData = async() => {
    let data = await axios.get(subjectUrl)
    // console.log("fetch data", data.data);

    return data.data
}

export const getLanguageData = async() => {
    let data = await axios.get(languageUrl)
    // console.log("fetch data", data.data);

    return data.data
}

export const getCategoryData = async() => {
    let data = await axios.get(categoryUrl)
    // console.log("fetch data", data.data);

    return data.data
}