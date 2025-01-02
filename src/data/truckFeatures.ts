import { Truck } from "../types/truck";
export const shortTruckFeatures: TruckFeatureItem[]  = [
    { key: "kitchen", iconId: "cup", label: "Kitchen" },
    { key: "AC", iconId: "wind", label: "AC" },
    { key: "water", iconId: "water", label: "Water" },
   
  ];

export const fullTruckFeatures: TruckFeatureItem[]  = [
    { key: "kitchen", iconId: "cup", label: "Kitchen" },
    { key: "AC", iconId: "wind", label: "AC" },
    { key: "water", iconId: "water", label: "Water" },
    { key: "TV", iconId: "tv", label: "TV" },
    { key: "radio", iconId: "radio", label: "Radio" },
    { key: "bathroom", iconId: "shower", label: "Bathroom" },
    { key: "refrigerator", iconId: "fridge", label: "Refrigerator" },
    { key: "microwave", iconId: "microwave", label: "Microwave" },
    { key: "gas", iconId: "stove", label: "Gas" },
   
  ];


export interface TruckFeatureItem {
  key: keyof Truck; 
  iconId: string;
  label: string;
}