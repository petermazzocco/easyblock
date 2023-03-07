import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = e.target.value;
    navigate(`address/${result}`);
  };

  return (
    <div>
      <form>
        <input
          placeholder="COMING SOON"
          className="px-4 py-2 text-black rounded-sm cursor-not-allowed"
          disabled
        />
      </form>
    </div>
  );
};

export default SearchBar;
