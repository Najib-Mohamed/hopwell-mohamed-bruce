import { Send } from "lucide-react";
import { useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formValues);
    // Reset form values after submission
    setFormValues({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <article className="card h-100 border-0 rounded-4 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <h2 className="h3 fw-bold mb-4">Send us a message</h2>

        <p className="text-secondary mb-4">Have questions or need assistance? Fill out the form below, and our team will get back to you promptly.</p>

        <form noValidate onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label className="form-label fw-semibold" htmlFor="fullName">Full Name</label>
              <input className="form-control form-control-lg" id="fullName" name="fullName" type="text" placeholder="Jane Doe" value={formValues.fullName} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter your full name.</div>
            </div>

            <div className="col-sm-6">
              <label className="form-label fw-semibold" htmlFor="email">Email Address</label>
              <input className="form-control form-control-lg" id="email" name="email" type="email" placeholder="jane@example.com" value={formValues.email} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold" htmlFor="subject">Subject</label>
              <input className="form-control form-control-lg" id="subject" name="subject" type="text" placeholder="How can we help?" value={formValues.subject} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter a subject.</div>
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold" htmlFor="message">Message</label>
              <textarea className="form-control form-control-lg" id="message" name="message" rows={5} placeholder="Tell us more..." value={formValues.message} onChange={handleChange} required />
              <div className="invalid-feedback">Please enter your message.</div>
            </div>

            <div className="col-12">
              <button className="btn btn-gradient btn-lg rounded-pill w-100 fw-semibold" type="submit">
                Send Message <Send className="ms-2" size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
}
