import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false); // State variable to track email sending status
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    emailjs
      .sendForm('service_9apd3g8', 'template_yyd751o', form.current, {
        publicKey: 'B5_ws8EghyEjvvlNL',
      })
      .then(
        () => {
          console.log('SUCCESSFULLY SENT..');
          setIsEmailSent(true); // Set the state variable to true when email is successfully sent
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          }); // Reset form data after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    // Scroll to the ContactMe section
    document.getElementById('ContactMe').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ContactMe" className="container">
      <div>
        <p className="sub--title">Hi there!</p>
        <h2>Get in Touch: Let's Connect and Collaborate!</h2>
        
      </div>
      <label htmlFor="choose-topic" className="contact label"> 
          <span className="text-nd">I have knowledge of </span>
          <select
            id="choose-topic"
            className="contact--input text nd"
            required 
          >
            <option>Hire me! Select....</option>
            <option>Software Development</option>
            <option>Information Technology</option>
            <option>Business Analyst</option>
            <option>Front-End</option>
            <option>Back-End</option>
            
            
          </select>
        </label>



      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="inputGroup">
          
          <label htmlFor="user_name" className="label">Name</label>
          
          <br></br>
          <input
            id="user_name"
            type="text"
            placeholder="Name"
            name="user_name"
            className="input"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="user_email" className="label">Email</label>
            
          <br></br>
          <input
            id="user_email"
            type="email"
            placeholder="Email"
            name="user_email"
            className="input"
            value={formData.user_email}
            onChange={handleChange}
            required
          
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="message" className="label">
            Your message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            className="textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkboxGroup">
          <input
            id="terms_checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="checkbox"
            required
          />
          <label htmlFor="terms_checkbox" className="checkboxLabel">
            Yes, I agree to the terms and conditions
          </label>
        </div>
        <div className="buttonGroup">
          <button type="submit" className="button">
            Send
          </button>
        </div>
      </form>

      {/* Display success message if email is sent */}
      {isEmailSent && <p>Email successfully sent!</p>}
    </section>
  );
}
