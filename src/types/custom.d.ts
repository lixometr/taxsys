// import {BaseSchema} from "yup"
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.json" {
  const value: any;
  export default value;
}
// declare module "yup" {
//   interface BaseSchema {
//       cyrilic(format: string): BaseSchema;
//   }
//   export default BaseSchema
// }