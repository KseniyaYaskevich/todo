import { HeaderContainer, HeaderLink, HeaderWrapper } from './Header.styled'

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLink
                    to="/"
                >ToDo</HeaderLink>
                <HeaderLink
                    to="/list"
                >List</HeaderLink>
            </HeaderContainer>
        </HeaderWrapper>
    )
}