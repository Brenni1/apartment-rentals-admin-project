import logoImage from "../assets/apartment-logo.png";

const NavBar = () => {
  return (
    <div id="navBar">
      <h1>
        <img src={logoImage} alt="Company Logo" />
        Apartment Rental Company
      </h1>
    </div>
  );
};

export default NavBar;
