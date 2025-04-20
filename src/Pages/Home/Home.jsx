import Header from "../../Components/Header/Header";
import useGetBlogs from "../../hooks/useGetBlogs";
import Blog from "../../Components/Blog/Blog";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const BlogsContainer = styled.div`
display: flex;
width: 80%;
flex-wrap: wrap;
`

export default function Home() {
    const { allBlogs } = useGetBlogs()

    return(
        <Container>
            <Header />

            <BlogsContainer>
                {allBlogs.map((blog, i) => (
                    <Blog 
                    data = {blog}
                    key = {i}
                    />
                ))}
            </BlogsContainer>
        </Container>
    )
}