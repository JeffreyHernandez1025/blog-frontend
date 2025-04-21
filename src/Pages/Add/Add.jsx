import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import useAddBlog from "../../hooks/useAddBlog";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const FormContainer = styled.div`
display: flex;
background-color: black;
color: white;
width: 30%;
border-radius: 5px;
margin-top: 20px;
justify-content: center;
align-items: center;
`
const Form = styled.form`
display: flex;
width: 90%;
flex-direction: column;
margin-top: 10px;
`
const TextInput = styled.input`
background-color: black;
border-color: white;
border-radius: 5px;
height: 30px;
color: white;
font-size: 16px;
`
const LabelContainer = styled.div`
display: flex;
margin-top: 20px;
`
const Label = styled.p`
margin: 0px;
font-weight: 500;
padding-bottom: 10px;
`
const TextArea = styled.textarea`
background-color: black;
border-color: white;
border-radius: 5px;
height: 75px;
color: white;
font-size: 16px;
min-height: 75px;
resize: vertical;
`
const Submit = styled.button`
border: none;
background-color: #38a169;
border-radius: 5px;
height: 35px;
color: white;
font-size: 16px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 30px;

&:hover {
cursor: pointer;
}
`

export default function Add() {
    const [blogData, setBlogData] = useState({
        title: "",
        author: "",
        content: ""
    })

    const navigate = useNavigate()

    const { sendBlogData } = useAddBlog()

    return(
        <Container>
            <Header />

            <FormContainer>
                <Form onSubmit={event => {
                    sendBlogData(blogData)
                    navigate('/')
                }}>
                    <LabelContainer>
                        <Label> Blog Title </Label>
                        <Label style={{color: 'red'}}> * </Label>
                    </LabelContainer>
                    <TextInput 
                    type="text" 
                    value={blogData.title}
                    onChange={event => setBlogData({...blogData, title: event.target.value})}
                    required
                    />

                    <LabelContainer>
                        <Label> Author Name </Label>
                        <Label style={{color: 'red'}}> * </Label>
                    </LabelContainer>
                    <TextInput 
                    type="text"
                    value={blogData.author}
                    onChange={event => setBlogData({...blogData, author: event.target.value})} 
                    required
                    />

                    <LabelContainer>
                        <Label> Blog Content </Label>
                        <Label style={{color: 'red'}}> * </Label>
                    </LabelContainer>
                    <TextArea
                    type="text"
                    value={blogData.content}
                    onChange={event => setBlogData({...blogData, content: event.target.value})} 
                    required
                    />

                    <Submit type="submit"> Post Your Blog </Submit>
                </Form>
            </FormContainer>
        </Container>
    )
}