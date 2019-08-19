/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { LineItemProduct } from './lineItemProduct';
import { LineItemSpec } from './lineItemSpec';
import { LineItemVariant } from './lineItemVariant';


export interface LineItem<LineItemXp = any, ProductXp = any, LineItemVariantXp = any, AddressXp = any> {
    ID?: string;
    ProductID?: string;
    Quantity?: number;
    DateAdded?: string;
    QuantityShipped?: number;
    UnitPrice?: number;
    LineTotal?: number;
    CostCenter?: string;
    DateNeeded?: string;
    ShippingAccount?: string;
    ShippingAddressID?: string;
    ShipFromAddressID?: string;
    Product?: LineItemProduct<ProductXp>;
    Variant?: LineItemVariant<LineItemVariantXp>;
    ShippingAddress?: Address<AddressXp>;
    ShipFromAddress?: Address<AddressXp>;
    SupplierID?: string;
    Specs?: Array<LineItemSpec>;
    xp?: LineItemXp;
}