export interface TypeOption {
  id: string;
  name: string;
  value: string;
  label: string;
  icon: string;
}

const typeOptions: TypeOption[] = [
    {
      id: "van",
      name: "truckType",
      value: "panelTruck",
      label: "Van",
      icon: "van",
    },
    {
      id: "fully",
      name: "truckType",
      value: "fullyIntegrated",
      label: "Fully Integrated",
      icon: "integrated",
    },
    {
      id: "alcove",
      name: "truckType",
      value: "alcove",
      label: "Alcove",
      icon: "alcove",
    },
  ];
  
  export default typeOptions; 
