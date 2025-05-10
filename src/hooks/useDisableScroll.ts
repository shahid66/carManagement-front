import { useEffect } from "react";

const useDisableScroll = (isModalOpen: boolean) => {
  useEffect(() => {
    if (isModalOpen) {
      // Prevent body scroll when the modal is open
      document.body.style.overflow = "hidden";
    } else {
      // Allow body scroll when the modal is closed
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);
};

export default useDisableScroll;
