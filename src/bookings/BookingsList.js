import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import PuphubApi from "../api/api";
import BookingCard from "./BookingCard";
import LoadingSpinner from "../common/LoadingSpinner";

/** Show page with list of dogs.
 *
 * On mount, loads dogs from API.
 * Re-loads filtered dogs on submit from search form.
 *
 * This is routed to at /dogs 
 *
 * Routes -> { DogCard, SearchForm }
 */

function BookingList() {
  console.debug("BookingList");

  const [bookings, setBookings] = useState(null);

  useEffect(function getBookingsOnMount() {
    console.debug("DogList useEffect getDogsOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads dogs. */
  async function search(date) {
    let bookings = await PuphubApi.getBookings(date);
    setBookings(bookings);
  }

//   if (!bookings) return <LoadingSpinner />;
if (!bookings) return "NO BOOKINGS";

  return (
      <div className="CompanyList col-md-8 offset-md-2">
        {bookings.length
            ? (
                <div className="CompanyList-list">
                  {bookings.map(b => (
                      <BookingCard
                          key={b.id}
                          id={b.id}
                          date={b.date}
                          
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
      </div>
  );
}

export default BookingList;
