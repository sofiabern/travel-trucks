export const truncateText = (text, maxLength) => {
    if (!text || text.length <= maxLength) {
      return text; 
    }
  
    const truncated = text.slice(0, maxLength); 
    const lastSpaceIndex = truncated.lastIndexOf(' '); 
  
    return lastSpaceIndex > 0 ? truncated.slice(0, lastSpaceIndex) + '...' : truncated + '...';
  };
  
 