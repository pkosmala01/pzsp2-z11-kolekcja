import { useNavigate } from "react-router-dom";
import useGetData from "../../hook/useGetData";
import { NavigateBack, TitleBarWrapper, TitleDescription, TitleName } from "./TitleBar.tyles";

const TitleBar = (props: { param: string | undefined }) => {
  const navigate = useNavigate();

  const navigateBackHandler = () => {
    navigate(-1);
  };

  const { data, isLoading } = useGetData("collections/" + props.param);

  const title = isLoading ? "Loading..." : data.name;
  const description = isLoading ? "Loading..." : data.description;

  return (
    <TitleBarWrapper>
      <NavigateBack onClick={navigateBackHandler}>{"<"}</NavigateBack>
      <TitleName>{title}</TitleName>
	  <TitleDescription>{description}</TitleDescription>
    </TitleBarWrapper>
  );
};

export default TitleBar;
