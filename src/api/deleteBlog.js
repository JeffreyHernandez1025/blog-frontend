import axios from "axios";
import { API_URL } from "../constants";

export default function deleteBlog(id) {
    const url = API_URL + `/delete-blog/?id=${id}`
    return axios.delete(url)
}