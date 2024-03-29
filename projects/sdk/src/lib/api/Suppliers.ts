import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Supplier } from '../models/Supplier';
import { SupplierBuyer } from '../models/SupplierBuyer';
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
export class OcSupplierService {
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
    * Get a list of suppliers. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TSupplier extends Supplier = Supplier>(listOptions: { search?: string, searchOn?: Searchable<'Suppliers.List'>, sortBy?: Sortable<'Suppliers.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSupplier>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Suppliers.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new supplier. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/create|api docs} for more info 
    * 
    * @param supplier Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TSupplier extends Supplier>(supplier: Supplier,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSupplier>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/suppliers`, supplier, {
            headers
        })
    }

   /**
    * Get a single supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/get|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TSupplier extends Supplier>(supplierID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSupplier>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Suppliers.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}`, {
            headers
        })
    }

   /**
    * Create or update a supplier. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/save|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param supplier Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TSupplier extends Supplier>(supplierID: string, supplier: Supplier,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSupplier>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Suppliers.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/suppliers/${supplierID}`, supplier, {
            headers
        })
    }

   /**
    * Delete a supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/delete|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(supplierID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Suppliers.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${supplierID}`, {
            headers
        })
    }

   /**
    * Partially update a supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/patch|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param supplier 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TSupplier extends Supplier>(supplierID: string, supplier: PartialDeep<Supplier>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSupplier>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Suppliers.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/suppliers/${supplierID}`, supplier, {
            headers
        })
    }

   /**
    * Get a list of supplier buyers. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/list-buyers|api docs} for more info 
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
    public ListBuyers<TSupplierBuyer extends SupplierBuyer = SupplierBuyer>(supplierID: string, listOptions: { search?: string, searchOn?: Searchable<'Suppliers.ListBuyers'>, sortBy?: Sortable<'Suppliers.ListBuyers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSupplierBuyer>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Suppliers.ListBuyers')
        const queryParams = utils.buildQueryParams(listOptions, 'Suppliers.ListBuyers')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}/buyers`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a supplier buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/save-buyer|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveBuyer(supplierID: string, buyerID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Suppliers.SaveBuyer')
        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Suppliers.SaveBuyer')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/suppliers/${supplierID}/buyers/${buyerID}`, null, {
            headers
        })
    }

   /**
    * Delete a supplier buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/suppliers/delete-buyer|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteBuyer(supplierID: string, buyerID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Suppliers.DeleteBuyer')
        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Suppliers.DeleteBuyer')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${supplierID}/buyers/${buyerID}`, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Suppliers.As().List() // lists Suppliers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}