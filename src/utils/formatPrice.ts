export const formatPrice = (price: number | string): string => {
    const parsedPrice = typeof price === 'string' ? parseFloat(price) : price;
    return new Intl.NumberFormat('en-IE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: false, 
    }).format(parsedPrice);
  };