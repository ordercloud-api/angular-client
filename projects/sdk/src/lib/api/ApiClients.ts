import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ApiClient } from '../models/ApiClient';
import { ApiClientAssignment } from '../models/ApiClientAssignment';
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
export class OcApiClientService {
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
    * Get a list of api clients. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TApiClient extends ApiClient = ApiClient>(listOptions: { search?: string, searchOn?: Searchable<'ApiClients.List'>, sortBy?: Sortable<'ApiClients.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TApiClient>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'ApiClients.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/apiclients`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new api client. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/create|api docs} for more info 
    * 
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TApiClient extends ApiClient>(apiClient: ApiClient,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TApiClient>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/apiclients`, apiClient, {
            headers
        })
    }

   /**
    * Get a single api client. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/get|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TApiClient extends ApiClient>(apiClientID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TApiClient>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!apiClientID) throw new Error('Required parameter apiClientID was null or undefined when calling ApiClients.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/apiclients/${apiClientID}`, {
            headers
        })
    }

   /**
    * Create or update an api client. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/save|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TApiClient extends ApiClient>(apiClientID: string, apiClient: ApiClient,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TApiClient>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!apiClientID) throw new Error('Required parameter apiClientID was null or undefined when calling ApiClients.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/apiclients/${apiClientID}`, apiClient, {
            headers
        })
    }

   /**
    * Delete an api client. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(apiClientID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!apiClientID) throw new Error('Required parameter apiClientID was null or undefined when calling ApiClients.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/apiclients/${apiClientID}`, {
            headers
        })
    }

   /**
    * Partially update an api client. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/patch|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param apiClient 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TApiClient extends ApiClient>(apiClientID: string, apiClient: PartialDeep<ApiClient>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TApiClient>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!apiClientID) throw new Error('Required parameter apiClientID was null or undefined when calling ApiClients.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/apiclients/${apiClientID}`, apiClient, {
            headers
        })
    }

   /**
    * Get a list of api client assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/list-assignments|api docs} for more info 
    * 
    * @param listOptions.apiClientID ID of the api client.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TApiClientAssignment extends ApiClientAssignment = ApiClientAssignment>(listOptions: { apiClientID?: string, buyerID?: string, supplierID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TApiClientAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'ApiClients.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/apiclients/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update an api client assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/save-assignment|api docs} for more info 
    * 
    * @param apiClientAssignment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(apiClientAssignment: ApiClientAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/apiclients/assignments`, apiClientAssignment, {
            headers
        })
    }

   /**
    * Delete an api client buyer assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete-buyer-assignment|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteBuyerAssignment(apiClientID: string, buyerID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!apiClientID) throw new Error('Required parameter apiClientID was null or undefined when calling ApiClients.DeleteBuyerAssignment')
        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling ApiClients.DeleteBuyerAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/ApiClients/Assignments/${apiClientID}`, {
            headers
        })
    }

   /**
    * Delete an api client supplier assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/api-clients/delete-supplier-assignment|api docs} for more info 
    * 
    * @param apiClientID ID of the api client.
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteSupplierAssignment(apiClientID: string, supplierID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!apiClientID) throw new Error('Required parameter apiClientID was null or undefined when calling ApiClients.DeleteSupplierAssignment')
        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling ApiClients.DeleteSupplierAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${supplierID}/ApiClients/Assignments/${apiClientID}`, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ApiClients.As().List() // lists ApiClients using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}