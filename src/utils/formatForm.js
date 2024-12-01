export const formatForm = (form) => {
  if (form === "panelTruck") {
    return "Panel truck";
  }
  if (form === "fullyIntegrated") {
    return "Fully integrated";
  }
  if (form === "alcove") {
    return "Alcove";
  }
  return form;
};
