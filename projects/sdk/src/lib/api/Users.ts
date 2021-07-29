import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { User } from '../models/User';
import { ImpersonateTokenRequest } from '../models/ImpersonateTokenRequest';
import { AccessToken } from '../models/AccessToken';
import { UserOrderMoveOption } from '../models/UserOrderMoveOption';
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
export class OcUserService {
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
    * Get a list of users. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/list|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TUser extends User = User>(buyerID: string, listOptions: { userGroupID?: string, search?: string, searchOn?: Searchable<'Users.List'>, sortBy?: Sortable<'Users.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUser>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Users.List')
        const queryParams = utils.buildQueryParams(listOptions, 'Users.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/users`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new user. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TUser extends User>(buyerID: string, user: User,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Users.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/users`, user, {
            headers
        })
    }

   /**
    * Get a single user. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TUser extends User>(buyerID: string, userID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Users.Get')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling Users.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/users/${userID}`, {
            headers
        })
    }

   /**
    * Create or update a user. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TUser extends User>(buyerID: string, userID: string, user: User,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Users.Save')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling Users.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/buyers/${buyerID}/users/${userID}`, user, {
            headers
        })
    }

   /**
    * Delete a user. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(buyerID: string, userID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Users.Delete')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling Users.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/users/${userID}`, {
            headers
        })
    }

   /**
    * Partially update a user. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param user 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TUser extends User>(buyerID: string, userID: string, user: PartialDeep<User>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Users.Patch')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling Users.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/buyers/${buyerID}/users/${userID}`, user, {
            headers
        })
    }

   /**
    * Get a single user access token. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/get-access-token|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param impersonateTokenRequest Required fields: ClientID, Roles
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetAccessToken<TAccessToken extends AccessToken>(buyerID: string, userID: string, impersonateTokenRequest: ImpersonateTokenRequest,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAccessToken>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Users.GetAccessToken')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling Users.GetAccessToken')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/users/${userID}/accesstoken`, impersonateTokenRequest, {
            headers
        })
    }

   /**
    * Move a user to a different buyer. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/users/move|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userID ID of the user.
    * @param newBuyerID ID of the new buyer.
    * @param listOptions.orders Orders of the user. Possible values: None, Unsubmitted, All.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Move<TUser extends User>(buyerID: string, userID: string, newBuyerID: string, listOptions: { orders?: UserOrderMoveOption } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling Users.Move')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling Users.Move')
        if(!newBuyerID) throw new Error('Required parameter newBuyerID was null or undefined when calling Users.Move')
        const queryParams = utils.buildQueryParams(listOptions, 'Users.Move')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/users/${userID}/moveto/${newBuyerID}`, null, {
            headers,
            params: queryParams
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Users.As().List() // lists Users using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}