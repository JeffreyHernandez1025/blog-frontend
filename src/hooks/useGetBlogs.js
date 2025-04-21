import { useEffect, useState } from "react";
import getBlogs from "../api/getBlogs";
import deleteBlog from "../api/deleteBlog";

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

    const sendBlogID = async (id) => {
        try {
            await deleteBlog(id)
            setAllBlogs(allBlogs.filter((blogs) => blogs._id !== id))
        } catch(e) {
            console.log(`Error sending blog ID ${e}`)
        }
    }

    return {
        allBlogs,
        sendBlogID
    }
}