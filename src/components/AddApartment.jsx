import { useState } from "react";

export const AddApartment = ({ apartmentData, setApartmentData }) => {
  const [id, setId] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [name, setName] = useState("");
  const [space, setSpace] = useState("");
  const [description, setDescription] = useState("");
  const [houserules, setHouseRules] = useState("");
  const [hostname, setHostName] = useState("");
  const [hostsince, setHostSince] = useState("");
  const [host_response_time, setHostResponseTime] = useState("");
  const [property_type, setPropertyType] = useState("");
  const [room_type, setRoomType] = useState("");
  const [accommodates, setAccommodates] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [price, setPrice] = useState("");
  const [cleaning_fee, setCleaningFee] = useState("");
  const [review_scores_rating, setReviewScoresRating] = useState("");
  const [cancellation_policy, setCancellationPolicy] = useState("");

  const handleIdInput = (e) => setId(e.target.value);
  const handleCountryInput = (e) => setCountry(e.target.value);
  const handleCityInput = (e) => setCity(e.target.value);
  const handleNeighbourhoodInput = (e) => setNeighbourhood(e.target.value);
  const handleNameInput = (e) => setName(e.target.value);
  const handleSpaceInput = (e) => setSpace(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleHouseRulesInput = (e) => setHouseRules(e.target.value);
  const handleHostNameInput = (e) => setHostName(e.target.value);
  const handleHostSinceInput = (e) => setHostSince(e.target.value);
  const handleHostResponseTimeInput = (e) => setHostResponseTime(e.target.value);
  const handlePropertyTypeInput = (e) => setPropertyType(e.target.value);
  const handleRoomTypeInput = (e) => setRoomType(e.target.value);
  const handleAccommodatesInput = (e) => setAccommodates(e.target.value);
  const handleBathroomsInput = (e) => setBathrooms(e.target.value);
  const handleBedRoomsInput = (e) => setBedrooms(e.target.value);
  const handleBedsInput = (e) => setBeds(e.target.value);
  const handlePriceInput = (e) => setPrice(e.target.value);
  const handleCleaningFeeInput = (e) => setCleaningFee(e.target.value);
  const handleReviewScoresRatingInput = (e) => setReviewScoresRating(e.target.value);
  const handleCancellationPolicyInput = (e) => setCancellationPolicy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApartment = {
      id: apartmentData.length + 1,
      country: country,
      city: city,
      neighbourhood: neighbourhood,
      name: name,
      space: space,
      description: description,
      houserules: houserules,
      hostname: hostname,
      hostsince: hostsince,
      host_response_time: host_response_time,
      property_type: property_type,
      room_type: room_type,
      accommodates: accommodates,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      beds: beds,
      price: price,
      cleaning_fee: cleaning_fee,
      review_scores_rating: review_scores_rating,
      cancellation_policy: cancellation_policy,
      picture_url: { url: undefined },
    };

    const newList = [newApartment, ...apartmentData];

    setApartmentData(newList);

    setId("");
    setCountry("");
    setCity("");
    setNeighbourhood("");
    setName("");
    setSpace("");
    setDescription("");
    setHouseRules("");
    setHostName("");
    setHostSince("");
    setHostResponseTime("");
    setPropertyType("");
    setRoomType("");
    setAccommodates("");
    setBathrooms("");
    setBedrooms("");
    setBeds("");
    setPrice("");
    setCleaningFee("");
    setReviewScoresRating("");
    setCancellationPolicy("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>Add an Apartment</span>
        <div>
          <label>
            ID
            <input name="Id" type="text" placeholder="Id" value={id} onChange={handleIdInput} />
          </label>
          <label>
            Country
            <input name="Country" type="text" placeholder="Country" value={country} onChange={handleCountryInput} />
          </label>
          <label>
            City
            <input name="City" type="text" placeholder="City" value={city} onChange={handleCityInput} />
          </label>
          <label>
            Neighbourhood
            <input name="Neighbourhood" type="text" placeholder="Neighbourhood" value={neighbourhood} onChange={handleNeighbourhoodInput} />
          </label>
          <label>
            Name
            <input name="Name" type="text" placeholder="Name" value={name} onChange={handleNameInput} />
          </label>
          <label>
            Space
            <input name="Space" type="text" placeholder="Space" value={space} onChange={handleSpaceInput} />
          </label>
          <label>
            Description
            <input name="Description" type="text" placeholder="Description" value={description} onChange={handleDescriptionInput} />
          </label>
          <label>
            House Rules
            <input name="Houserules" type="text" placeholder="Houserules" value={houserules} onChange={handleHouseRulesInput} />
          </label>
          <label>
            Host Name
            <input name="Hostname" type="text" placeholder="Hostname" value={hostname} onChange={handleHostNameInput} />
          </label>
          <label>
            Host Since
            <input name="Hostsince" type="text" placeholder="Hostsince" value={hostsince} onChange={handleHostSinceInput} />
          </label>
          <label>
            Host Response Time
            <input
              name="Hostresponsetime"
              type="text"
              placeholder="Hostresponsetime"
              value={host_response_time}
              onChange={handleHostResponseTimeInput}
            />
          </label>
          <label>
            Property Type
            <input name="Propertytype" type="text" placeholder="PropertyType" value={property_type} onChange={handlePropertyTypeInput} />
          </label>
          <label>
            Room Type
            <input name="Roomtype" type="text" placeholder="Roomtype Type" value={room_type} onChange={handleRoomTypeInput} />
          </label>
          <label>
            Accommodates
            <input name="accommodates" type="number" placeholder="Accommodates" value={accommodates} onChange={handleAccommodatesInput} />
          </label>
          <label>
            Bathrooms
            <input name="bathroom" type="number" placeholder="Bathrooms" value={bathrooms} onChange={handleBathroomsInput} />
          </label>
          <label>
            Bedroom
            <input name="bedrooms" type="number" placeholder="Bedrooms" value={bedrooms} onChange={handleBedRoomsInput} />
          </label>
          <label>
            Beds
            <input name="beds" type="number" placeholder="Beds" value={beds} onChange={handleBedsInput} />
          </label>
          <label>
            Price
            <input name="price" type="number" placeholder="Price" value={price} onChange={handlePriceInput} />
          </label>
          <label>
            Cleaning Fees
            <input name="cleaningfees" type="number" placeholder="Cleaning Fees" value={cleaning_fee} onChange={handleCleaningFeeInput} />
          </label>
          <label>
            Review Scores Rating
            <input
              name="reviewscoresrating"
              type="number"
              placeholder="Review Score Rating"
              value={review_scores_rating}
              onChange={handleReviewScoresRatingInput}
            />
          </label>
          <label>
            Cancellation Policy
            <input
              name="cancellationpolicy"
              type="text"
              placeholder="cancellation Policy"
              value={cancellation_policy}
              onChange={handleCancellationPolicyInput}
            />
          </label>

          <button type="submit" onClick="return confirm('Are you sure?')">
            Add Apartment
          </button>

          <p>{console.log("apartment added")}</p>
        </div>
      </form>
    </>
  );
};
