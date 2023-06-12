import React from "react";
import {useNavigate} from "react-router-dom";
import RestaurantPic from "../assets/restaurant.jpg";
import BookingForm from "../sections/reservePages/BookingForm";

// 

const Booking =()=>{
    const naviagate=useNavigate();

    return (
        <main className="booking">
            <h1>Booking Table</h1>
            <section className="">
                <img src={RestaurantPic} alt="Restaurant View" 
                style={{width:"100%", height:"auto",borderRadius:"5px"}}/>
                
            </section>
            {/* Booking Form Section  */}
            <section>
                {/* importing the Booking Form component Page from sections>reservePages>Booking Form */}
                <BookingForm naviagate= {naviagate}/>

            </section>
        </main>
    );
}
export default Booking;