/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { User } from './user';


export interface PartialOrder {
    ID?: string;
    FromUser?: User;
    FromCompanyID?: string;
    FromUserID?: string;
    BillingAddressID?: string;
    BillingAddress?: Address;
    ShippingAddressID?: string;
    Comments?: string;
    LineItemCount?: number;
    Status?: string;
    DateCreated?: string;
    DateSubmitted?: string;
    DateApproved?: string;
    DateDeclined?: string;
    DateCanceled?: string;
    DateCompleted?: string;
    Subtotal?: number;
    ShippingCost?: number;
    TaxCost?: number;
    PromotionDiscount?: number;
    Total?: number;
    IsSubmitted?: boolean;
    xp?: any;
}