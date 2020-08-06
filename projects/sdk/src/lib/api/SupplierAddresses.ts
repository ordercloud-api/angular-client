import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
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
export class OcSupplierAddressService {
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
    * Get a list of supplier addresses. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/list|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TAddress extends Address = Address>(supplierID: string, listOptions: { search?: string, searchOn?: Searchable<'SupplierAddresses.List'>, sortBy?: Sortable<'SupplierAddresses.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TAddress>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierAddresses.List')
        const queryParams = utils.buildQueryParams(listOptions, 'SupplierAddresses.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}/addresses`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new supplier address. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/create|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TAddress extends Address>(supplierID: string, address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierAddresses.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/suppliers/${supplierID}/addresses`, address, {
            headers
        })
    }

   /**
    * Get a single supplier address. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/get|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TAddress extends Address>(supplierID: string, addressID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierAddresses.Get')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling SupplierAddresses.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}/addresses/${addressID}`, {
            headers
        })
    }

   /**
    * Create or update a supplier address. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/save|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param addressID ID of the address.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TAddress extends Address>(supplierID: string, addressID: string, address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierAddresses.Save')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling SupplierAddresses.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/suppliers/${supplierID}/addresses/${addressID}`, address, {
            headers
        })
    }

   /**
    * Delete a supplier address. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/delete|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(supplierID: string, addressID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierAddresses.Delete')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling SupplierAddresses.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${supplierID}/addresses/${addressID}`, {
            headers
        })
    }

   /**
    * Partially update a supplier address. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/patch|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param addressID ID of the address.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TAddress extends Address>(supplierID: string, addressID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierAddresses.Patch')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling SupplierAddresses.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/suppliers/${supplierID}/addresses/${addressID}`, address, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SupplierAddresses.As().List() // lists SupplierAddresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}