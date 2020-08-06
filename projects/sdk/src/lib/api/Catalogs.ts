import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Catalog } from '../models/Catalog';
import { CatalogAssignment } from '../models/CatalogAssignment';
import { ProductCatalogAssignment } from '../models/ProductCatalogAssignment';
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
export class OcCatalogService {
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
    * Get a list of catalogs. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TCatalog extends Catalog = Catalog>(listOptions: { search?: string, searchOn?: Searchable<'Catalogs.List'>, sortBy?: Sortable<'Catalogs.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCatalog>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Catalogs.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/catalogs`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new catalog. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/create|api docs} for more info 
    * 
    * @param catalog Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TCatalog extends Catalog>(catalog: Catalog,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/catalogs`, catalog, {
            headers
        })
    }

   /**
    * Get a single catalog. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/get|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TCatalog extends Catalog>(catalogID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Catalogs.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/catalogs/${catalogID}`, {
            headers
        })
    }

   /**
    * Create or update a catalog. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/save|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param catalog Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TCatalog extends Catalog>(catalogID: string, catalog: Catalog,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Catalogs.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/catalogs/${catalogID}`, catalog, {
            headers
        })
    }

   /**
    * Delete a catalog. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/delete|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(catalogID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Catalogs.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/catalogs/${catalogID}`, {
            headers
        })
    }

   /**
    * Partially update a catalog. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/patch|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param catalog 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TCatalog extends Catalog>(catalogID: string, catalog: PartialDeep<Catalog>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Catalogs.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/catalogs/${catalogID}`, catalog, {
            headers
        })
    }

   /**
    * Delete a catalog assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/delete-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(catalogID: string, listOptions: { buyerID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Catalogs.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'Catalogs.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/catalogs/${catalogID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Delete a catalog product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/delete-product-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteProductAssignment(catalogID: string, productID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Catalogs.DeleteProductAssignment')
        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Catalogs.DeleteProductAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/catalogs/${catalogID}/productassignments/${productID}`, {
            headers
        })
    }

   /**
    * Get a list of catalog assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/list-assignments|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TCatalogAssignment extends CatalogAssignment = CatalogAssignment>(listOptions: { catalogID?: string, buyerID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCatalogAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Catalogs.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/catalogs/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a catalog assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/save-assignment|api docs} for more info 
    * 
    * @param catalogAssignment Required fields: CatalogID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(catalogAssignment: CatalogAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/catalogs/assignments`, catalogAssignment, {
            headers
        })
    }

   /**
    * Get a list of catalog product assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/list-product-assignments|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.productID ID of the product.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListProductAssignments<TProductCatalogAssignment extends ProductCatalogAssignment = ProductCatalogAssignment>(listOptions: { catalogID?: string, productID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TProductCatalogAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Catalogs.ListProductAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/catalogs/productassignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a catalog product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/catalogs/save-product-assignment|api docs} for more info 
    * 
    * @param productCatalogAssignment Required fields: CatalogID, ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveProductAssignment(productCatalogAssignment: ProductCatalogAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/catalogs/productassignments`, productCatalogAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Catalogs.As().List() // lists Catalogs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}