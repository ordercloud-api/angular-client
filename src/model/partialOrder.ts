/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { User } from './user';


export interface PartialOrder<OrderXp = any, UserXp = any, AddressXp = any> {
    ID?: string;
    FromUser?: User<UserXp>;
    FromCompanyID?: string;
    FromUserID?: string;
    BillingAddressID?: string;
    BillingAddress?: Address<AddressXp>;
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
    xp?: OrderXp;
}