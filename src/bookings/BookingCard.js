import React from "react";
import { Link } from "react-router-dom";



/** Show limited information about a dog
 *
 * Is rendered by DogList to show a "card" for each dog.
 *
 * DogList -> DogCard 
 */

function BookingCard({ id, date }) {

  return ( 
        <div className="card-body">
          <h6 className="card-title">
            {id}
            {date}
          </h6>
        </div>
  );
}

export default BookingCard;