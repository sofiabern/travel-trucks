import Image from "../Image";
import s from './TruckImages.module.css'
const TruckImages = ({ truck }) => {
  if (!truck?.gallery || !Array.isArray(truck.gallery)) {
    return null;
  }

  const images = truck.gallery.slice(0, 4);

  return (
    <div className={s.wrapper}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.original}
          alt={`Truck image ${index + 1}`}
          width="292px"
          height="312px"
        />
      ))}
    </div>
  );
};

export default TruckImages;
