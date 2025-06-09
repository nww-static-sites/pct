"use client"

import { useEffect, useState } from "react";
import HomeModal from "./Modals/WelcomeModal/HomeModal";
import ModalData from "./Modals/WelcomeModal/ModalData";

export const WelcomeFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ensure the modal never opens
    setIsOpen(false);
  }, [])

  return (
    <HomeModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalData onClose={() => setIsOpen(false)} />
    </HomeModal>
  );
};
