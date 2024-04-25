import { NextResponse } from "next/server";
// import sgMail from "@sendgrid/mail";
const sgMail = require("@sendgrid/mail");

export async function POST(req) {
  const body = await req.json();

//   const fileIo = 
  

// }


// const myHeaders = new Headers();
// myHeaders.append("accept", "application/json");
// myHeaders.append("Authorization", "Bearer cf0c90ad-e01e-454b-aef9-e98e6d46d2b4");

// const formdata = new FormData();
// formdata.append("file", fileInput.files[0], "[PROXY]");
// formdata.append("expires", "2024-04-26T00:00:00Z");
// formdata.append("autoDelete", "true");

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: formdata,
//   redirect: "follow"
// };

// fetch("https://file.io/", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

}