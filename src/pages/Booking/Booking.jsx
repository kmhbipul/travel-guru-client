import React from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { title, details } = booking;
  return (
    <div>
      <div>
        <div>
          <p>{title}</p>
          <p>{details}</p>
        </div>
        <div>Booking</div>
      </div>
    </div>
  );
};

export default Booking;
