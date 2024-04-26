import { FullWidthContent } from "@/components/Sections";
import Image from "next/image";
import WelcomeDownloadGuidForm from "@/components/forms/WelcomeForm";
const ModalData = ({onClose}) => {
  return (
    <section className="">
      <FullWidthContent className="flex md:pr-0 py-8 max-w-[1920px] flex-col md:gap-10 md:flex-row">
        <div className="md:flex-1">
          <Image
            src={"/images/welcome-form.jpg"}
            className="hidden md:block w-full h-auto md:h-full object-cover max-h-[635px]"
            alt=""
            width={642}
            height={635}
          />
        </div>
        <div className="flex-1 mb-auto mt-auto">
          <WelcomeDownloadGuidForm
            className={"lg:w-[512px] mx-auto pr-0 md:pr-10"}
            title={"Download Our Guide"}
            detail={
              "Fill the form to unlock valuable insights and expertise by downloading our guide for free."
            }
            onClose={onClose}
          />
        </div>
      </FullWidthContent>
    </section>
  );
};

export default ModalData;
