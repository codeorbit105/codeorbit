const Contact = require("../models/project");
const axios = require("axios");

// Helper function to send mail via EmailJS REST API
async function sendViaEmailJS({
  service_id,
  template_id,
  user_id,
  template_params,
}) {
  const url = "https://api.emailjs.com/api/v1.0/email/send";
  const payload = {
    service_id,
    template_id,
    user_id,
    template_params,
  };

  try {
    const res = await axios.post(url, payload, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("✅ Email sent via EmailJS:", res.status);
  } catch (error) {
    console.error("❌ EmailJS error:", error.response?.data || error.message);
  }
}

// Controller function to handle POST /api/contact
async function postContact(req, res) {
  try {
    const { name, email, phone, company, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }

    // save to MongoDB
    const contact = new Contact({ name, email, phone, company, message });
    await contact.save();
    console.log("💾 Contact saved to MongoDB");

    // send email using EmailJS
    await sendViaEmailJS({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: {
        name,
        email,
        phone: phone || "Not provided",
        company: company || "Not provided",
        message,
        title: "Contact Form Message",
      },
    });

    // success response
    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Contact form error:", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send message" });
  }
}

module.exports = { postContact };
