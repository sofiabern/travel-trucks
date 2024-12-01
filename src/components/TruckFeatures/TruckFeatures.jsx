import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import TruckFeature from "../TruckFeature/TruckFeature";
import featureList from "../../data/features";
import s from "./TruckFeatures.module.css";

const TruckFeatures = ({ truck, className }) => {
  return (
    <ul className={`${className} ${s["features-list"]}`}>
      {truck.transmission && (
        <TruckFeature
          iconId="transmission"
          label={capitalizeFirstLetter(truck.transmission)}
        />
      )}

      {truck.engine && (
        <TruckFeature
          iconId="engine"
          label={capitalizeFirstLetter(truck.engine)}
        />
      )}

      {featureList.map(({ key, iconId, label }) =>
        truck[key] ? (
          <TruckFeature key={key} iconId={iconId} label={label} />
        ) : null
      )}
    </ul>
  );
};

export default TruckFeatures;
