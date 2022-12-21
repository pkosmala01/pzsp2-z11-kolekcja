import axios from "axios";
import { useQuery } from "react-query";
import useGetData from "../../hook/useGetData";
import { ItemsWrapper } from "./ItemsGrid.styles";
import { URL } from "../../untils/endpoint";

const ItemsGrid = (props: { param: string | undefined }) => {
  //   const { data, isLoading } = useGetData(`collections/${props.param}/items`);
  const { data:itemsData, isLoading:itemsLoading } = useQuery("collection", async () => {
    const responce = await axios.get(URL + `collections/${props.param}/items`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return responce.data;
  });

  console.log("Items: ",itemsData);

  const items = itemsLoading ? null : itemsData;

  return (
    <ItemsWrapper>
      {/* {console.log(items)}
        {items && items.map((e: any, i: any) => {
          <div key={i}>{e.name}</div>;
        })} */}
    </ItemsWrapper>
  );
};

export default ItemsGrid;
