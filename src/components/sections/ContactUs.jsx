import "@splidejs/react-splide/css";
import { FullWidthContent } from "../Sections";
import Image from "next/image";
import { GetInTouchForm } from "../forms";
const ContactUs = () => {
  return (
    <section id="contact" className="bg-secondary py-12 lg:py-20">
      <FullWidthContent className="flex flex-col-reverse gap-10 md:gap-16 md:flex-row">
        <div className="flex-1 bg-gret">
          {/* <Image
            src={"/images/map.jpg"}
            className="w-full h-auto md:h-full object-cover"
            alt=""
            width={698}
            height={600}
          /> */}

          <iframe
            width="600"
            height="450"
            style={{
              border: "0px",
              width: "100%",
              height: "100%",
              minHeight: "300px",
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            // src={`https://www.google.com/maps/embed/v1/place?key=${"AIzaSyBI9tlb2yGJ0YTPBvzFzs9TONYJSBmvcJM"}&q=senior+assisted+care+near+me&zoom=9`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.5735495735867!2d-78.92583352349624!3d40.329621060935665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cb114be29d6913%3A0xf97c88de0b68723c!2s17%20Johns%20St%2C%20Johnstown%2C%20PA%2015901%2C%20USA!5e0!3m2!1sen!2s!4v1714057466886!5m2!1sen!2s&zoom=15"
          ></iframe>

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.5735495735867!2d-78.92583352349624!3d40.329621060935665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cb114be29d6913%3A0xf97c88de0b68723c!2s17%20Johns%20St%2C%20Johnstown%2C%20PA%2015901%2C%20USA!5e0!3m2!1sen!2s!4v1714057466886!5m2!1sen!2s"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
        <div className="flex-1 mb-auto mt-auto">
          <GetInTouchForm
            title={"Contact Us"}
            detail={
              "For any inquiries, questions, or commendations, please call: (814) 254 - 4376 or fill out the following form."
            }
          />
        </div>
      </FullWidthContent>
    </section>
  );
};

export default ContactUs;
