/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { LineItem } from './lineItem';
import { Meta } from './meta';


export interface ListLineItem<LineItemXp = any, ProductXp = any, LineItemVariantXp = any, AddressXp = any> {
    Items?: Array<LineItem<LineItemXp, ProductXp, LineItemVariantXp, AddressXp>>;
    Meta?: Meta;
}
