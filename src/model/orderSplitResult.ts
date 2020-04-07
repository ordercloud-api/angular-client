/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Order } from './order';


export interface OrderSplitResult<OrderXp = any, UserXp = any, AddressXp = any> {
    OutgoingOrders?: Array<Order<OrderXp, UserXp, AddressXp>>;
    RemainingLineItemIDs?: Array<string>;
}
