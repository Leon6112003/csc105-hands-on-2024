import { useNavigate } from "react-router-dom";

const FavouritesPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const q = e.target.query.value;
    const size = e.target.size.value;
    navigate(`/fav/${number}?q=${q}&size=${size}`);
  };

  return (
    <div>
      <h1>This is the Favourites Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border-2 rounded-lg px-4 py-1 bg-blue-300"
          type="number"
          name="number"
          min="1"
          max="100"
          required
        />
        <select
          classname="border-2 rounded-lg px-4 py-1 bg-blue-300"
          name="query"
          required
        >
          <option value="love">Love</option>
          <option value="like">Like</option>
        </select>
        <select
          className="border-2 rounded-lg px-4 py-1 bg-blue-300"
          name="size"
          required
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button
          className="border-2 rounded-lg px-4 py-1 bg-blue-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FavouritesPage;
