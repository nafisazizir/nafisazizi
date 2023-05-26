import React from "react";
import $ from "jquery";

const SmoothScroll = () => {
  React.useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      const url = event.currentTarget.getAttribute("href");
      const fragmentIndex = url.indexOf("#");
      const page = url.substring(0, fragmentIndex);
      const pathname = window.location.pathname;
      const targetId = url.substring(fragmentIndex);
      const targetElement = document.querySelector(targetId);
      const screenWidth = window.innerWidth;

      const goToPage = (url, callback) => {
        window.location.href = url;
        window.onload = callback;
      };

      const scrollToSection = (element, margin = 0) => {
        if (element) {
          const offset = element.offsetTop - margin;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      };

      if (page !== pathname) {
        goToPage(url, () => {
          scrollToSection(targetElement, margin);
        });
      }

      if (targetId === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      let margin = 88;

      if (screenWidth <= 280) {
        margin = 55;
      } else if (screenWidth <= 480) {
        margin = 59;
      }

      scrollToSection(targetElement, margin);
    };

    $('a[href^="/"]').on("click", handleScroll);

    return () => {
      $('a[href^="/"]').off("click", handleScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
