import React from "react";
import { List } from "./TruckFeatures.styles";
import TruckFeature from "../TruckFeature/TruckFeature";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { Truck } from "../../types/truck";
import { TruckFeatureItem } from "../../data/truckFeatures";


interface TruckFeaturesProps {
    truck: Truck,
    features: TruckFeatureItem[],
    $customStyles?: React.CSSProperties
}

const TruckFeatures = ({ truck, features, $customStyles }: TruckFeaturesProps) => {
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

      {features.map(({ key, iconId, label }) =>
        truck[key] ? (
          <TruckFeature key={key} iconId={iconId} label={label} />
        ) : null
      )}
    </List>
  );
};

export default TruckFeatures;
