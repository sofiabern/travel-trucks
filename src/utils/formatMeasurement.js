export const formatMeasurement = (value) => {
    if (value.includes("/")) {
      return value;
    }
    
    return value.replace(/(\d+)([a-zA-Z]+)/, '$1 $2');
  };