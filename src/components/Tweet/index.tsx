import React from 'react'
import { 
    Container, 
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Description,
    ImageContent,
    Icons, 
    Status, 
    CommentIcon, 
    RetweettIcon, 
    LikeIcon 

} from '../Tweet/styles'

const Tweet: React.FC = () =>{
    return (
        <Container>
            <Retweeted>
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar/>
                <Content>
                    <Header>
                        <strong>Gabriel Carlos</strong>
                        <span>@gabrielcarlossl</span>
                        {/* <Dot></Dot> */}
                        <time>7 de out</time>
                    </Header>
                    <Description>
                        Estudando React com styled components
                    </Description>
                    <ImageContent></ImageContent>
                    <Icons>
                        <Status>
                            <CommentIcon></CommentIcon>
                            77
                        </Status>
                        <Status>
                            <RetweettIcon></RetweettIcon>
                            777
                        </Status>
                        <Status>
                            <LikeIcon></LikeIcon>
                            7777
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet