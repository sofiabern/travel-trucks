export interface EquipOption {
  id: string;
  name: string;
  label: string;
  icon: string;
}


const equipOptions: EquipOption[] = [
    { id: "ac", name: "AC", label: "AC", icon: "wind" },
  
    {
      id: "transmission",
      name: "automatic",
      label: "Automatic",
      icon: "transmission",
    },
    { id: "kitchen", name: "kitchen", label: "Kitchen", icon: "cup" },
    { id: "tv", name: "TV", label: "TV", icon: "tv" },
    { id: "bathroom", name: "bathroom", label: "Bathroom", icon: "shower" },
  ];
  
  export default equipOptions;
