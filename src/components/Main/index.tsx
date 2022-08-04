import React from "react";

import {Container, Header, BackIcon, ProfileInfo } from './styles'
const Main: React.FC = ()=>{
    return (
        <Container>
            <Header>
                <button>
                    <BackIcon></BackIcon>
                </button>
                <ProfileInfo>
                    <strong>Gabriel Carlos</strong>
                    <span>77 Tweets</span>
                </ProfileInfo>
            </Header>
            {/* <ProfilePage>

            </ProfilePage> */}
            {/* <BottomMenu>
                <HomeIcon></HomeIcon>
                <SearchIcon></SearchIcon>
                <BellIcon></BellIcon>
                <EmailIcon></EmailIcon>
            </BottomMenu> */}
        </Container>
        
    )
}
export default Main