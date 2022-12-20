import { useParams } from "react-router-dom";

const CollectionItems = () => {
  const params = useParams();
  const { collectionId } = params;
  console.log(collectionId);
  return <div>This is CollectionItems</div>
};

export default CollectionItems;