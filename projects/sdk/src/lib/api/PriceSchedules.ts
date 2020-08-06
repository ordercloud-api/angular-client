import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { PriceSchedule } from '../models/PriceSchedule';
import { PriceBreak } from '../models/PriceBreak';
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
export class OcPriceScheduleService {
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
    * Get a list of price schedules. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TPriceSchedule extends PriceSchedule = PriceSchedule>(listOptions: { search?: string, searchOn?: Searchable<'PriceSchedules.List'>, sortBy?: Sortable<'PriceSchedules.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TPriceSchedule>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'PriceSchedules.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/priceschedules`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new price schedule. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/create|api docs} for more info 
    * 
    * @param priceSchedule Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TPriceSchedule extends PriceSchedule>(priceSchedule: PriceSchedule,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/priceschedules`, priceSchedule, {
            headers
        })
    }

   /**
    * Get a single price schedule. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/get|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!priceScheduleID) throw new Error('Required parameter priceScheduleID was null or undefined when calling PriceSchedules.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/priceschedules/${priceScheduleID}`, {
            headers
        })
    }

   /**
    * Create or update a price schedule. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/save|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceSchedule: PriceSchedule,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!priceScheduleID) throw new Error('Required parameter priceScheduleID was null or undefined when calling PriceSchedules.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/priceschedules/${priceScheduleID}`, priceSchedule, {
            headers
        })
    }

   /**
    * Delete a price schedule. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/delete|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(priceScheduleID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!priceScheduleID) throw new Error('Required parameter priceScheduleID was null or undefined when calling PriceSchedules.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/priceschedules/${priceScheduleID}`, {
            headers
        })
    }

   /**
    * Partially update a price schedule. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/patch|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceSchedule: PartialDeep<PriceSchedule>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!priceScheduleID) throw new Error('Required parameter priceScheduleID was null or undefined when calling PriceSchedules.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/priceschedules/${priceScheduleID}`, priceSchedule, {
            headers
        })
    }

   /**
    * Create or update a price schedule price break. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/save-price-break|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param priceBreak Required fields: Quantity, Price
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SavePriceBreak<TPriceSchedule extends PriceSchedule>(priceScheduleID: string, priceBreak: PriceBreak,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPriceSchedule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!priceScheduleID) throw new Error('Required parameter priceScheduleID was null or undefined when calling PriceSchedules.SavePriceBreak')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/priceschedules/${priceScheduleID}/PriceBreaks`, priceBreak, {
            headers
        })
    }

   /**
    * Delete a price schedule price break. 
    * Check out the {@link https://ordercloud.io/api-reference/product-catalogs/price-schedules/delete-price-break|api docs} for more info 
    * 
    * @param priceScheduleID ID of the price schedule.
    * @param listOptions.quantity Quantity of the price schedule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeletePriceBreak(priceScheduleID: string, listOptions: { quantity?: number } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!priceScheduleID) throw new Error('Required parameter priceScheduleID was null or undefined when calling PriceSchedules.DeletePriceBreak')
        const queryParams = utils.buildQueryParams(listOptions, 'PriceSchedules.DeletePriceBreak')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/priceschedules/${priceScheduleID}/PriceBreaks`, {
            headers,
            params: queryParams
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * PriceSchedules.As().List() // lists PriceSchedules using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}