import React from "react";
import { List } from "./TruckFeatures.styles";
import TruckFeature from "../TruckFeature/TruckFeature";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import truckFeatures from "../../data/truckFeatures";

interface TruckFeaturesProps {
    truck: any,
    $customStyles: React.CSSProperties
}

const TruckFeatures = ({ truck, $customStyles }: TruckFeaturesProps) => {
  return (
    <List $customStyles={$customStyles}>
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

      {truckFeatures.map(({ key, iconId, label }) =>
        truck[key] ? (
          <TruckFeature key={key} iconId={iconId} label={label} />
        ) : null
      )}
    </List>
  );
};

export default TruckFeatures;
