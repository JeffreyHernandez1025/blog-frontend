import styled from "styled-components";
import useGetBlogs from "../../hooks/useGetBlogs";

const Container = styled.div`
display: flex;
flex: 0 0 32%;
flex-direction: column;
background-color: black;
color: white;
border-radius: 5px;
margin-top: 10px;
margin-right: 10px;
`
const Title = styled.h3`
margin: 0px;
padding: 0 10px 10px 10px;
`
const Author = styled.h4`
margin: 0px;
padding: 10px;
`
const Content = styled.p`
margin: 0px;
padding: 10px;
`
const Delete = styled.p`
margin-left: 95%;

&:hover{
color: red;
cursor: pointer;
}
`

export default function Blog(props) {
    const { sendBlogID } = useGetBlogs()

    return(
        <Container>
            <Delete onClick={() => {
                sendBlogID(props.data._id)
            }}> X </Delete>
            <Title> {props.data.title} </Title>
            <Author> {props.data.author} </Author>
            <Content> {props.data.content} </Content>
        </Container>
    )
}