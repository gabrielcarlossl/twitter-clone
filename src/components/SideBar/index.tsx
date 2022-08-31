import React from "react";
import StickyBox from 'react-sticky-box'

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles'

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List
                        title="O que está acontecendo"
                        elements={[
                            <div>
                                <News tipo='Sports' tweet='Neymar Jr' numeros='3,081 Tweets'></News>
                                <News tipo='Sports' tweet='Bale' numeros='13.1K Tweets'></News>
                                <News tipo='Trending' tweet='Luva de Pedreiro' numeros='70.7K Tweets'></News>
                            </div>


                        ]}
                    />

                    <List
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion
                                name="ESPN FC"
                                nickname="@ESPNFC"
                            />,
                            <FollowSuggestion name="GOAL" nickname="@goal" />,
                            <FollowSuggestion
                                name="Lontrinhas"
                                nickname="@lontrinhass"
                            />,
                        ]}
                    />
                </Body>

            </StickyBox>

        </Container>
    )
}

export default SideBar