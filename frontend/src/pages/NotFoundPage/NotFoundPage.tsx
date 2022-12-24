import * as Styled from "./NotFoundPage.styles"


const NotFoundPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.LinkWrapper to='/'>
        <img src={'./notfound.svg'} alt='notfound'/>
      </Styled.LinkWrapper>
      <Styled.TitleTypography>Page Not Found</Styled.TitleTypography>
    </Styled.Wrapper>
  );
};

export default NotFoundPage;
