import axios from "axios";
import { useQuery } from "react-query";
import { URL } from "../untils/endpoint";

const useGetData = (url: string) => {
  const { data, isLoading } = useQuery("collection", async () => {
    const responce = await axios.get(URL + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return responce.data;
  });
  return { data, isLoading };
};

export default useGetData;
