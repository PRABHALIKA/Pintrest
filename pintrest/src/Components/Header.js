import React from 'react'
import styled from 'styled-components';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import KeyboardIcon from '@material-ui/icons/Keyboard';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon/>
                </IconButton>
            </LogoWrapper>
            <HomePageButton>
                <a href = "/"> HomePage</a>
            </HomePageButton>
            <FollowingButton>
                <a href = "/"> Following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => console.log(e.target.value)}/>
                        <button type = "submit"></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <TextsmsIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardIcon/>
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display:flex;
    height: 56px
    padding:12px 4px 4px 16px;
    align-items:center;
    color: black;
`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size:32px;
        cursor:pointer;
    }

`
const HomeButtons = styled.div`
    display: flex;
    height:48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 24px;
`
const HomePageButton = styled(HomeButtons)`
    background-color:rgb(17,17,17);
      a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }


`
const FollowingButton = styled(HomeButtons)`
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover {
        background-color: #e1e1e1;

    }
`


const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        margin-left: 5px;
        width: 100%;
        font-size: 16px;
    }

    form > button {
        display: none;
    }

    input: focus {
        outline: none;
    }

`


const SearchWrapper = styled.div`
    flex: 1;
`

const IconsWrapper = styled.div``