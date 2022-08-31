import styled, {css} from "styled-components";

import {Home, Notifications, Email, FavoriteBorder, Person, ExitToApp, Twitter, FeatherAlt} from '../../styles/Icons'


export const Container = styled.div`
    display:none;
    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: sticky;
        top:0;
        left:0;

        padding: 9px 19px 20px;
        max-height:100vh;
        overflow-y: auto;
    }
    
`
export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 1280px){
        align-items: flex-start;
    }
`

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    
    > span {
        display: none;
    }

    @media(min-width: 1280px){

        > span{
            display: inline;
            margin-left: 19px;
            font-weight: bold;
            font-size: 19px;
        }
        padding-right:15px;
        padding-left: 15px;
    }

    padding: 8.25px 0;
    outline: 0;

    & + button {
        margin-top: 16.5px;
    }

    & + button:last-child {
        margin-top: 33px;

        width: 50px;
        height: 50px;

        > span {
            display: none;
        }

        @media(min-width: 1280px){
            width: 100%;
            height: unset;
            > span {
                display: inline;
                font-size:19px;
                font-weight:bold;
            }
        }
    }

    cursor: pointer;
    border-radius: 25px;
    &:hover{
        background: var(--twitter-dark-hover)
    }
    &:hover, &.active {
        span, svg{
            color: var(--twitter);
        }
    }
`
const logo = css`
    height: 35px;
    width: 35px;
    margin-bottom: 15px;
    
    > path{
        fill: var(--twitter)
    }
`

const iconCSS = css`
    flex-shrink:0;

    width: 30px;
    height: 30px;
    color: var(--white);
`

const icon2 = css`
    width: 20px;
    height: 20px;

    @media(min-width: 1280px){
            display:none;
        }

`

export const HomeIcon = styled(Home)`${iconCSS}`
export const BellIcon = styled(Notifications)`${iconCSS}`
export const EmailIcon= styled(Email)`${iconCSS}`
export const FavoriteIcon= styled(FavoriteBorder)`${iconCSS}` 
export const ProfileIcon = styled(Person)`${iconCSS}`
export const TwitterIcon = styled(Twitter)`${logo}`
export const FeatherIcon = styled(FeatherAlt)`${icon2}`

export const Botside = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;

`
export const Avatar = styled.div`
    width: 39px;
    height: 39px;
    flex-shrink: 0;
    
    
    > img{
        height:39px;
        width:39px;
        border-radius: 50px;
    }
`
export const ProfileData = styled.div`
    display: none;
    @media(min-width: 1280px){
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        font-size: 14px;
        > span{
            color: var(--gray);
        }
    }
`

export const ExitIcon = styled(ExitToApp)`
    display: none;
    @media(min-width: 1280px){
        display: inline-block;
        width: 25px;
        height: 25px;
        color: var(--white);
        margin-left: 30px;
        cursor: pointer;

        &:hover{
            > path{
                color: var(--like);
            }
        }
    }
`