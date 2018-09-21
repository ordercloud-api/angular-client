/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';


export interface PartialShipment<ShipmentXp = any, AddressXp = any> {
    ID?: string;
    BuyerID?: string;
    Shipper?: string;
    DateShipped?: string;
    DateDelivered?: string;
    TrackingNumber?: string;
    Cost?: number;
    xp?: ShipmentXp;
    Account?: string;
    FromAddressID?: string;
    ToAddressID?: string;
    FromAddress?: Address<AddressXp>;
    ToAddress?: Address<AddressXp>;
}
