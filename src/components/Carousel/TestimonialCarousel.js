import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';
import Logo from './Website_Logo.png.avif';
import JuiceMan from './JuiceMan.png';

const testimonials = [
    {
        name: 'Joshua Pragg',
        date: 'July 15, 2024',
        review: 'Stopped by for some juice on a hot day and had a fantastic experience!',
        rating: 5,
        image: JuiceMan,
    },
    {
        name: 'Margherita Salina',
        date: 'August 4, 2024',
        review: 'Absolutely delicious! We had the "Beets by Dre" and it was so refreshing!',
        rating: 5,
        image: JuiceMan,
    },
    {
        name: 'Thaddeus Griffin',
        date: 'August 4, 2024',
        review: 'The best juice in Jersey City! Customer service even better.',
        rating: 5,
        image: JuiceMan,
    },
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((currentIndex + 1) % testimonials.length);
            }, 2000); // 2000ms = 2 seconds

            return () => clearInterval(interval); // Cleanup the interval on component unmount
        }
    }, [currentIndex, isPaused]);

    const nextTestimonial = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className="testimonial-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="testimonial-card">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                <h3>{testimonials[currentIndex].name}</h3>
                <p className="date">{testimonials[currentIndex].date}</p>
                <p className="review">"{testimonials[currentIndex].review}"</p>
                <div className="rating">
                    {'★'.repeat(testimonials[currentIndex].rating)}
                    {'☆'.repeat(5 - testimonials[currentIndex].rating)}
                </div>
            </div>
            <button className="prev" onClick={prevTestimonial}>❮</button>
            <button className="next" onClick={nextTestimonial}>❯</button>
            <div className="dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToTestimonial(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
