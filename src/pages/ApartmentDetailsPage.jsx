import { useParams } from "react-router";
import placeholderImage from "./../assets/placeholder.png";
export const ApartmentDetailsPage = ({ apartmentData }) => {
  const { id } = useParams();
  const apartmentProfile = apartmentData.find((apartment) => apartment.id === id);
  return (
    <div className="ApartmentDetailsPage">
      <h1>Apartment:</h1>
      {apartmentProfile && (
        <div className="apartment-card">
          <img src={apartmentProfile.picture_url.url || placeholderImage} width="300px" />
          <p>
            <strong>Country:</strong> {apartmentProfile.country}
          </p>
          <p>
            <strong>City:</strong> {apartmentProfile.city}
          </p>
          <p>
            <strong>Neighbourhood:</strong> {apartmentProfile.neighbourhood}
          </p>
          <p>
            <strong>Name:</strong> {apartmentProfile.name}
          </p>
          <p>
            <strong>Space:</strong> {apartmentProfile.space}
          </p>
          <p>
            <strong>Description:</strong> {apartmentProfile.description}
          </p>
          <p>
            <strong>House Rules:</strong> {apartmentProfile.house_rules}
          </p>
          <p>
            <strong>Host Name:</strong> {apartmentProfile.host_name}
          </p>
          <p>
            <strong>Host since:</strong> {apartmentProfile.host_since}
          </p>
          <p>
            <strong>Host Response Time:</strong> {apartmentProfile.host_response_time}
          </p>
          <p>
            <strong>Property Type:</strong> {apartmentProfile.property_type}
          </p>
          <p>
            <strong>Room Type:</strong> {apartmentProfile.room_type}
          </p>
          <p>
            <strong>Accommodates:</strong> {apartmentProfile.accommodates} people{" "}
          </p>
          <p>
            <strong>Bathrooms:</strong> {apartmentProfile.bathrooms}
          </p>
          <p>
            <strong>Bedrooms:</strong> {apartmentProfile.bedrooms}
          </p>
          <p>
            <strong>Beds:</strong> {apartmentProfile.beds}
          </p>
          <p>
            <strong>Price:</strong> {apartmentProfile.price} € per night
          </p>
          <p>
            <strong>Cleaning Fee:</strong> {apartmentProfile.cleaning_fee} € per Stay
          </p>
          <p>
            <strong>Review Scores Rating:</strong> {apartmentProfile.review_scores_rating} Points
          </p>
          <p>
            <strong>Cancellation Policy:</strong> {apartmentProfile.cancellation_policy}
          </p>
        </div>
      )}
    </div>
  );
};
