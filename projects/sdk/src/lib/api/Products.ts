import { ListPageWithFacets } from '../models/ListPageWithFacets';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Product } from '../models/Product';
import { SearchType } from '../models/SearchType';
import { ListPage } from '../models/ListPage';
import { Spec } from '../models/Spec';
import { Supplier } from '../models/Supplier';
import { Variant } from '../models/Variant';
import { ProductAssignment } from '../models/ProductAssignment';
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
export class OcProductService {
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
    * Get a list of products. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TProduct extends Product = Product>(listOptions: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: Searchable<'Products.List'>, searchType?: SearchType, sortBy?: Sortable<'Products.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPageWithFacets<TProduct>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Products.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/products`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new product. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/create|api docs} for more info 
    * 
    * @param product Required fields: Name, QuantityMultiplier
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TProduct extends Product>(product: Product,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/products`, product, {
            headers
        })
    }

   /**
    * Get a single product. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/get|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TProduct extends Product>(productID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/products/${productID}`, {
            headers
        })
    }

   /**
    * Create or update a product. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/save|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param product Required fields: Name, QuantityMultiplier
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TProduct extends Product>(productID: string, product: Product,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/products/${productID}`, product, {
            headers
        })
    }

   /**
    * Delete a product. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/delete|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(productID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/products/${productID}`, {
            headers
        })
    }

   /**
    * Partially update a product. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/patch|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param product 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TProduct extends Product>(productID: string, product: PartialDeep<Product>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/products/${productID}`, product, {
            headers
        })
    }

   /**
    * Delete a product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/delete-assignment|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(productID: string, buyerID: string, listOptions: { userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.DeleteAssignment')
        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Products.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'Products.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/products/${productID}/assignments/${buyerID}`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of product specs. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list-specs|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListSpecs<TSpec extends Spec = Spec>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Products.ListSpecs'>, sortBy?: Sortable<'Products.ListSpecs'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSpec>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.ListSpecs')
        const queryParams = utils.buildQueryParams(listOptions, 'Products.ListSpecs')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/products/${productID}/specs`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of product suppliers. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list-suppliers|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListSuppliers<TSupplier extends Supplier = Supplier>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Products.ListSuppliers'>, sortBy?: Sortable<'Products.ListSuppliers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSupplier>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.ListSuppliers')
        const queryParams = utils.buildQueryParams(listOptions, 'Products.ListSuppliers')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/products/${productID}/suppliers`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a product supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/save-supplier|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveSupplier(productID: string, supplierID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.SaveSupplier')
        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Products.SaveSupplier')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/products/${productID}/suppliers/${supplierID}`, null, {
            headers
        })
    }

   /**
    * Remove a supplier. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/remove-supplier|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public RemoveSupplier(productID: string, supplierID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.RemoveSupplier')
        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling Products.RemoveSupplier')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/products/${productID}/suppliers/${supplierID}`, {
            headers
        })
    }

   /**
    * Get a list of product variants. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list-variants|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListVariants<TVariant extends Variant = Variant>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Products.ListVariants'>, sortBy?: Sortable<'Products.ListVariants'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TVariant>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.ListVariants')
        const queryParams = utils.buildQueryParams(listOptions, 'Products.ListVariants')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/products/${productID}/variants`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single product variant. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/get-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetVariant<TVariant extends Variant>(productID: string, variantID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TVariant>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.GetVariant')
        if(!variantID) throw new Error('Required parameter variantID was null or undefined when calling Products.GetVariant')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/products/${productID}/variants/${variantID}`, {
            headers
        })
    }

   /**
    * Create or update a product variant. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/save-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param variant 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveVariant<TVariant extends Variant>(productID: string, variantID: string, variant: Variant,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TVariant>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.SaveVariant')
        if(!variantID) throw new Error('Required parameter variantID was null or undefined when calling Products.SaveVariant')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/products/${productID}/variants/${variantID}`, variant, {
            headers
        })
    }

   /**
    * Partially update a product variant. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/patch-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param variant 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public PatchVariant<TVariant extends Variant>(productID: string, variantID: string, variant: PartialDeep<Variant>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TVariant>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.PatchVariant')
        if(!variantID) throw new Error('Required parameter variantID was null or undefined when calling Products.PatchVariant')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/products/${productID}/variants/${variantID}`, variant, {
            headers
        })
    }

   /**
    * Generate a variants. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/generate-variants|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.overwriteExisting Overwrite existing of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GenerateVariants<TProduct extends Product>(productID: string, listOptions: { overwriteExisting?: boolean } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Products.GenerateVariants')
        const queryParams = utils.buildQueryParams(listOptions, 'Products.GenerateVariants')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/products/${productID}/variants/generate`, null, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of product assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/list-assignments|api docs} for more info 
    * 
    * @param listOptions.productID ID of the product.
    * @param listOptions.priceScheduleID ID of the price schedule.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the product assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TProductAssignment extends ProductAssignment = ProductAssignment>(listOptions: { productID?: string, priceScheduleID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TProductAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Products.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/products/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/products/save-assignment|api docs} for more info 
    * 
    * @param productAssignment Required fields: ProductID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(productAssignment: ProductAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/products/assignments`, productAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Products.As().List() // lists Products using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}