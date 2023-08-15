import React from "react";
import { Link } from "react-router-dom";
import "./BookingCard.css";


/** Show limited information about a dog
 *
 * Is rendered by DogList to show a "card" for each dog.
 *
 * DogList -> DogCard
 */

function BookingCard({ id, username, image, dog_id, start_date, end_date, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className="BookingCard card">
      <div classNmae="card-body">
        <h6 className="card-title ml-3 mt-3">
          {dog_id}
          <br />
          <p>Start date:</p>{new Date(start_date).toISOString().split("T")[0]}
          <br />
          <p>End Date: </p>{new Date(end_date).toISOString().split("T")[0]}
        </h6>
      </div >
      <button className="btn btn-primary btn-block mt-4" onClick={handleDelete}>Delete Booking</button>

    </div>
  );
}

export default BookingCard;
