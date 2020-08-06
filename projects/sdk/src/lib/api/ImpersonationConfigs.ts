import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ImpersonationConfig } from '../models/ImpersonationConfig';
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
export class OcImpersonationConfigService {
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
    * Get a list of impersonation configs. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TImpersonationConfig extends ImpersonationConfig = ImpersonationConfig>(listOptions: { search?: string, searchOn?: Searchable<'ImpersonationConfigs.List'>, sortBy?: Sortable<'ImpersonationConfigs.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TImpersonationConfig>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'ImpersonationConfigs.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/impersonationconfig`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new impersonation config. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/create|api docs} for more info 
    * 
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TImpersonationConfig extends ImpersonationConfig>(impersonationConfig: ImpersonationConfig,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/impersonationconfig`, impersonationConfig, {
            headers
        })
    }

   /**
    * Get a single impersonation config. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/get|api docs} for more info 
    * 
    * @param impersonationConfigID ID of the impersonation config.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!impersonationConfigID) throw new Error('Required parameter impersonationConfigID was null or undefined when calling ImpersonationConfigs.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/impersonationconfig/${impersonationConfigID}`, {
            headers
        })
    }

   /**
    * Create or update an impersonation config. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/save|api docs} for more info 
    * 
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: ImpersonationConfig,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!impersonationConfigID) throw new Error('Required parameter impersonationConfigID was null or undefined when calling ImpersonationConfigs.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/impersonationconfig/${impersonationConfigID}`, impersonationConfig, {
            headers
        })
    }

   /**
    * Delete an impersonation config. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/delete|api docs} for more info 
    * 
    * @param impersonationConfigID ID of the impersonation config.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(impersonationConfigID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!impersonationConfigID) throw new Error('Required parameter impersonationConfigID was null or undefined when calling ImpersonationConfigs.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/impersonationconfig/${impersonationConfigID}`, {
            headers
        })
    }

   /**
    * Partially update an impersonation config. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/impersonation-configs/patch|api docs} for more info 
    * 
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TImpersonationConfig extends ImpersonationConfig>(impersonationConfigID: string, impersonationConfig: PartialDeep<ImpersonationConfig>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TImpersonationConfig>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!impersonationConfigID) throw new Error('Required parameter impersonationConfigID was null or undefined when calling ImpersonationConfigs.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/impersonationconfig/${impersonationConfigID}`, impersonationConfig, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ImpersonationConfigs.As().List() // lists ImpersonationConfigs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}