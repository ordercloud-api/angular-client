import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Buyer } from '../models/Buyer';
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
export class OcBuyerService {
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
    * Get a list of buyers. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TBuyer extends Buyer = Buyer>(listOptions: { search?: string, searchOn?: Searchable<'Buyers.List'>, sortBy?: Sortable<'Buyers.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TBuyer>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Buyers.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new buyer. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/create|api docs} for more info 
    * 
    * @param buyer Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TBuyer extends Buyer>(buyer: Buyer,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyer>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers`, buyer, {
            headers
        })
    }

   /**
    * Get a single buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TBuyer extends Buyer>(buyerID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyer>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Buyers.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}`, {
            headers
        })
    }

   /**
    * Create or update a buyer. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param buyer Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TBuyer extends Buyer>(buyerID: string, buyer: Buyer,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyer>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Buyers.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/buyers/${buyerID}`, buyer, {
            headers
        })
    }

   /**
    * Delete a buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(buyerID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Buyers.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}`, {
            headers
        })
    }

   /**
    * Partially update a buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/buyers/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param buyer 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TBuyer extends Buyer>(buyerID: string, buyer: PartialDeep<Buyer>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyer>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Buyers.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/buyers/${buyerID}`, buyer, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Buyers.As().List() // lists Buyers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}