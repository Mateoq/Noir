/**
 * Module with the json files type definition.
 * @module types/json
 */
declare module "*.json" {
  const json: any;
  export default json;
}

declare module "json!*" {
  const json: any;
  export default json;
}
