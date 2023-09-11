import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    transition: background-color .2s;
    display: flex;
    align-items: center;
`

export const HeaderContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: start;
`

export const HeaderLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &.active {
        color: #ffffff33;
    }
`

export const HeaderButton = styled.button`
    display: flex; 
    align-items: center; 
    gap: 5px;
    margin-left: auto;
    cursor: pointer;
    transition: transform .2s;

    &::before {
        content: "";
        display: block;
        max-width: 100%;
        width: 15px;
        height: 15px;

        transition: background-image .2s;
        background-image: url(${({ theme }) => theme.colors.icon});
    }

    &:hover {
        transform: translateY(1px)
    }
`
