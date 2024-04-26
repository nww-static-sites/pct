"use client"

import { useEffect, useState } from "react";
import HomeModal from "./Modals/WelcomeModal/HomeModal";
import ModalData from "./Modals/WelcomeModal/ModalData";

export const WelcomeFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const isSubmitted = localStorage.getItem("isGuideSubmitted", "true") === "true" ? false : true;
    setIsOpen(isSubmitted);
  }, [])
  return (
    <HomeModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalData onClose={() => setIsOpen(false)}/>
    </HomeModal>
  );
};
