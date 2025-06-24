import { useState, useCallback } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

const handleSubmit = useCallback(
  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    setIsSubmitting(true);

    try { 
        //toggle this for local and prod
    //   const response = await fetch("http://localhost:4000/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    const response = await fetch("https://portfolio-api.gauravanization.in/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong.");
      }

      setSuccessMessage("Thanks! I’ll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form submission error:", error);
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  },
  [formData]
);


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4 py-20">
      <div className="w-full max-w-2xl bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-black"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none text-black"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {successMessage && (
            <p className="text-green-600 text-center font-medium">
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-600 text-center font-medium">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
