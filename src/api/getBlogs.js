import axios from "axios";
import { API_URL } from "../constants";

export default function getBlogs() {
    const url = API_URL + '/blogs'
    return axios.get(url)
}