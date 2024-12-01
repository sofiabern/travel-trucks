import { Table, TableCell } from "./FeaturesTable.styles";
import BoldText from "../BoldText";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { formatForm } from "../../utils/formatForm";
import { formatMeasurement } from "../../utils/formatMeasurement";
const truckDetails = [
  "form",
  "length",
  "width",
  "height",
  "tank",
  "consumption",
];
const FeaturesTable = ({ truck }) => {
  return (
    <>
    <BoldText $fontSize="20px" as="h3" $customStyles={{ marginBottom: "48px" }}>Vehicle details</BoldText>
      <Table>
        <tbody>
          {truckDetails.map((feature, index) => (
            <tr key={index}>
              <TableCell>{capitalizeFirstLetter(feature)}</TableCell>
              <TableCell $align="right">{feature === "form"
                  ? formatForm(truck[feature])
                  : feature === "length" || feature === "width"  || feature === "height" || feature === "tank" || feature === "consumption"
                  ? formatMeasurement(truck[feature])
                  : truck[feature] || "No data"}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default FeaturesTable;
