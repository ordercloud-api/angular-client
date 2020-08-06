import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { LineItem } from '../models/LineItem';
import { OrderDirection } from '../models/OrderDirection';
import { Address } from '../models/Address';
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
export class OcLineItemService {
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
    * Get a list of line items. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/list|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TLineItem extends LineItem = LineItem>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'LineItems.List'>, sortBy?: Sortable<'LineItems.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TLineItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling LineItems.List')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling LineItems.List')
        const queryParams = utils.buildQueryParams(listOptions, 'LineItems.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/lineitems`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new line item. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/create|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItem Required fields: ProductID, Quantity
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling LineItems.Create')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling LineItems.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/lineitems`, lineItem, {
            headers
        })
    }

   /**
    * Get a single line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/get|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling LineItems.Get')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling LineItems.Get')
        if(!lineItemID) throw new Error('Required parameter lineItemID was null or undefined when calling LineItems.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/lineitems/${lineItemID}`, {
            headers
        })
    }

   /**
    * Create or update a line item. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/save|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param lineItem Required fields: ProductID, Quantity
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, lineItem: LineItem,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling LineItems.Save')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling LineItems.Save')
        if(!lineItemID) throw new Error('Required parameter lineItemID was null or undefined when calling LineItems.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/orders/${direction}/${orderID}/lineitems/${lineItemID}`, lineItem, {
            headers
        })
    }

   /**
    * Delete a line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/delete|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(direction: OrderDirection, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling LineItems.Delete')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling LineItems.Delete')
        if(!lineItemID) throw new Error('Required parameter lineItemID was null or undefined when calling LineItems.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/orders/${direction}/${orderID}/lineitems/${lineItemID}`, {
            headers
        })
    }

   /**
    * Partially update a line item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/patch|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param lineItem 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, lineItem: PartialDeep<LineItem>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling LineItems.Patch')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling LineItems.Patch')
        if(!lineItemID) throw new Error('Required parameter lineItemID was null or undefined when calling LineItems.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/orders/${direction}/${orderID}/lineitems/${lineItemID}`, lineItem, {
            headers
        })
    }

   /**
    * Set a shipping address. Set the Shipping Address of the Line Item. Appropriate only when the Address is not to be saved/reused. To use a Saved Address (i.e. from the Addresses resource), PATCH the Line Item's ShippingAddressID property instead.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/set-shipping-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SetShippingAddress<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling LineItems.SetShippingAddress')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling LineItems.SetShippingAddress')
        if(!lineItemID) throw new Error('Required parameter lineItemID was null or undefined when calling LineItems.SetShippingAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/orders/${direction}/${orderID}/lineitems/${lineItemID}/shipto`, address, {
            headers
        })
    }

   /**
    * Partially update a line item shipping address. Partially update the Shipping Address of the Line Item. Not allowed on unsubmitted Line Items where ShippingAddressID has been set. In that case, use the Addresses resource to update the Saved Address.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/line-items/patch-shipping-address|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public PatchShippingAddress<TLineItem extends LineItem>(direction: OrderDirection, orderID: string, lineItemID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TLineItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling LineItems.PatchShippingAddress')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling LineItems.PatchShippingAddress')
        if(!lineItemID) throw new Error('Required parameter lineItemID was null or undefined when calling LineItems.PatchShippingAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/orders/${direction}/${orderID}/lineitems/${lineItemID}/shipto`, address, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * LineItems.As().List() // lists LineItems using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}