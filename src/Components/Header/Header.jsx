import styled from "styled-components";
import Plus from "../../Assets/Images/plus-icon.png"
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
background-color: black;
width: 100%;
height: 90px;
display: flex;
`
const Title = styled.h1`
color: white;
font-size: 35px;
margin: 0;
margin-top: auto;
margin-bottom: auto;
margin-left: 20%;
font-weight: bold;
`

const Button = styled.div`
color: white;
font-size: 15px;
margin: 0px;
margin-top: auto;
margin-bottom: auto;
padding: 10px;
border-radius: 5px;
display: flex;

&:hover {
cursor: pointer;
background-color: #139b0c;
}
`
const Text = styled.p`
margin: 0px
`


export default function Header() {
    const navigate = useNavigate()

    return(
        <HeaderContainer>
            <Title> Blog Application </Title>
            <Button 
            style={{marginLeft: '30%'}}
            onClick={() => {
                navigate("/")
            }}
            > <Text> View Blogs </Text> </Button>

            <Button 
            style={{marginLeft: '50px', backgroundColor: '#139b0c'}}
            onClick={() => {
                navigate("/add-blog")
            }}
            > <img src={Plus} height={15} style={{marginRight: 6}} /> <Text> Add Blog </Text> </Button>
        </HeaderContainer>
    )
}