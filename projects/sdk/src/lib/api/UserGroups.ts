import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { UserGroup } from '../models/UserGroup';
import { UserGroupAssignment } from '../models/UserGroupAssignment';
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
export class OcUserGroupService {
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
    * Get a list of user groups. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/list|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TUserGroup extends UserGroup = UserGroup>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'UserGroups.List'>, sortBy?: Sortable<'UserGroups.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUserGroup>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.List')
        const queryParams = utils.buildQueryParams(listOptions, 'UserGroups.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/usergroups`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new user group. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userGroup Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TUserGroup extends UserGroup>(buyerID: string, userGroup: UserGroup,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/usergroups`, userGroup, {
            headers
        })
    }

   /**
    * Get a single user group. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TUserGroup extends UserGroup>(buyerID: string, userGroupID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.Get')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling UserGroups.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/usergroups/${userGroupID}`, {
            headers
        })
    }

   /**
    * Create or update a user group. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userGroupID ID of the user group.
    * @param userGroup Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TUserGroup extends UserGroup>(buyerID: string, userGroupID: string, userGroup: UserGroup,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.Save')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling UserGroups.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/buyers/${buyerID}/usergroups/${userGroupID}`, userGroup, {
            headers
        })
    }

   /**
    * Delete a user group. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(buyerID: string, userGroupID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.Delete')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling UserGroups.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/usergroups/${userGroupID}`, {
            headers
        })
    }

   /**
    * Partially update a user group. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userGroupID ID of the user group.
    * @param userGroup 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TUserGroup extends UserGroup>(buyerID: string, userGroupID: string, userGroup: PartialDeep<UserGroup>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.Patch')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling UserGroups.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/buyers/${buyerID}/usergroups/${userGroupID}`, userGroup, {
            headers
        })
    }

   /**
    * Delete a user group user assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/delete-user-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userGroupID ID of the user group.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteUserAssignment(buyerID: string, userGroupID: string, userID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.DeleteUserAssignment')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling UserGroups.DeleteUserAssignment')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling UserGroups.DeleteUserAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/usergroups/${userGroupID}/assignments/${userID}`, {
            headers
        })
    }

   /**
    * Get a list of user group user assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/list-user-assignments|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.userID ID of the user.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListUserAssignments<TUserGroupAssignment extends UserGroupAssignment = UserGroupAssignment>(buyerID: string, listOptions: { userGroupID?: string, userID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUserGroupAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.ListUserAssignments')
        const queryParams = utils.buildQueryParams(listOptions, 'UserGroups.ListUserAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/usergroups/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a user group user assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/user-groups/save-user-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param userGroupAssignment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveUserAssignment(buyerID: string, userGroupAssignment: UserGroupAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling UserGroups.SaveUserAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/usergroups/assignments`, userGroupAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * UserGroups.As().List() // lists UserGroups using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}