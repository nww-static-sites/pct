import "@splidejs/react-splide/css";
import { FullWidthContent } from "@/components/Sections";
import ApplyForm from "@/components/forms/ApplyForm";
const ApplyModalData = ({title}) => {
  return (
    <section className="">
      <FullWidthContent className="flex flex-col-reverse px-0 gap-10 md:gap-16 md:flex-row">
        <div className="flex-1 mb-auto mt-auto">
          <ApplyForm formTitle={title} />
        </div>
      </FullWidthContent>
    </section>
  );
};

export default ApplyModalData;
