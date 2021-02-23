import React from 'react'
import styled from 'styled-components';
function Pin() {
    return (
        <Wrapper>
            <Container>
                <img src = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </Container>
        </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
    padding:8px;
`
const Container = styled.div`
    disply: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    width: 236px;

    img {
        width: 100%;
        border-radius: 16px;
        cursor: zoom-in;
        object-fit: cover;
    }

`