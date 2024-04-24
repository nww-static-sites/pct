"use client"

import { useState } from "react";
import HomeModal from "./Modals/WelcomeModal/HomeModal";
import ModalData from "./Modals/WelcomeModal/ModalData";

export const WelcomeFormModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <HomeModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalData />
    </HomeModal>
  );
};
