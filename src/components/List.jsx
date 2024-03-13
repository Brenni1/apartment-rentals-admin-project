import placeholderImage from "./../assets/placeholder.png";
import { Link } from "react-router-dom";
export const List = ({ apartmentData, setApartmentData }) => {
  const handleDelete = (id) => {
    console.log("the apartment id is ", id);
    const filteredApartments = apartmentData.filter((apartmentFilter) => apartmentFilter.id !== id);
    //this sets the state which in turn, triggers a re-render of the page.
    setApartmentData(filteredApartments);
  };

  return (
    <div className="totalInfo">
      {apartmentData.map((apartment) => (
        <div className="card" key={apartment.id}>
          <Link key={apartment.id} to={`/apartments/${apartment.id}`}>
            <div className="cardContent">
              <img src={apartment.picture_url.url || placeholderImage} width="300px" />
              <p>
                {apartment.city}, {apartment.country}
              </p>
              <p>Neighbourhood: {apartment.neighbourhood != null ? apartment.neighbourhood : ""}</p>
              <p>Property: {apartment.property_type}</p>
              <p>Price: {apartment.price} € per Night</p>
              <p>Cleaning Fee: {apartment.cleaning_fee} € per Stay</p>
              <p>Rating: {apartment.review_scores_rating}</p>
            </div>
          </Link>
          <button
            onClick={() => {
              handleDelete(apartment.id);
            }}
          >
            Delete Object
          </button>
        </div>
      ))}
    </div>
  );
};
