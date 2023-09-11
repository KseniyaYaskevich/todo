import { Header } from "../../components/Header/Header"
import { NotFoundBackground, NotFoundCode, NotFoundContainer, NotFoundImage, NotFoundTitle } from "./NotFound.styled"
import { iconDribbble } from '../../assets/images'
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from '../../styles/GlobalStyle';
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const NotFound = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <NotFoundContainer>
          <NotFoundBackground>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundImage icon={iconDribbble} />
            <NotFoundCode>
              <span>this_page</span>.<em>not_found</em> = true;
            </NotFoundCode>
            <NotFoundCode>
              <span>if</span> (<b>you_spelt_it_wrong</b>) {'{'}<span>try_again()</span>{';}'}
            </NotFoundCode>
            <NotFoundCode>
              <span>else if (<b>we_screwed_up</b>)</span> {'{'}<em>alert</em>{'('}<i>"We're really sorry about that."</i>{');'}
            </NotFoundCode>
          </NotFoundBackground>
        </NotFoundContainer>
      </ThemeProvider>
    </>
  )
}