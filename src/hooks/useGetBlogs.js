import { useEffect, useState } from "react";
import getBlogs from "../api/getBlogs";

export default function useGetBlogs() {
    // save blogs
    const [allBlogs, setAllBlogs] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getBlogs()
                setAllBlogs(data.data.payload)
            } catch(e) {
                console.log(`Error fetching blogs ${e}`)
            }
        }

        fetchData()
    })

    return {
        allBlogs
    }
}