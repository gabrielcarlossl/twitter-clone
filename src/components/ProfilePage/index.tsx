import React from "react";

import {Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton} from './styles';

const ProfilePage: React.FC = () =>{
    return  (
         <Container>

            <Banner>

                <Avatar>
                    <img src={require('../../assets/lambda.png')} />        
                </Avatar>

            </Banner>

            <ProfileData>
                
                <EditButton outlined>Editar Perfil</EditButton>
                
                <h1>Gabriel Carlos</h1>
                
                <h2>@7ennox</h2>
                
                <p>Desenvolvedor Front End <a href="https://fractaltecnologia.com.br/" target="_blank">@Fractal</a></p>

                <ul>
                    <li><LocationIcon></LocationIcon> João Pessoa, Brasil</li>
                    
                    <li><CakeIcon></CakeIcon> Nascido em 02 de Outubro de 1998</li>
                </ul>

                <Followage>
                    <span>
                        <strong>777</strong> Seguindo
                    </span>
                    
                    <span>
                        <strong>77777</strong> Seguidores
                    </span>
                </Followage>
            </ProfileData>
         </Container>
    )
}

export default ProfilePage