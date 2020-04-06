import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ProductFacet } from '../models/ProductFacet';
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
export class OcProductFacetService {
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
    * Get a list of product facets. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TProductFacet extends ProductFacet = ProductFacet>(listOptions: { search?: string, searchOn?: Searchable<'ProductFacets.List'>, sortBy?: Sortable<'ProductFacets.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TProductFacet>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'ProductFacets.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/productfacets`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new product facet. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/create|api docs} for more info 
    * 
    * @param productFacet Required fields: Name, MinCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TProductFacet extends ProductFacet>(productFacet: ProductFacet,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProductFacet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/productfacets`, productFacet, {
            headers
        })
    }

   /**
    * Get a single product facet. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/get|api docs} for more info 
    * 
    * @param productFacetID ID of the product facet.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TProductFacet extends ProductFacet>(productFacetID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProductFacet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productFacetID) throw new Error('Required parameter productFacetID was null or undefined when calling ProductFacets.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/productfacets/${productFacetID}`, {
            headers
        })
    }

   /**
    * Create or update a product facet. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/save|api docs} for more info 
    * 
    * @param productFacetID ID of the product facet.
    * @param productFacet Required fields: Name, MinCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TProductFacet extends ProductFacet>(productFacetID: string, productFacet: ProductFacet,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProductFacet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productFacetID) throw new Error('Required parameter productFacetID was null or undefined when calling ProductFacets.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/productfacets/${productFacetID}`, productFacet, {
            headers
        })
    }

   /**
    * Delete a product facet. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/delete|api docs} for more info 
    * 
    * @param productFacetID ID of the product facet.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(productFacetID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productFacetID) throw new Error('Required parameter productFacetID was null or undefined when calling ProductFacets.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/productfacets/${productFacetID}`, {
            headers
        })
    }

   /**
    * Partially update a product facet. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/product-facets/patch|api docs} for more info 
    * 
    * @param productFacetID ID of the product facet.
    * @param productFacet 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TProductFacet extends ProductFacet>(productFacetID: string, productFacet: PartialDeep<ProductFacet>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProductFacet>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productFacetID) throw new Error('Required parameter productFacetID was null or undefined when calling ProductFacets.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/productfacets/${productFacetID}`, productFacet, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ProductFacets.As().List() // lists ProductFacets using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}