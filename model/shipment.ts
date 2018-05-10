/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';


export interface Shipment {
    xp?: any;
    ID?: string;
    BuyerID?: string;
    Shipper?: string;
    DateShipped?: string;
    DateDelivered?: string;
    TrackingNumber?: string;
    Cost?: number;
    Account?: string;
    FromAddressID?: string;
    ToAddressID?: string;
    FromAddress?: Address;
    ToAddress?: Address;
}
