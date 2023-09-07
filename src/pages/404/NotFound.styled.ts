import styled from 'styled-components'

export const NotFoundContainer = styled.div<{ icon: string }>`
    position: relative;
    height: calc(100vh - 50px);
    padding: 30px 0;

    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: -1;
        width: auto;
        height: 35%;
        background: url(${(props) => props.icon}) no-repeat;
        background-size: contain;
        background-position: bottom;
    }
`

export const NotFoundBackground = styled.div`
    position: relative;
    z-index: -2;
    max-width: 90%;
    margin: 0 auto;
    padding: 30px;
    background: white;
`

export const NotFoundTitle = styled.h1`
    font-size: 80px;
    text-align: center;
    margin: 0;
    margin-bottom: 300px;
`

export const NotFoundImage = styled.img<{ icon: string }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: url(${(props) => props.icon}) no-repeat;
    height: 100%;
    max-width: 100%;
    width: 100%;
    background-position: center;
`

export const NotFoundCode = styled.code`
    color: #000000;
    text-align: center;
    display: block;
    font-size: 16px;

    span {
        color: #ffaa00;
    }

    i {
        color: #ff0000;
    }

    em {
        color: #c300ff;
        font-style: unset;
    }

    b {
        color: #0088ff;
        font-weight: 500;
    }
`
