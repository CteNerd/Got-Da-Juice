import React, { useState } from 'react';
import './Contact.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

function Contact () {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to API or backend)
        console.log({ name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <Header />
            <SectionTitle title={'Contact Us'} />
            <h3>We would love to hear from you</h3>
            <h4>If you're looking for assistance or just want to say hi, drop us a message</h4>
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>
            <div className="form-group">
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    rows={5}
                    required
                ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit Now</button>
        </form>
            <Footer />
        </div>
    )
}

export default Contact;