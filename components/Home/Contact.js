import { useState, useRef } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const messageRef = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
      });

      if (res.ok) console.log('Submitted');
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <h2 className="title">Contact</h2>
      {!loading && !submitted && (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" ref={nameRef} placeholder="Nick" required />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" ref={emailRef} placeholder="nick@gmail.com" required />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="text"
            rows="4"
            ref={messageRef}
            placeholder="Hey, I'm looking for ..."
            required
          />
          <button type="submit" className="contact-form-button">
            SUBMIT
          </button>
        </form>
      )}
      {loading && <p>Loading</p>}
      {!loading && submitted && <p>Thanks for submitting.</p>}
    </section>
  );
}
