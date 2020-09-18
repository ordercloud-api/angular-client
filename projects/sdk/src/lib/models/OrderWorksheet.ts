import { Order } from './Order';
import { LineItem } from './LineItem';
import { ShipEstimateResponse } from './ShipEstimateResponse';
import { OrderCalculateResponse } from './OrderCalculateResponse';
import { OrderSubmitResponse } from './OrderSubmitResponse';
import { OrderSubmitForApprovalResponse } from './OrderSubmitForApprovalResponse';
import { OrderApprovedResponse } from './OrderApprovedResponse';

export interface OrderWorksheet<TFromUserXp = any, TBillingAddressXp = any, TOrderXp = any, TProductXp = any, TVariantXp = any, TShippingAddressXp = any, TShipFromAddressXp = any, TLineItemsXp = any, TShipEstimatesXp = any, TShipEstimateResponseXp = any, TOrderCalculateResponseXp = any, TOrderSubmitResponseXp = any, TOrderSubmitForApprovalResponseXp = any, TOrderApprovedResponseXp = any> {
    Order?: Order<TFromUserXp,TBillingAddressXp,TOrderXp>
    LineItems?: LineItem<TProductXp,TVariantXp,TShippingAddressXp,TShipFromAddressXp,TLineItemsXp>[]
    ShipEstimateResponse?: ShipEstimateResponse<TShipEstimatesXp,TShipEstimateResponseXp>
    OrderCalculateResponse?: OrderCalculateResponse<TOrderCalculateResponseXp>
    OrderSubmitResponse?: OrderSubmitResponse<TOrderSubmitResponseXp>
    OrderSubmitForApprovalResponse?: OrderSubmitForApprovalResponse<TOrderSubmitForApprovalResponseXp>
    OrderApprovedResponse?: OrderApprovedResponse<TOrderApprovedResponseXp>
}