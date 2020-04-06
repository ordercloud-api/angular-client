import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { User } from '../models/User';
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
export class OcAdminUserService {
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
    * Get a list of admin users. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TUser extends User = User>(listOptions: { search?: string, searchOn?: Searchable<'AdminUsers.List'>, sortBy?: Sortable<'AdminUsers.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUser>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'AdminUsers.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/adminusers`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new admin user. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/create|api docs} for more info 
    * 
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TUser extends User>(user: User,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/adminusers`, user, {
            headers
        })
    }

   /**
    * Get a single admin user. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/get|api docs} for more info 
    * 
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TUser extends User>(userID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!userID) throw new Error('Required parameter userID was null or undefined when calling AdminUsers.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/adminusers/${userID}`, {
            headers
        })
    }

   /**
    * Create or update an admin user. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/save|api docs} for more info 
    * 
    * @param userID ID of the user.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TUser extends User>(userID: string, user: User,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!userID) throw new Error('Required parameter userID was null or undefined when calling AdminUsers.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/adminusers/${userID}`, user, {
            headers
        })
    }

   /**
    * Delete an admin user. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/delete|api docs} for more info 
    * 
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(userID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!userID) throw new Error('Required parameter userID was null or undefined when calling AdminUsers.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/adminusers/${userID}`, {
            headers
        })
    }

   /**
    * Partially update an admin user. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/admin-users/patch|api docs} for more info 
    * 
    * @param userID ID of the user.
    * @param user 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TUser extends User>(userID: string, user: PartialDeep<User>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!userID) throw new Error('Required parameter userID was null or undefined when calling AdminUsers.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/adminusers/${userID}`, user, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * AdminUsers.As().List() // lists AdminUsers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}