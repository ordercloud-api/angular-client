import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Address } from '../models/Address';
import { AddressAssignment } from '../models/AddressAssignment';
import { PartyType } from '../models/PartyType';
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
export class OcAddressService {
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
    * Get a list of addresses. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/list|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TAddress extends Address = Address>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'Addresses.List'>, sortBy?: Sortable<'Addresses.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TAddress>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.List')
        const queryParams = utils.buildQueryParams(listOptions, 'Addresses.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/addresses`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new address. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TAddress extends Address>(buyerID: string, address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/addresses`, address, {
            headers
        })
    }

   /**
    * Get a single address. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TAddress extends Address>(buyerID: string, addressID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.Get')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Addresses.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/addresses/${addressID}`, {
            headers
        })
    }

   /**
    * Create or update an address. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TAddress extends Address>(buyerID: string, addressID: string, address: Address,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.Save')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Addresses.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/buyers/${buyerID}/addresses/${addressID}`, address, {
            headers
        })
    }

   /**
    * Delete an address. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(buyerID: string, addressID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.Delete')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Addresses.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/addresses/${addressID}`, {
            headers
        })
    }

   /**
    * Partially update an address. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TAddress extends Address>(buyerID: string, addressID: string, address: PartialDeep<Address>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.Patch')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Addresses.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/buyers/${buyerID}/addresses/${addressID}`, address, {
            headers
        })
    }

   /**
    * Delete an address assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/delete-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressID ID of the address.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(buyerID: string, addressID: string, listOptions: { userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.DeleteAssignment')
        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Addresses.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'Addresses.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/addresses/${addressID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of address assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/list-assignments|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.addressID ID of the address.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the address assignment. Possible values: User, Group, Company.
    * @param listOptions.isShipping Is shipping of the address assignment.
    * @param listOptions.isBilling Is billing of the address assignment.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TAddressAssignment extends AddressAssignment = AddressAssignment>(buyerID: string, listOptions: { addressID?: string, userID?: string, userGroupID?: string, level?: PartyType, isShipping?: boolean, isBilling?: boolean, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TAddressAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.ListAssignments')
        const queryParams = utils.buildQueryParams(listOptions, 'Addresses.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/addresses/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update an address assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/addresses/save-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param addressAssignment Required fields: AddressID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(buyerID: string, addressAssignment: AddressAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Addresses.SaveAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/addresses/assignments`, addressAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Addresses.As().List() // lists Addresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}