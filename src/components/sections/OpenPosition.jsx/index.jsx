"use client";
import { AnimateButton, Button } from "@/components/Buttons";
import { FullWidthContent } from "@/components/Sections";
import { useContext, useMemo, useState } from "react";
import { DesignContext } from "@/context/design";
import Modal from "@/components/Modals/ApplyModals/ApplyModal";
import ApplyModalData from "@/components/Modals/ApplyModals/ApplyModalData";
import ContactUs from "../ContactUs";
export default function OpenPosition({ slug }) {
  const {
    theme: { button },
    data: { careers },
  } = useContext(DesignContext);

  const [isOpen, setIsOpen] = useState(false);
  const handleOnClose = () => {
    setIsOpen(false);
  };

  const career = useMemo(() => {
    const getCareer = () => careers.filter((item) => item.slug === slug);
    const data = getCareer();
    if (data.length === 0) {
      notFound();
    }
    return data[0];
  }, [careers, slug]);

  return (
    <section className="pt-10 bg-secondary">
      <FullWidthContent>
        <h1 className="text-xs md:text-sm text-red text-center mb-1 tracking-widest">
          JOB DESCRIPTION
        </h1>
        <h1 className="text-3xl md:text-5xl text-center mb-5 md:mb-9">
          {career.title}
        </h1>
        {career?.detail ? <p className="mb-3">{career.detail}</p> : ""}
        {career?.list ? (
          <ul className="list-disc pl-5 mb-5">
            {career.list.map((item) => (
              <li key={item.id}>{item.detail}</li>
            ))}
          </ul>
        ) : (
          ""
        )}
        <div>
          {career?.other
            ? career?.other?.map((item) => {
                return (
                  <div key={item.title} className="mb-5">
                    <h2 className="text-[20px] font-rob500 md:text-2xl mb-3">{item.title}</h2>
                    {item.detail ? (
                      <p className="text-[13px] md:text-[15px]">{item.detail}</p>
                    ) : (
                      ""
                    )}
                    {item?.list?.length ? (
                      <ul className="list-disc pl-5 text-[15px]">
                        {item.list.map((itemList) => (
                          <li key={itemList.id}>
                            <p className="text-primary text-[13px] md:text-[15px]">{itemList.detail}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })
            : ""}

          <AnimateButton
            className={`${button.red} w-full before:bg-primary rounded-sm hover:bg-primary my-6`}
            onClick={() => setIsOpen(true)}
          >
            Apply Now
          </AnimateButton>
        </div>
      </FullWidthContent>
      <ContactUs />

      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ApplyModalData title={career.title}  isOpen={isOpen} onClose={handleOnClose}/>
      </Modal>
    </section>
  );
}
