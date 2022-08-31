import React from "react";
import { 
    Container, 
    Topside,
    MenuButton, 
    HomeIcon, 
    BellIcon, 
    EmailIcon, 
    FavoriteIcon, 
    ProfileIcon,
    TwitterIcon,
    FeatherIcon,
    ExitIcon,
    Botside,
    Avatar,
    ProfileData
} from './styles';

import Button from '../Button'

const MenuBar: React.FC = () => {
    return ( 
        <Container>
            <Topside>

                <TwitterIcon></TwitterIcon>

                <MenuButton>
                    <HomeIcon></HomeIcon>
                    <span>Página Inicial</span>
                </MenuButton>
                
                <MenuButton>
                    <BellIcon></BellIcon>
                    <span>Notificações</span>
                </MenuButton>
                
                <MenuButton>
                    <EmailIcon></EmailIcon>
                    <span>Mensagens</span>
                </MenuButton>
                
                <MenuButton>
                    <FavoriteIcon></FavoriteIcon>
                    <span>Favoritos</span>
                </MenuButton>
                
                <MenuButton className='active'>
                    <ProfileIcon></ProfileIcon>
                    <span>Perfil</span>
                </MenuButton>
                
                <Button>
                    <FeatherIcon></FeatherIcon>
                    <span>Tweet</span>
                </Button>
                
            </Topside>

            <Botside>
                <Avatar><img src={require('../../assets/lambda.png')} /></Avatar>
                <ProfileData>
                    <strong>Gabriel Carlos</strong>
                    <span>@7ennox</span>
                </ProfileData>
                <ExitIcon></ExitIcon>
            </Botside>
        </Container>
    )
}

export default MenuBar;