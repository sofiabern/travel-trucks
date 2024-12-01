import TruckFeature from "../components/TruckFeature/TruckFeature";
export const renderFeature = (condition, iconId, label) =>
  condition ? <TruckFeature iconId={iconId} label={label} /> : null;
