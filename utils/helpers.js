import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const sendEmail = (
  name = "",
  email = "",
  number = "",
  company = "",
  subject = "",
  need = "",
  budget = "",
  industry = "",
  message = "",
  setLoading
) => {
  if (typeof setLoading === "function") {
    setLoading(true);
  }

  const serviceID = email.includes("gmail")
    ? process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ID
    : email.includes("yahoo")
    ? process.env.NEXT_PUBLIC_YAHOO_SERVICE_ID
    : process.env.NEXT_PUBLIC_SERVICE_ID;

  emailjs
    .send(
      serviceID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      {
        from_name: name,
        to_name: "Digimark Developers",
        user_email: email,
        message: `Client Phone: ${number} | Client Company: ${company} | Client Subject: ${subject} | Client Need: ${need} | Client Budget: ${budget} | Client Industry: ${industry} | Client Message: ${message}`,
      },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      }
    )
    .then(
      (response) => {
        toast.success("Successfully Sent Message!");
        if (typeof setLoading === "function") {
          setLoading(true);
        }
      },
      (error) => {
        toast.error("Something went wrong, try again later!");
        if (typeof setLoading === "function") {
          setLoading(true);
        }
      }
    );
};
