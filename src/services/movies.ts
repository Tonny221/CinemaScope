import Titles from "@/interfaces/titles";
import api from "./api";

export const getTitles = async () => {
    try {
        const response = await api.get("/titles")
        const data: Titles = response.data
        return data
    } catch (error) {
        console.log(error)
        throw new Error("ERROR ON GETTING DATA: \n" + error)
    }    
};

