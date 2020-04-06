import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Address } from '../models/Address';
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
export class OcAdminAddressService {
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
    * Get a list of admin addresses. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TAddress extends Address = Address>(listOptions: { search?: string, searchOn?: Searchable<'AdminAddresses.List'>, sortBy?: Sortable<'AdminAddresses.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TAddress>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'AdminAddresses.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/addresses`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new admin address. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/create|api docs} for more info 
    * 
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TAddress extends Address>(address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/addresses`, address, {
            headers
        })
    }

   /**
    * Get a single admin address. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/get|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TAddress extends Address>(addressID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling AdminAddresses.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/addresses/${addressID}`, {
            headers
        })
    }

   /**
    * Create or update an admin address. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/save|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TAddress extends Address>(addressID: string, address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling AdminAddresses.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/addresses/${addressID}`, address, {
            headers
        })
    }

   /**
    * Delete an admin address. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/delete|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(addressID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling AdminAddresses.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/addresses/${addressID}`, {
            headers
        })
    }

   /**
    * Partially update an admin address. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-addresses/patch|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TAddress extends Address>(addressID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling AdminAddresses.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/addresses/${addressID}`, address, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * AdminAddresses.As().List() // lists AdminAddresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}