import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Incrementor } from '../models/Incrementor';
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
export class OcIncrementorService {
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
    * Get a list of incrementors. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TIncrementor extends Incrementor = Incrementor>(listOptions: { search?: string, searchOn?: Searchable<'Incrementors.List'>, sortBy?: Sortable<'Incrementors.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TIncrementor>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Incrementors.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/incrementors`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new incrementor. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/create|api docs} for more info 
    * 
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TIncrementor extends Incrementor>(incrementor: Incrementor,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TIncrementor>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/incrementors`, incrementor, {
            headers
        })
    }

   /**
    * Get a single incrementor. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/get|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TIncrementor extends Incrementor>(incrementorID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TIncrementor>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!incrementorID) throw new Error('Required parameter incrementorID was null or undefined when calling Incrementors.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/incrementors/${incrementorID}`, {
            headers
        })
    }

   /**
    * Create or update an incrementor. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/save|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TIncrementor extends Incrementor>(incrementorID: string, incrementor: Incrementor,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TIncrementor>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!incrementorID) throw new Error('Required parameter incrementorID was null or undefined when calling Incrementors.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/incrementors/${incrementorID}`, incrementor, {
            headers
        })
    }

   /**
    * Delete an incrementor. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/delete|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(incrementorID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!incrementorID) throw new Error('Required parameter incrementorID was null or undefined when calling Incrementors.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/incrementors/${incrementorID}`, {
            headers
        })
    }

   /**
    * Partially update an incrementor. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/incrementors/patch|api docs} for more info 
    * 
    * @param incrementorID ID of the incrementor.
    * @param incrementor 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TIncrementor extends Incrementor>(incrementorID: string, incrementor: PartialDeep<Incrementor>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TIncrementor>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!incrementorID) throw new Error('Required parameter incrementorID was null or undefined when calling Incrementors.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/incrementors/${incrementorID}`, incrementor, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Incrementors.As().List() // lists Incrementors using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}