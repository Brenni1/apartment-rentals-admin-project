import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <h3>
        <Link to="/">Link to the Home Page</Link>
        <p></p>
        <Link to="/about-page">Link to the About Page</Link>
        <p></p>
        <Link to="/addApartment">Add a new Apartment to the List</Link>
      </h3>
    </div>
  );
};

export default Sidebar;
