import React from "react";
import {Container, Wrapper} from './styles'
import Main from '../Main/index'
 const Layout: React.FC = () =>{
    return (
        <Container>
            <Wrapper>
                
                {/* <MenuBar>

                </MenuBar> */}
                
                <Main></Main>

                {/* <SideBar>

                
                </SideBar> */}
            </Wrapper>
        </Container>
    )
}

export default Layout