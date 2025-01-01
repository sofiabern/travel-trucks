export interface Filters {
    location?: string;
    automatic?: boolean;
    truckType?: string;
    AC?: boolean;
    kitchen?: boolean;
    TV?: boolean;
    bathroom?: boolean;
    [key: string]: boolean | string | undefined;
  }