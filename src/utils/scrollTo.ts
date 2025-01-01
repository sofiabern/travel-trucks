export const scrollTo = (top = 0) => {
    window.scrollBy({
      top,
      behavior: "smooth",
    });
  };
  