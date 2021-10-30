import black_logo from "../../assets/quiz_logo.svg";
import white_logo from "../../assets/quiz_logo_white.svg";
import { StyledLink, LogoImg, LogoImgWrapper, LogoText } from "./Logo.styles";

import { Theme } from "../../common";

type LogoProps = {
  mode: Theme;
};

function Logo({ mode }: LogoProps) {
  console.log(mode);
  return (
    <>
      <StyledLink to="/">
        <LogoImgWrapper>
          <LogoImg src={mode === "light" ? black_logo : white_logo} />
        </LogoImgWrapper>
        <LogoText>Liquiz</LogoText>
      </StyledLink>
    </>
  );
}

export { Logo };
