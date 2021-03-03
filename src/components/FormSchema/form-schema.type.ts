export interface FormSchemaItem {
    type: string;
    class?: any;
    field: {
      [key: string]: any
    };
    props?: {
      [key: string]: any
    };
    listeners?: {
      [key: string]: Function
    };
    name?: string
    sort?: number
  }