import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div>
      <h1>
        Your favourite post is {q}. Post ID is {id}. Size is {size}.
      </h1>
    </div>
  );
};

export default FavouriteDetailPage;
