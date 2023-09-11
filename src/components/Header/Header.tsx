import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../feature/themeList'
import { HeaderButton, HeaderContainer, HeaderLink, HeaderWrapper } from './Header.styled'

export const Header = () => {
    const dispatch = useDispatch()
    
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLink
                    to="/"
                >ToDo</HeaderLink>
                <HeaderLink
                    to="/list"
                >List</HeaderLink>
                <HeaderButton 
                    type="button" 
                    onClick={() => dispatch(toggleThemeAction())}
                >Изменить тему</HeaderButton>
            </HeaderContainer>
        </HeaderWrapper>
    )
}