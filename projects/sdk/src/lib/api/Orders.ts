import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Order } from '../models/Order';
import { OrderDirection } from '../models/OrderDirection';
import { OrderApproval } from '../models/OrderApproval';
import { OrderApprovalInfo } from '../models/OrderApprovalInfo';
import { Address } from '../models/Address';
import { User } from '../models/User';
import { OrderSplitResult } from '../models/OrderSplitResult';
import { OrderPromotion } from '../models/OrderPromotion';
import { Shipment } from '../models/Shipment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OcTokenService } from './Tokens';
import { Observable } from 'rxjs';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import { Configuration } from '../Configuration';
import utils from '../utils';

@Injectable({
    providedIn: 'root'
})
export class OcOrderService {
    private basePath: string;
    private impersonating = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor(
        private httpClient: HttpClient,
        private ocTokenService: OcTokenService,
        private configuration: Configuration
    ) {
        this.basePath = this.configuration.basePath;
    }

   /**
    * Get a list of orders. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.from Lower bound of date range that the order was created.
    * @param listOptions.to Upper bound of date range that the order was created.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TOrder extends Order = Order>(direction: OrderDirection, listOptions: { buyerID?: string, supplierID?: string, from?: string, to?: string, search?: string, searchOn?: Searchable<'Orders.List'>, sortBy?: Sortable<'Orders.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TOrder>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.List')
        const queryParams = utils.buildQueryParams(listOptions, 'Orders.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new order. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/create|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param order 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TOrder extends Order>(direction: OrderDirection, order: Order,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}`, order, {
            headers
        })
    }

   /**
    * Get a single order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/get|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Get')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}`, {
            headers
        })
    }

   /**
    * Create or update an order. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/save|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param order 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TOrder extends Order>(direction: OrderDirection, orderID: string, order: Order,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Save')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/orders/${direction}/${orderID}`, order, {
            headers
        })
    }

   /**
    * Delete an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/delete|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Delete')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/orders/${direction}/${orderID}`, {
            headers
        })
    }

   /**
    * Partially update an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/patch|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param order 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TOrder extends Order>(direction: OrderDirection, orderID: string, order: PartialDeep<Order>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Patch')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/orders/${direction}/${orderID}`, order, {
            headers
        })
    }

   /**
    * Get a list of order approvals. Returns all Approvals associated with the Order.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-approvals|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListApprovals<TOrderApproval extends OrderApproval = OrderApproval>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListApprovals'>, sortBy?: Sortable<'Orders.ListApprovals'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TOrderApproval>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.ListApprovals')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.ListApprovals')
        const queryParams = utils.buildQueryParams(listOptions, 'Orders.ListApprovals')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/approvals`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Approve an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/approve|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param orderApprovalInfo 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Approve<TOrder extends Order>(direction: OrderDirection, orderID: string, orderApprovalInfo: OrderApprovalInfo,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Approve')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Approve')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/approve`, orderApprovalInfo, {
            headers
        })
    }

   /**
    * Set a billing address. Use only when the address is not to be saved/reused.<br/></br>To use a saved address (i.e. from the Addresses resource), PATCH the order's BillingAddressID property instead.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/set-billing-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SetBillingAddress<TOrder extends Order>(direction: OrderDirection, orderID: string, address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.SetBillingAddress')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.SetBillingAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/orders/${direction}/${orderID}/billto`, address, {
            headers
        })
    }

   /**
    * Partially update an order billing address. Not allowed on unsubmitted orders where BillingAddressID has been set. In that case, use the Addresses resource to update the saved address.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/patch-billing-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public PatchBillingAddress<TOrder extends Order>(direction: OrderDirection, orderID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.PatchBillingAddress')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.PatchBillingAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/orders/${direction}/${orderID}/billto`, address, {
            headers
        })
    }

   /**
    * Cancel an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/cancel|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Cancel<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Cancel')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Cancel')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/cancel`, null, {
            headers
        })
    }

   /**
    * Complete an order. Use only when an order doesn't need a shipment. You will not be able to ship or reopen an order after completing it.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/complete|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Complete<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Complete')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Complete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/complete`, null, {
            headers
        })
    }

   /**
    * Decline an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/decline|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param orderApprovalInfo 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Decline<TOrder extends Order>(direction: OrderDirection, orderID: string, orderApprovalInfo: OrderApprovalInfo,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Decline')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Decline')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/decline`, orderApprovalInfo, {
            headers
        })
    }

   /**
    * Get a list of order eligible approvers. Returns all Users who can approve or decline this order (but have not done so).
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-eligible-approvers|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListEligibleApprovers<TUser extends User = User>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListEligibleApprovers'>, sortBy?: Sortable<'Orders.ListEligibleApprovers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUser>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.ListEligibleApprovers')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.ListEligibleApprovers')
        const queryParams = utils.buildQueryParams(listOptions, 'Orders.ListEligibleApprovers')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/eligibleapprovers`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Forward an order. Creates and submits 0 or more outgoing Orders to Suppliers, one for each unique Product.DefaultSupplierID on this Order.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/forward|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Forward<TOrderSplitResult extends OrderSplitResult>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrderSplitResult>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Forward')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Forward')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/forward`, null, {
            headers
        })
    }

   /**
    * Override order creator details. Only FirstName, LastName, and Email can be updated.<br/></br>Primarily used to facilitate guest checkout scenarios.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/patch-from-user|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param user 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public PatchFromUser<TOrder extends Order>(direction: OrderDirection, orderID: string, user: PartialDeep<User>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.PatchFromUser')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.PatchFromUser')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/orders/${direction}/${orderID}/fromuser`, user, {
            headers
        })
    }

   /**
    * Get a list of order promotions. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-promotions|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListPromotions<TOrderPromotion extends OrderPromotion = OrderPromotion>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListPromotions'>, sortBy?: Sortable<'Orders.ListPromotions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TOrderPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.ListPromotions')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.ListPromotions')
        const queryParams = utils.buildQueryParams(listOptions, 'Orders.ListPromotions')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/promotions`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Add a promotion to an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/add-promotion|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param promoCode Promo code of the order promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public AddPromotion<TOrderPromotion extends OrderPromotion>(direction: OrderDirection, orderID: string, promoCode: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrderPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.AddPromotion')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.AddPromotion')
        if(!promoCode) throw new Error('Required parameter promoCode was null or undefined when calling Orders.AddPromotion')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/promotions/${promoCode}`, null, {
            headers
        })
    }

   /**
    * Remove a promotion from an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/remove-promotion|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param promoCode Promo code of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public RemovePromotion<TOrder extends Order>(direction: OrderDirection, orderID: string, promoCode: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.RemovePromotion')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.RemovePromotion')
        if(!promoCode) throw new Error('Required parameter promoCode was null or undefined when calling Orders.RemovePromotion')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/orders/${direction}/${orderID}/promotions/${promoCode}`, {
            headers
        })
    }

   /**
    * Create a new shipment containing all items on an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/ship|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Ship<TOrder extends Order>(direction: OrderDirection, orderID: string, shipment: Shipment,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Ship')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Ship')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/ship`, shipment, {
            headers
        })
    }

   /**
    * List shipments for an order. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/list-shipments|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListShipments<TShipment extends Shipment = Shipment>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Orders.ListShipments'>, sortBy?: Sortable<'Orders.ListShipments'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TShipment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.ListShipments')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.ListShipments')
        const queryParams = utils.buildQueryParams(listOptions, 'Orders.ListShipments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/shipments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Set a shipping address. Use only when the address is not to be saved/reused. To use a saved address (i.e. from the Addresses resource), PATCH the order's ShippingAddressID property instead.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/set-shipping-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SetShippingAddress<TOrder extends Order>(direction: OrderDirection, orderID: string, address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.SetShippingAddress')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.SetShippingAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/orders/${direction}/${orderID}/shipto`, address, {
            headers
        })
    }

   /**
    * Partially update an order shipping address. Not allowed on unsubmitted orders where ShippingAddressID has been set. In that case, use the Addresses resource to update the saved address.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/patch-shipping-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public PatchShippingAddress<TOrder extends Order>(direction: OrderDirection, orderID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.PatchShippingAddress')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.PatchShippingAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/orders/${direction}/${orderID}/shipto`, address, {
            headers
        })
    }

   /**
    * Split an order. Creates, but does not submit, 0 or more outgoing Orders to Suppliers, one for each unique Product.DefaultSupplierID on this Order.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/split|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Split<TOrderSplitResult extends OrderSplitResult>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrderSplitResult>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Split')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Split')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/split`, null, {
            headers
        })
    }

   /**
    * Submit an order submit. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/submit|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Submit<TOrder extends Order>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrder>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Submit')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Submit')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/submit`, null, {
            headers
        })
    }

   /**
    * Validate an order in its current state. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/orders/validate|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Validate(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Orders.Validate')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Orders.Validate')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/validate`, null, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Orders.As().List() // lists Orders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}