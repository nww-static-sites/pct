import { NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";
const sgMail = require("@sendgrid/mail");

export async function POST(req) {
  const body = await req.json();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // 
 
  const msg = {
    "to": "muhammad.hamza.strugbits@gmail.com",
    "from": process.env.SENDER_EMAIL_ADDRESS,//process.env.SENDER_EMAIL_ADDRESS, // Use the email address or domain you verified above
    "subject": "Test",
    "text": "TESTING",
    "html": "<strong> TESTING </strong>",
  };

  return sgMail.send(msg).then(
    () => {
      return NextResponse.json({ message: "Email sent successfully" });
    },
    (error) => {

      if (error.response) {
        return NextResponse.json({ message: error.response.body });
      }
    }
  );
}
