import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Category } from '../models/Category';
import { CategoryAssignment } from '../models/CategoryAssignment';
import { PartyType } from '../models/PartyType';
import { CategoryProductAssignment } from '../models/CategoryProductAssignment';
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
export class OcCategoryService {
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
    * Get a list of categories. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/list|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.depth Depth of the category.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TCategory extends Category = Category>(catalogID: string, listOptions: { depth?: string, search?: string, searchOn?: Searchable<'Categories.List'>, sortBy?: Sortable<'Categories.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCategory>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.List')
        const queryParams = utils.buildQueryParams(listOptions, 'Categories.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/catalogs/${catalogID}/categories`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new category. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/create|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param category Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TCategory extends Category>(catalogID: string, category: Category,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/catalogs/${catalogID}/categories`, category, {
            headers
        })
    }

   /**
    * Get a single category. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/get|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TCategory extends Category>(catalogID: string, categoryID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.Get')
        if(!categoryID) throw new Error('Required parameter categoryID was null or undefined when calling Categories.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/catalogs/${catalogID}/categories/${categoryID}`, {
            headers
        })
    }

   /**
    * Create or update a category. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/save|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param category Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TCategory extends Category>(catalogID: string, categoryID: string, category: Category,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.Save')
        if(!categoryID) throw new Error('Required parameter categoryID was null or undefined when calling Categories.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/catalogs/${catalogID}/categories/${categoryID}`, category, {
            headers
        })
    }

   /**
    * Delete a category. Deleting a parent category will also delete all of that category's children.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/delete|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(catalogID: string, categoryID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.Delete')
        if(!categoryID) throw new Error('Required parameter categoryID was null or undefined when calling Categories.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/catalogs/${catalogID}/categories/${categoryID}`, {
            headers
        })
    }

   /**
    * Partially update a category. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/patch|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param category 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TCategory extends Category>(catalogID: string, categoryID: string, category: PartialDeep<Category>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.Patch')
        if(!categoryID) throw new Error('Required parameter categoryID was null or undefined when calling Categories.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/catalogs/${catalogID}/categories/${categoryID}`, category, {
            headers
        })
    }

   /**
    * Delete a category assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/delete-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(catalogID: string, categoryID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.DeleteAssignment')
        if(!categoryID) throw new Error('Required parameter categoryID was null or undefined when calling Categories.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'Categories.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/catalogs/${catalogID}/categories/${categoryID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Delete a category product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/delete-product-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteProductAssignment(catalogID: string, categoryID: string, productID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.DeleteProductAssignment')
        if(!categoryID) throw new Error('Required parameter categoryID was null or undefined when calling Categories.DeleteProductAssignment')
        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Categories.DeleteProductAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/catalogs/${catalogID}/categories/${categoryID}/productassignments/${productID}`, {
            headers
        })
    }

   /**
    * Get a list of category assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/list-assignments|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the category assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TCategoryAssignment extends CategoryAssignment = CategoryAssignment>(catalogID: string, listOptions: { categoryID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCategoryAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.ListAssignments')
        const queryParams = utils.buildQueryParams(listOptions, 'Categories.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/catalogs/${catalogID}/categories/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a category assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/save-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryAssignment Required fields: CategoryID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(catalogID: string, categoryAssignment: CategoryAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.SaveAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/catalogs/${catalogID}/categories/assignments`, categoryAssignment, {
            headers
        })
    }

   /**
    * Get a list of category product assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/list-product-assignments|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.productID ID of the product.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListProductAssignments<TCategoryProductAssignment extends CategoryProductAssignment = CategoryProductAssignment>(catalogID: string, listOptions: { categoryID?: string, productID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCategoryProductAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.ListProductAssignments')
        const queryParams = utils.buildQueryParams(listOptions, 'Categories.ListProductAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/catalogs/${catalogID}/categories/productassignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a category product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/categories/save-product-assignment|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param categoryProductAssignment Required fields: CategoryID, ProductID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveProductAssignment(catalogID: string, categoryProductAssignment: CategoryProductAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Categories.SaveProductAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/catalogs/${catalogID}/categories/productassignments`, categoryProductAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Categories.As().List() // lists Categories using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}