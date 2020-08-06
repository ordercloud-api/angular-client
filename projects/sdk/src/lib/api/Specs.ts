import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Spec } from '../models/Spec';
import { SpecOption } from '../models/SpecOption';
import { SpecProductAssignment } from '../models/SpecProductAssignment';
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
export class OcSpecService {
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
    * Get a list of specs. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TSpec extends Spec = Spec>(listOptions: { search?: string, searchOn?: Searchable<'Specs.List'>, sortBy?: Sortable<'Specs.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSpec>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Specs.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/specs`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new spec. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/create|api docs} for more info 
    * 
    * @param spec Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TSpec extends Spec>(spec: Spec,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/specs`, spec, {
            headers
        })
    }

   /**
    * Get a single spec. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/get|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TSpec extends Spec>(specID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/specs/${specID}`, {
            headers
        })
    }

   /**
    * Create or update a spec. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/save|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param spec Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TSpec extends Spec>(specID: string, spec: Spec,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/specs/${specID}`, spec, {
            headers
        })
    }

   /**
    * Delete a spec. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/delete|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(specID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/specs/${specID}`, {
            headers
        })
    }

   /**
    * Partially update a spec. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/patch|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param spec 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TSpec extends Spec>(specID: string, spec: PartialDeep<Spec>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/specs/${specID}`, spec, {
            headers
        })
    }

   /**
    * Get a list of spec options. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/list-options|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListOptions<TSpecOption extends SpecOption = SpecOption>(specID: string, listOptions: { search?: string, searchOn?: Searchable<'Specs.ListOptions'>, sortBy?: Sortable<'Specs.ListOptions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSpecOption>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.ListOptions')
        const queryParams = utils.buildQueryParams(listOptions, 'Specs.ListOptions')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/specs/${specID}/options`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new spec option. A Spec can have multiple Options-- for example, if the spec is called 'Color', the options might be 'Blue', 'Red', and 'Green'. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/create-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param specOption Required fields: Value
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public CreateOption<TSpecOption extends SpecOption>(specID: string, specOption: SpecOption,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpecOption>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.CreateOption')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/specs/${specID}/options`, specOption, {
            headers
        })
    }

   /**
    * Get a single spec option. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/get-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetOption<TSpecOption extends SpecOption>(specID: string, optionID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpecOption>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.GetOption')
        if(!optionID) throw new Error('Required parameter optionID was null or undefined when calling Specs.GetOption')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/specs/${specID}/options/${optionID}`, {
            headers
        })
    }

   /**
    * Create or update a spec option. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/save-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param specOption Required fields: Value
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveOption<TSpecOption extends SpecOption>(specID: string, optionID: string, specOption: SpecOption,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpecOption>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.SaveOption')
        if(!optionID) throw new Error('Required parameter optionID was null or undefined when calling Specs.SaveOption')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/specs/${specID}/options/${optionID}`, specOption, {
            headers
        })
    }

   /**
    * Delete a spec option. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/delete-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteOption(specID: string, optionID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.DeleteOption')
        if(!optionID) throw new Error('Required parameter optionID was null or undefined when calling Specs.DeleteOption')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/specs/${specID}/options/${optionID}`, {
            headers
        })
    }

   /**
    * Partially update a spec option. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/patch-option|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param specOption 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public PatchOption<TSpecOption extends SpecOption>(specID: string, optionID: string, specOption: PartialDeep<SpecOption>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpecOption>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.PatchOption')
        if(!optionID) throw new Error('Required parameter optionID was null or undefined when calling Specs.PatchOption')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/specs/${specID}/options/${optionID}`, specOption, {
            headers
        })
    }

   /**
    * Delete a spec product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/delete-product-assignment|api docs} for more info 
    * 
    * @param specID ID of the spec.
    * @param productID ID of the product.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteProductAssignment(specID: string, productID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Specs.DeleteProductAssignment')
        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Specs.DeleteProductAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/specs/${specID}/productassignments/${productID}`, {
            headers
        })
    }

   /**
    * Get a list of spec product assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/list-product-assignments|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListProductAssignments<TSpecProductAssignment extends SpecProductAssignment = SpecProductAssignment>(listOptions: { search?: string, searchOn?: Searchable<'Specs.ListProductAssignments'>, sortBy?: Sortable<'Specs.ListProductAssignments'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSpecProductAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Specs.ListProductAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/specs/productassignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a spec product assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/specs/save-product-assignment|api docs} for more info 
    * 
    * @param specProductAssignment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveProductAssignment(specProductAssignment: SpecProductAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/specs/productassignments`, specProductAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Specs.As().List() // lists Specs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}