import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const GoTopBtn = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  const handleVisibleButton = () => setShowGoTop(window.pageYOffset > 300);

  const handleScrollUp = () =>
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });

  return (
    <Button
      colorScheme="pink"
      style={{
        position: "sticky",
        top: "90%",
        left: "95%",
        zIndex: "99",
        marginRight: "10px",
        visibility: showGoTop ? "visible" : "hidden",
      }}
      onClick={handleScrollUp}
    >
      Go Top
    </Button>
  );
};

export default GoTopBtn;
