import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { SecurityProfile } from '../models/SecurityProfile';
import { SecurityProfileAssignment } from '../models/SecurityProfileAssignment';
import { CommerceRole } from '../models/CommerceRole';
import { PartyType } from '../models/PartyType';
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
export class OcSecurityProfileService {
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
    * Get a list of security profiles. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TSecurityProfile extends SecurityProfile = SecurityProfile>(listOptions: { search?: string, searchOn?: Searchable<'SecurityProfiles.List'>, sortBy?: Sortable<'SecurityProfiles.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSecurityProfile>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'SecurityProfiles.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/securityprofiles`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new security profile. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/create|api docs} for more info 
    * 
    * @param securityProfile Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TSecurityProfile extends SecurityProfile>(securityProfile: SecurityProfile,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSecurityProfile>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/securityprofiles`, securityProfile, {
            headers
        })
    }

   /**
    * Get a single security profile. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/get|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TSecurityProfile extends SecurityProfile>(securityProfileID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSecurityProfile>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!securityProfileID) throw new Error('Required parameter securityProfileID was null or undefined when calling SecurityProfiles.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/securityprofiles/${securityProfileID}`, {
            headers
        })
    }

   /**
    * Create or update a security profile. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/save|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param securityProfile Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TSecurityProfile extends SecurityProfile>(securityProfileID: string, securityProfile: SecurityProfile,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSecurityProfile>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!securityProfileID) throw new Error('Required parameter securityProfileID was null or undefined when calling SecurityProfiles.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/securityprofiles/${securityProfileID}`, securityProfile, {
            headers
        })
    }

   /**
    * Delete a security profile. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/delete|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(securityProfileID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!securityProfileID) throw new Error('Required parameter securityProfileID was null or undefined when calling SecurityProfiles.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/securityprofiles/${securityProfileID}`, {
            headers
        })
    }

   /**
    * Partially update a security profile. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/patch|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param securityProfile 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TSecurityProfile extends SecurityProfile>(securityProfileID: string, securityProfile: PartialDeep<SecurityProfile>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSecurityProfile>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!securityProfileID) throw new Error('Required parameter securityProfileID was null or undefined when calling SecurityProfiles.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/securityprofiles/${securityProfileID}`, securityProfile, {
            headers
        })
    }

   /**
    * Delete a security profile assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/delete-assignment|api docs} for more info 
    * 
    * @param securityProfileID ID of the security profile.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(securityProfileID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!securityProfileID) throw new Error('Required parameter securityProfileID was null or undefined when calling SecurityProfiles.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'SecurityProfiles.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/securityprofiles/${securityProfileID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of security profile assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/list-assignments|api docs} for more info 
    * 
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.supplierID ID of the supplier.
    * @param listOptions.securityProfileID ID of the security profile.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.commerceRole Commerce role of the security profile assignment. Possible values: Buyer, Seller, Supplier.
    * @param listOptions.level Level of the security profile assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TSecurityProfileAssignment extends SecurityProfileAssignment = SecurityProfileAssignment>(listOptions: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: CommerceRole, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSecurityProfileAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'SecurityProfiles.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/securityprofiles/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a security profile assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/security-profiles/save-assignment|api docs} for more info 
    * 
    * @param securityProfileAssignment Required fields: SecurityProfileID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(securityProfileAssignment: SecurityProfileAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/securityprofiles/assignments`, securityProfileAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SecurityProfiles.As().List() // lists SecurityProfiles using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}