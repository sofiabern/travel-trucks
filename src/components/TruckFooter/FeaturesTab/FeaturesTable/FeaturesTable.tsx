import { Table, TableCell } from "./FeaturesTable.styles";
import { BoldText } from "../../../../styles/Text.styles";
import { capitalizeFirstLetter } from "../../../../utils/capitalizeFirstLetter";
import { formatForm } from "../../../../utils/formatForm";
import { formatMeasurement } from "../../../../utils/formatMeasurement";
import { Truck } from "../../../../types/truck";

type TruckFeatureKeys =
  | "form"
  | "length"
  | "width"
  | "height"
  | "tank"
  | "consumption";

interface FeaturesTableProps {
  truck: Pick<Truck, TruckFeatureKeys>;
}

const truckFeatures: TruckFeatureKeys[] = [
  "form",
  "length",
  "width",
  "height",
  "tank",
  "consumption",
];

const FeaturesTable = ({ truck }: FeaturesTableProps) => {
  return (
    <>
      <BoldText
        as="h3"
        $customStyles={{ marginBottom: "48px", fontSize: "20px" }}
      >
        Vehicle details
      </BoldText>
      <Table>
        <tbody>
          {truckFeatures.map((feature, index) => {
            const featureValue = truck[feature];

            let displayValue: string | number = "No data";

            if (feature === "form") {
              displayValue = formatForm(featureValue);
            } else if (
              ["length", "width", "height", "tank", "consumption"].includes(
                feature
              )
            ) {
              displayValue = formatMeasurement(featureValue);
            } else {
              displayValue = featureValue || "No data";
            }

            return (
              <tr key={index}>
                <TableCell>{capitalizeFirstLetter(feature)}</TableCell>
                <TableCell $align="right">{displayValue}</TableCell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default FeaturesTable;
