import "./styles.css";
import { useState } from "react";

function App() {
  return <RobotList />;
}

const RobotList = () => {
  const [search, setSearch] = useState("");
  const [items, setItem] = useState([]);
  // KODUNUZ BURAYA GELECEK
  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const img = `https://robohash.org/${search}`;
    if (items.includes(img)) {
      alert("Robot listede bulunmakta!");
    } else {
      setItem([...items, img]);
    }
  };

  const handleRemove = (img) => {
    const updatedItems = items.filter((item) => item !== img);
    setItem(updatedItems);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          placeholder="Generate Robot"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <h1>Robot List</h1>
      <div className="robot-list">
        {items.map((img, id = crypto.randomUUID()) => (
          <div key={id} className="robot-item">
            <button className="robo-button" onClick={() => handleRemove(img)}>
              <img src={img} alt={`Robot ${id}`} />
            </button>
          </div>
        ))} 
      </div>
    </div>
  );
};
export default App;
