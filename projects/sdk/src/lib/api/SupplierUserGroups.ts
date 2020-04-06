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
export class OcSupplierUserGroupService {
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
    * Get a list of supplier user groups. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/list|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TUserGroup extends UserGroup = UserGroup>(supplierID: string, listOptions: { search?: string, searchOn?: Searchable<'SupplierUserGroups.List'>, sortBy?: Sortable<'SupplierUserGroups.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUserGroup>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.List')
        const queryParams = utils.buildQueryParams(listOptions, 'SupplierUserGroups.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}/usergroups`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new supplier user group. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/create|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroup Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TUserGroup extends UserGroup>(supplierID: string, userGroup: UserGroup,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/suppliers/${supplierID}/usergroups`, userGroup, {
            headers
        })
    }

   /**
    * Get a single supplier user group. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/get|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TUserGroup extends UserGroup>(supplierID: string, userGroupID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.Get')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling SupplierUserGroups.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}/usergroups/${userGroupID}`, {
            headers
        })
    }

   /**
    * Create or update a supplier user group. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/save|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userGroup Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TUserGroup extends UserGroup>(supplierID: string, userGroupID: string, userGroup: UserGroup,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.Save')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling SupplierUserGroups.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/suppliers/${supplierID}/usergroups/${userGroupID}`, userGroup, {
            headers
        })
    }

   /**
    * Delete a supplier user group. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/delete|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(supplierID: string, userGroupID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.Delete')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling SupplierUserGroups.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${supplierID}/usergroups/${userGroupID}`, {
            headers
        })
    }

   /**
    * Partially update a supplier user group. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/patch|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userGroup 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TUserGroup extends UserGroup>(supplierID: string, userGroupID: string, userGroup: PartialDeep<UserGroup>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TUserGroup>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.Patch')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling SupplierUserGroups.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/suppliers/${supplierID}/usergroups/${userGroupID}`, userGroup, {
            headers
        })
    }

   /**
    * Delete a supplier user group user assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/delete-user-assignment|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userID ID of the user.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteUserAssignment(supplierID: string, userGroupID: string, userID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.DeleteUserAssignment')
        if(!userGroupID) throw new Error('Required parameter userGroupID was null or undefined when calling SupplierUserGroups.DeleteUserAssignment')
        if(!userID) throw new Error('Required parameter userID was null or undefined when calling SupplierUserGroups.DeleteUserAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${supplierID}/usergroups/${userGroupID}/assignments/${userID}`, {
            headers
        })
    }

   /**
    * Get a list of supplier user group user assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/list-user-assignments|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.userID ID of the user.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListUserAssignments<TUserGroupAssignment extends UserGroupAssignment = UserGroupAssignment>(supplierID: string, listOptions: { userGroupID?: string, userID?: string, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUserGroupAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.ListUserAssignments')
        const queryParams = utils.buildQueryParams(listOptions, 'SupplierUserGroups.ListUserAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/suppliers/${supplierID}/usergroups/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a supplier user group user assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-user-groups/save-user-assignment|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param userGroupAssignment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveUserAssignment(supplierID: string, userGroupAssignment: UserGroupAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!supplierID) throw new Error('Required parameter supplierID was null or undefined when calling SupplierUserGroups.SaveUserAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/suppliers/${supplierID}/usergroups/assignments`, userGroupAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SupplierUserGroups.As().List() // lists SupplierUserGroups using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}