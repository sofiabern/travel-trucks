export const isActiveTab = (locationHash: string, targetHash: string): boolean => {
    return locationHash === targetHash;
  };