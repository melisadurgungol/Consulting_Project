import React from "react";
import "../assets/styles/TestimonialCard.css"; 
import Title from "../components/Title";
import TestimonialDandan from "../assets/images/testimonial-dandan.png";

const TestimonialCard = ({
    testimonialImg,
    testimonialDescription,
    testimonialName,
    testimonialJob
    
}) => {
    return(
        <div className="testimonial-card">
            <div className="testimonial-person">
                <img src={testimonialImg} />
                <div className="testimonial-person-info">
                    <h2>{testimonialName}</h2>
                    <span className="testimonial-job">{testimonialJob}</span>
                </div>
            </div>
            <div className="testimonial-info">
                <p>{testimonialDescription}</p>
                <img src={TestimonialDandan} alt="" />
            </div>
            
        </div>
    );
};

export default TestimonialCard;