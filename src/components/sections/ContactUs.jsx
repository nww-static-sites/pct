import "@splidejs/react-splide/css";
import { FullWidthContent } from "../Sections";
import Image from "next/image";
import { GetInTouchForm } from "../forms";
const ContactUs = () => {
  return (
    <section id="contact" className="bg-secondary py-12 lg:py-20">
      <FullWidthContent className="flex flex-col-reverse gap-10 md:gap-16 md:flex-row">
        <div className="flex-1 bg-gret">
          <Image
            src={"/images/map.jpg"}
            className="w-full h-auto md:h-full object-cover"
            alt=""
            width={698}
            height={600}
          />

          {/* <iframe
            width="600"
            height="450"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyApyqYnG-WCRQyutTsWlVe7322a6RBhppk
    &q=Space+Needle,Seattle+WA"
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
