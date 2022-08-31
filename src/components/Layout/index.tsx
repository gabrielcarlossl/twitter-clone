import React from "react";
import {Container, Wrapper} from './styles'
import Main from '../Main/index'
import MenuBar from "../MenuBar";
import SideBar from '../SideBar'

 const Layout: React.FC = () =>{
    return (
        <Container>
            <Wrapper>
                
                <MenuBar></MenuBar>
                
                <Main></Main>

                <SideBar/>
            </Wrapper>
        </Container>
    )
}

export default Layout