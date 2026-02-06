function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>

        <p className="contact-subtitle">
          Have a project, question, or just want to connect?  
          Fill the form below and I’ll get back to you.
        </p>

        <form
          className="contact-form"
          action="mailto:zeeshan.codev@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
