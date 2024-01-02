import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Message sent successfully!');
      } else {
        console.error('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Contact">
      <h4>You can contact me here but please don't</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          name="message"
          value={formData.message}
          placeholder="Message"
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
