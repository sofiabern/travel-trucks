import { Image } from "../../styles/Image.styles";
import { Wrapper } from "./TruckImages.styles";
import { Truck } from "../../types/truck";

interface TruckImagesProps {
  truck: Truck;
}

const TruckImages = ({ truck }: TruckImagesProps) => {
  if (!truck.gallery?.length) {
    return null;
  }

  const images = truck.gallery.slice(0, 4);
  return (
    <Wrapper>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.original}
          alt={`Truck image ${index + 1}`}
          width="292px"
          height="312px"
        />
      ))}
    </Wrapper>
  );
};

export default TruckImages;
