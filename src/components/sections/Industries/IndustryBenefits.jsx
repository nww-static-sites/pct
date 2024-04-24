import "@splidejs/react-splide/css";
import { FullWidthContent } from "@/components/Sections";

const IndustryBenefits = ({ title, subTitle, detail, benefits }) => {
  return (
    <section className="bg-white lg:pt-10">
      <FullWidthContent className="min-h-[400px] lg:pt-10">
        <div className="bg-black px-3 py-8 md:p-10 lg:p-20 rounded-xl">
          <h1 className="text-red text-[12px] md:text-[16px] text-center tracking-widest mb-1">
            {subTitle}
          </h1>
          <h1 className="text-[28px] text-secondary md:text-5xl text-center mb-3">
            {title}
          </h1>
          <p className="text-secondary text-center mb-16">{detail}</p>
          <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-start gap-10">
            {benefits.length &&
              benefits.map((benefit, ind) => {
                return (
                  <li
                    key={benefit.id}
                    className="text-secondary text-center max-w-[200px]"
                  >
                    <div className="w-[50px] h-[50px] mx-auto mb-4 grid place-content-center rounded-full bg-red text-lg">
                      {`0${ind + 1}`.slice(-2)}
                    </div>
                    <p className="whitespace-pre-line text-sm lg:text-[16px]">{benefit.benefit}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </FullWidthContent>
    </section>
  );
};

export default IndustryBenefits;
