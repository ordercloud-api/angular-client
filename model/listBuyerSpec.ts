/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BuyerSpec } from './buyerSpec';
import { Meta } from './meta';


export interface ListBuyerSpec<BuyerSpecXp = any, SpecOptionXp = any> {
    Items?: Array<BuyerSpec<BuyerSpecXp, SpecOptionXp>>;
    Meta?: Meta;
}
