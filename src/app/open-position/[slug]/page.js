"use client";
import { AnimateButton, Button } from "@/components/Buttons";
import { FullWidthContent } from "@/components/Sections";
import { useContext, useState } from "react";
import { DesignContext } from "@/context/design";
import Modal from "@/components/Modals/ApplyModals/ApplyModal";
import ApplyModalData from "@/components/Modals/ApplyModals/ApplyModalData";
export default function CareerDetails() {
  const {
    theme: { button },
  } = useContext(DesignContext);

  const [isOpen, setIsOpen] = useState(false);
  const handleOnClose = () => {
    setIsOpen(false);
  };
  return (
    <section className="pt-20 ">
      <FullWidthContent>
        <h2 className="text-xs md:text-sm text-red text-center mb-1">
          JOB DESCRIPTION
        </h2>
        <h1 className="text-[28px] md:text-5xl text-center mb-9">
          Conformal Coating Technician
        </h1>
        <div>
          <div className="">
            <h2 className="text-2xl mb-3">Qualifications</h2>
            <p className="text-[15px]">
              This candidate will be responsible for cleaning masking, and
              applying conformal coatings to circuit board assemblies by using
              assembly drawings, technical manuals, and written directions.
            </p>
            <ul className="list-disc list-inside pl-3 text-[15px] py-5">
              <li>
                Must be able to work our schedule: Monday through Friday
                7:30am-4:00pm
              </li>
              <li>Minimum of High School Diploma or equivalent required</li>
              <li>
                Able to thrive in a fast-paced deadline driven environment
              </li>
              <li>ESD and Circuit Card handling knowledge is preferred</li>
              <li>Detail and organizational skills</li>
            </ul>
          </div>
          <div className="my-3">
            <h2 className="text-2xl mb-3">Requirements</h2>
            <ul className="list-disc list-inside pl-3 text-[15px] leading-loose">
              <li>
                Verify proper use of equipment and tooling through continuous
                monitoring of equipment gauges and inspection.
              </li>
              <li>
                Ensure equipment used to coat products is properly maintained
                and used in accordance to guidelines.
              </li>
              <li>
                Ensure proper movement of finished goods to inspection or
                shipping areas.
              </li>
              <li>
                Coordinate the cleaning and maintenance of spray application
                equipment booths, filters and other related equipment.
              </li>
              <li>
                Coordinate and direct the coating of sample and trial parts as
                requested
              </li>
              <li>Perform other duties as required, assigned or requested.</li>
              <li>
                Mix coating formulas to proper viscosity using thinner and or
                solvent
              </li>
              <li>
                Work from customer written specifications, worksheets as well as
                verbal instruction to facilitate productivity, efficiency and
                quality.
              </li>
            </ul>
          </div>
          <div className="my-3">
            <h2 className="text-2xl mb-3">Benefits</h2>
            <ul className="list-disc list-inside pl-3 text-[15px]">
              <li>Paid Time Off</li>
              <li>Paid Holidays</li>
              <li>Medical</li>
            </ul>
          </div>
          <div className="my-3">
            <h2 className="text-2xl mb-3">Job Type</h2>
            <p className="text-[15px]">Full Time</p>
          </div>
          <div className="my-3">
            <h2 className="text-2xl mb-3">Required Language</h2>
            <p className="text-[15px]">English</p>
          </div>
          <AnimateButton
            className={`${button.red} w-full before:bg-primary hover:bg-primary my-6`}
            onClick = {() => setIsOpen(true)}
          >
            Apply Now
          </AnimateButton>
        </div>
      </FullWidthContent>

      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ApplyModalData title={"Conformal Coating Technician"}/>
      </Modal>
    </section>
  );
}
