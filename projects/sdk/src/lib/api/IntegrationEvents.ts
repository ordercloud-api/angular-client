import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { IntegrationEvent } from '../models/IntegrationEvent';
import { OrderWorksheet } from '../models/OrderWorksheet';
import { OrderDirection } from '../models/OrderDirection';
import { OrderShipMethodSelection } from '../models/OrderShipMethodSelection';
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
export class OcIntegrationEventService {
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
    * Get a list of integration events. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TIntegrationEvent extends IntegrationEvent = IntegrationEvent>(listOptions: { search?: string, searchOn?: Searchable<'IntegrationEvents.List'>, sortBy?: Sortable<'IntegrationEvents.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TIntegrationEvent>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'IntegrationEvents.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/integrationEvents`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new integration event. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/create|api docs} for more info 
    * 
    * @param integrationEvent Required fields: ElevatedRoles, Name, HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TIntegrationEvent extends IntegrationEvent>(integrationEvent: IntegrationEvent,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TIntegrationEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/integrationEvents`, integrationEvent, {
            headers
        })
    }

   /**
    * Get a single integration event. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/get|api docs} for more info 
    * 
    * @param integrationEventID ID of the integration event.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TIntegrationEvent extends IntegrationEvent>(integrationEventID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TIntegrationEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!integrationEventID) throw new Error('Required parameter integrationEventID was null or undefined when calling IntegrationEvents.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/integrationEvents/${integrationEventID}`, {
            headers
        })
    }

   /**
    * Create or update an integration event. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/save|api docs} for more info 
    * 
    * @param integrationEventID ID of the integration event.
    * @param integrationEvent Required fields: ElevatedRoles, Name, HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TIntegrationEvent extends IntegrationEvent>(integrationEventID: string, integrationEvent: IntegrationEvent,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TIntegrationEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!integrationEventID) throw new Error('Required parameter integrationEventID was null or undefined when calling IntegrationEvents.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/integrationEvents/${integrationEventID}`, integrationEvent, {
            headers
        })
    }

   /**
    * Delete an integration event. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/delete|api docs} for more info 
    * 
    * @param integrationEventID ID of the integration event.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(integrationEventID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!integrationEventID) throw new Error('Required parameter integrationEventID was null or undefined when calling IntegrationEvents.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/integrationEvents/${integrationEventID}`, {
            headers
        })
    }

   /**
    * Partially update an integration event. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/patch|api docs} for more info 
    * 
    * @param integrationEventID ID of the integration event.
    * @param integrationEvent 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TIntegrationEvent extends IntegrationEvent>(integrationEventID: string, integrationEvent: PartialDeep<IntegrationEvent>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TIntegrationEvent>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!integrationEventID) throw new Error('Required parameter integrationEventID was null or undefined when calling IntegrationEvents.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/integrationEvents/${integrationEventID}`, integrationEvent, {
            headers
        })
    }

   /**
    * Calculate an order. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/calculate|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Calculate<TOrderWorksheet extends OrderWorksheet>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling IntegrationEvents.Calculate')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling IntegrationEvents.Calculate')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/calculate`, null, {
            headers
        })
    }

   /**
    * Estimate shipping cost. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/estimate-shipping|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public EstimateShipping<TOrderWorksheet extends OrderWorksheet>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling IntegrationEvents.EstimateShipping')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling IntegrationEvents.EstimateShipping')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/estimateshipping`, null, {
            headers
        })
    }

   /**
    * Select a ship method. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/select-shipmethods|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param orderShipMethodSelection 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SelectShipmethods<TOrderWorksheet extends OrderWorksheet>(direction: OrderDirection, orderID: string, orderShipMethodSelection: OrderShipMethodSelection,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling IntegrationEvents.SelectShipmethods')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling IntegrationEvents.SelectShipmethods')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/shipmethods`, orderShipMethodSelection, {
            headers
        })
    }

   /**
    * Get a single order worksheet. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/integration-events/get-worksheet|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetWorksheet<TOrderWorksheet extends OrderWorksheet>(direction: OrderDirection, orderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOrderWorksheet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling IntegrationEvents.GetWorksheet')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling IntegrationEvents.GetWorksheet')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/worksheet`, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * IntegrationEvents.As().List() // lists IntegrationEvents using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}