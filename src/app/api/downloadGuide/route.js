import { downloadGuideSchema } from "@/lib/forms/downloadGuideSchema";
import { Joan } from "next/font/google";
import { NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";
const sgMail = require("@sendgrid/mail");

export async function POST(req) {
  const body = await req.json();
  const apiKey = process.env.SENDGRID_API_KEY
  const senderEmail = process.env.SENDER_EMAIL_ADDRESS
  sgMail.setApiKey(apiKey);
  //
  const msg = {
    to: body.email,
    from: senderEmail, //process.env.SENDER_EMAIL_ADDRESS, // Use the email address or domain you verified above
    subject: body.title,
    text: body.text,
    html: body.html,
  };

  return sgMail.send(msg).then(
    () => {
      return NextResponse.json({ message: "Email sent successfully" });
    },
    (error) => {
      console.error(error);

      if (error.response) {
        return NextResponse.error({ message: "Did not fetch the details", error: error.response.body });
      }
    }
  );
    // return NextResponse.json({ message: "Form Submitted Successfully", body });
  // try {
  //   // const validated = downloadGuideSchema.parse(body);

  // } catch (e) {
  //   console.error(e);
  //   return NextResponse.json({ message: e });
  // }
}
