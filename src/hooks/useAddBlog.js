import addBlog from "../api/addBlog";

export default function useAddBlog() {

    const sendBlogData = async (blogData) => {
        try{
            await addBlog(blogData)
        } catch(e) {
            console.log(`Error sending blog data ${e}.`)
        }
    }

    return{
        sendBlogData,
    }
}