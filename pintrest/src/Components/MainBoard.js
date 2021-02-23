import React from 'react'
import styled from 'styled-components';
import Pin from './Pin'

function MainBoard() {
    return (
        <Wrapper>
            <Container>
                <Pin></Pin>
            </Container>
        </Wrapper>
    )
}

export default MainBoard

const Wrapper = styled.div`
    background-color: white;;
    display: flex;
    justify-content : center;
    height: 100%;
    width: 100%;
    margin-top: 15px;
`
const Container = styled.div`
    background-color: white;
    display: flex;
    width: 80%;
`