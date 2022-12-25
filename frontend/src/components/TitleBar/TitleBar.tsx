import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useCollection } from "../../hook";
import * as Styled from "./TitleBar.styles";

const TitleBar = (props: { collectionId: string }) => {
  const navigate = useNavigate();

  const navigateBackHandler = () => {
    navigate(-1);
  };

  const { data, isLoading } = useCollection(+props.collectionId);

  const title = isLoading ? "Loading..." : data!.name;
  const description = isLoading ? "Loading..." : data!.description;

  return (
    <Styled.GridContainer container>
      <Styled.GridItem item xs={10} md={10}>
        <Styled.TitleBarWrapper>
          <Styled.NavigateBack onClick={navigateBackHandler}><ArrowBackIosNewIcon/></Styled.NavigateBack>
          <Styled.TitleName>{title}</Styled.TitleName>
          <Styled.TitleDescription>{description}</Styled.TitleDescription>
        </Styled.TitleBarWrapper>
      </Styled.GridItem>
    </Styled.GridContainer>
  );
};

export default TitleBar;
