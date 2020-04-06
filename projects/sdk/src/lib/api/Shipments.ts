import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { Optional, Injectable } from '@angular/core';
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
export class OcShipmentService {
    protected basePath = 'https://api.ordercloud.io/v1';
    private impersonating = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor(protected httpClient: HttpClient, protected ocTokenService: OcTokenService,  @Optional() configuration: Configuration) {
        if (configuration) {
            this.basePath = configuration.basePath || this.basePath;
        }
    }

   /**
    * Get a list of shipments. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/list|api docs} for more info 
    * 
    * @param listOptions.orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TShipment extends Shipment = Shipment>(listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Shipments.List'>, sortBy?: Sortable<'Shipments.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TShipment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Shipments.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/shipments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new shipment. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/create|api docs} for more info 
    * 
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TShipment extends Shipment>(shipment: Shipment,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/shipments`, shipment, {
            headers
        })
    }

   /**
    * Get a single shipment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/get|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TShipment extends Shipment>(shipmentID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Shipments.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/shipments/${shipmentID}`, {
            headers
        })
    }

   /**
    * Create or update a shipment. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/save|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TShipment extends Shipment>(shipmentID: string, shipment: Shipment,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Shipments.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/shipments/${shipmentID}`, shipment, {
            headers
        })
    }

   /**
    * Delete a shipment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/delete|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(shipmentID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Shipments.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/shipments/${shipmentID}`, {
            headers
        })
    }

   /**
    * Partially update a shipment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/patch|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TShipment extends Shipment>(shipmentID: string, shipment: PartialDeep<Shipment>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Shipments.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/shipments/${shipmentID}`, shipment, {
            headers
        })
    }

   /**
    * Get a list of shipment items. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/list-items|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListItems<TShipmentItem extends ShipmentItem = ShipmentItem>(shipmentID: string, listOptions: { search?: string, searchOn?: Searchable<'Shipments.ListItems'>, sortBy?: Sortable<'Shipments.ListItems'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TShipmentItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Shipments.ListItems')
        const queryParams = utils.buildQueryParams(listOptions, 'Shipments.ListItems')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/shipments/${shipmentID}/items`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a shipment item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/save-item|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param shipmentItem Required fields: OrderID, LineItemID, QuantityShipped
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveItem<TShipmentItem extends ShipmentItem>(shipmentID: string, shipmentItem: ShipmentItem,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TShipmentItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Shipments.SaveItem')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/shipments/${shipmentID}/items`, shipmentItem, {
            headers
        })
    }

   /**
    * Get a single shipment item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/get-item|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetItem<TShipmentItem extends ShipmentItem>(shipmentID: string, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TShipmentItem>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Shipments.GetItem')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Shipments.GetItem')
        if(!lineItemID) throw new Error('Required parameter lineItemID was null or undefined when calling Shipments.GetItem')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, {
            headers
        })
    }

   /**
    * Delete a shipment item. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/shipments/delete-item|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteItem(shipmentID: string, orderID: string, lineItemID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Shipments.DeleteItem')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Shipments.DeleteItem')
        if(!lineItemID) throw new Error('Required parameter lineItemID was null or undefined when calling Shipments.DeleteItem')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Shipments.As().List() // lists Shipments using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}