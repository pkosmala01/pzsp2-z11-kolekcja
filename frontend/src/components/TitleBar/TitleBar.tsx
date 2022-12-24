import { useNavigate } from "react-router-dom";
import { NavigateBack, TitleBarWrapper, TitleDescription, TitleName } from "./TitleBar.styles";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useCollection } from "../../hook";

const TitleBar = (props: { collectionId: string }) => {
  const navigate = useNavigate();

  const navigateBackHandler = () => {
    navigate(-1);
  };

  const { data, isLoading } = useCollection(+props.collectionId);

  const title = isLoading ? "Loading..." : data.name;
  const description = isLoading ? "Loading..." : data.description;

  return (
    <TitleBarWrapper>
      <NavigateBack onClick={navigateBackHandler}><ArrowBackIosNewIcon/></NavigateBack>
      <TitleName>{title}</TitleName>
	    <TitleDescription>{description}</TitleDescription>
    </TitleBarWrapper>
  );
};

export default TitleBar;
