interface GalleryImage {
    thumb: string;
    original: string;
  }

  interface Review {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }

 export interface Truck {
    id: string;
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    form: "alcove" | "van" | "fullyIntegrated"; 
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    transmission: "automatic" | "manual"; 
    engine: "diesel" | "petrol"; 
    AC: boolean;
    bathroom: boolean;
    kitchen: boolean;
    TV: boolean;
    radio: boolean;
    refrigerator: boolean;
    microwave: boolean;
    gas: boolean;
    water: boolean;
    gallery: GalleryImage[]; 
    reviews: Review[]; 
  }

 