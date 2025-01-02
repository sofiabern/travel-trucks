export const formatMeasurement = (value: string) => {
    if (value.includes("/")) {
      return value;
    }
    
    return value.replace(/(\d+)([a-zA-Z]+)/, '$1 $2');
  };