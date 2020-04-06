import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { User } from '../models/User';
import { ImpersonateTokenRequest } from '../models/ImpersonateTokenRequest';
import { AccessToken } from '../models/AccessToken';
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
export class OcSupplierUserService {
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
    * Get a list of supplier users. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-users/list|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TUser extends User = User>(supplierID: string, listOptions: { userGroupID?: string, search?: string, searchOn?: Searchable<'SupplierUsers.List'>, sortBy?: Sortable<'SupplierUsers.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUser>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUsers.List')
        const queryParams = utils.buildQueryParams(listOptions, 'SupplierUsers.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}/users`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new supplier user. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-users/create|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TUser extends User>(supplierID: string, user: User,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUsers.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/suppliers/${supplierID}/users`, user, {
            headers
        })
    }

   /**
    * Get a single supplier user. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-users/get|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TUser extends User>(supplierID: string, userID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUsers.Get')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling SupplierUsers.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}/users/${userID}`, {
            headers
        })
    }

   /**
    * Create or update a supplier user. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-users/save|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TUser extends User>(supplierID: string, userID: string, user: User,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUsers.Save')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling SupplierUsers.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/suppliers/${supplierID}/users/${userID}`, user, {
            headers
        })
    }

   /**
    * Delete a supplier user. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-users/delete|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(supplierID: string, userID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUsers.Delete')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling SupplierUsers.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${supplierID}/users/${userID}`, {
            headers
        })
    }

   /**
    * Partially update a supplier user. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-users/patch|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param user 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TUser extends User>(supplierID: string, userID: string, user: PartialDeep<User>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUsers.Patch')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling SupplierUsers.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/suppliers/${supplierID}/users/${userID}`, user, {
            headers
        })
    }

   /**
    * Get a single supplier user access token. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-users/get-access-token|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param impersonateTokenRequest Required fields: ClientID, Roles
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetAccessToken<TAccessToken extends AccessToken>(supplierID: string, userID: string, impersonateTokenRequest: ImpersonateTokenRequest,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAccessToken>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUsers.GetAccessToken')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling SupplierUsers.GetAccessToken')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/suppliers/${supplierID}/users/${userID}/accesstoken`, impersonateTokenRequest, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SupplierUsers.As().List() // lists SupplierUsers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}