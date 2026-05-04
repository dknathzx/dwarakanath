import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setOpen(false);
    setChecked(false);
  };

  const handleSend = () => {
    window.location.href = "mailto:dknathzx@gmail.com?subject=" + form.subject + "&body=Name: " + form.name + "%0AEmail: " + form.email + "%0A%0A" + form.message;
    handleClose();
  };

  return (
    <>
      <div className="contact-switch">
        <span className="contact-label">Reach Me</span>
        <label className="switch">
          <input
            className="toggle"
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              if (e.target.checked) {
                setChecked(true);
                setOpen(true);
              }
            }}
          />
          <span className="slider"></span>
          <span className="card-side"></span>
        </label>
      </div>

      {open && (
        <div className="dialog-overlay" onClick={handleClose}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn" onClick={handleClose}>X</button>

            <p className="form-title">Reach Me</p>
            <p className="form-sub">Fill in the details and I will get back to you.</p>

            <div className="form_group">
              <label className="sub_title">Your Name</label>
              <input className="form_style" type="text" name="name" placeholder="Enter your full name" value={form.name} onChange={handleChange} />
            </div>

            <div className="form_group">
              <label className="sub_title">Your Email</label>
              <input className="form_style" type="email" name="email" placeholder="Enter your email" value={form.email} onChange={handleChange} />
            </div>

            <div className="form_group">
              <label className="sub_title">Subject</label>
              <input className="form_style" type="text" name="subject" placeholder="Whats this about?" value={form.subject} onChange={handleChange} />
            </div>

            <div className="form_group">
              <label className="sub_title">Your Message</label>
              <textarea className="form_style form_textarea" name="message" placeholder="Write your message here..." rows={4} value={form.message} onChange={handleChange} />
            </div>

            <button className="btn" onClick={handleSend}>SEND MESSAGE</button>

            <p className="reach-direct">Or reach me directly</p>

            <div className="quick-links">
              <a href="https://linkedin.com/in/dwarakanathk" target="_blank" rel="noreferrer" className="quick-btn linkedin">LinkedIn</a>
              <a href="https://github.com/dknathzx" target="_blank" rel="noreferrer" className="quick-btn github">GitHub</a>
              <a href="tel:+919207904661" className="quick-btn phone">+91 9207904661</a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Contact;