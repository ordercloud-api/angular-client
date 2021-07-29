import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { OpenIdConnect } from '../models/OpenIdConnect';
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
export class OcOpenIdConnectService {
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
    * Get a list of OpenID Connects. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/open-id-connects/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TOpenIdConnect extends OpenIdConnect = OpenIdConnect>(listOptions: { search?: string, searchOn?: Searchable<'OpenIdConnects.List'>, sortBy?: Sortable<'OpenIdConnects.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TOpenIdConnect>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'OpenIdConnects.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/openidconnects`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new OpenID Connect. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/open-id-connects/create|api docs} for more info 
    * 
    * @param openIdConnect Required fields: OrderCloudApiClientID, ConnectClientID, ConnectClientSecret, AppStartUrl, AuthorizationEndpoint, TokenEndpoint
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TOpenIdConnect extends OpenIdConnect>(openIdConnect: OpenIdConnect,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOpenIdConnect>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/openidconnects`, openIdConnect, {
            headers
        })
    }

   /**
    * Get a single OpenID Connect. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/open-id-connects/get|api docs} for more info 
    * 
    * @param openidconnectID ID of the openidconnect.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TOpenIdConnect extends OpenIdConnect>(openidconnectID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOpenIdConnect>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!openidconnectID) throw new Error('Required parameter openidconnectID was null or undefined when calling OpenIdConnects.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/openidconnects/${openidconnectID}`, {
            headers
        })
    }

   /**
    * Create or update a OpenID Connect. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/open-id-connects/save|api docs} for more info 
    * 
    * @param openidconnectID ID of the openidconnect.
    * @param openIdConnect Required fields: OrderCloudApiClientID, ConnectClientID, ConnectClientSecret, AppStartUrl, AuthorizationEndpoint, TokenEndpoint
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TOpenIdConnect extends OpenIdConnect>(openidconnectID: string, openIdConnect: OpenIdConnect,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOpenIdConnect>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!openidconnectID) throw new Error('Required parameter openidconnectID was null or undefined when calling OpenIdConnects.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/openidconnects/${openidconnectID}`, openIdConnect, {
            headers
        })
    }

   /**
    * Delete a OpenID Connect. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/open-id-connects/delete|api docs} for more info 
    * 
    * @param openidconnectID ID of the openidconnect.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(openidconnectID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!openidconnectID) throw new Error('Required parameter openidconnectID was null or undefined when calling OpenIdConnects.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/openidconnects/${openidconnectID}`, {
            headers
        })
    }

   /**
    * Partially update a OpenID Connect. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/open-id-connects/patch|api docs} for more info 
    * 
    * @param openidconnectID ID of the openidconnect.
    * @param openIdConnect 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TOpenIdConnect extends OpenIdConnect>(openidconnectID: string, openIdConnect: PartialDeep<OpenIdConnect>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TOpenIdConnect>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!openidconnectID) throw new Error('Required parameter openidconnectID was null or undefined when calling OpenIdConnects.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/openidconnects/${openidconnectID}`, openIdConnect, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * OpenIdConnects.As().List() // lists OpenIdConnects using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}