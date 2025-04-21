import axios from "axios";
import { API_URL } from "../constants";

export default function addBlog(blogData) {
    const url = API_URL + "/create-blog"
    return axios.post(url, blogData)
}