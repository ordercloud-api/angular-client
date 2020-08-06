import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { CostCenter } from '../models/CostCenter';
import { CostCenterAssignment } from '../models/CostCenterAssignment';
import { PartyType } from '../models/PartyType';
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
export class OcCostCenterService {
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
    * Get a list of cost centers. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/list|api docs} for more info 
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
    public List<TCostCenter extends CostCenter = CostCenter>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'CostCenters.List'>, sortBy?: Sortable<'CostCenters.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCostCenter>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.List')
        const queryParams = utils.buildQueryParams(listOptions, 'CostCenters.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/costcenters`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new cost center. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param costCenter Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TCostCenter extends CostCenter>(buyerID: string, costCenter: CostCenter,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCostCenter>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/costcenters`, costCenter, {
            headers
        })
    }

   /**
    * Get a single cost center. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TCostCenter extends CostCenter>(buyerID: string, costCenterID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCostCenter>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.Get')
        if(!costCenterID) throw new Error('Required parameter costCenterID was null or undefined when calling CostCenters.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/costcenters/${costCenterID}`, {
            headers
        })
    }

   /**
    * Create or update a cost center. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param costCenter Required fields: Name
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TCostCenter extends CostCenter>(buyerID: string, costCenterID: string, costCenter: CostCenter,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCostCenter>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.Save')
        if(!costCenterID) throw new Error('Required parameter costCenterID was null or undefined when calling CostCenters.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/buyers/${buyerID}/costcenters/${costCenterID}`, costCenter, {
            headers
        })
    }

   /**
    * Delete a cost center. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(buyerID: string, costCenterID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.Delete')
        if(!costCenterID) throw new Error('Required parameter costCenterID was null or undefined when calling CostCenters.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/costcenters/${costCenterID}`, {
            headers
        })
    }

   /**
    * Partially update a cost center. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param costCenter 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TCostCenter extends CostCenter>(buyerID: string, costCenterID: string, costCenter: PartialDeep<CostCenter>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCostCenter>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.Patch')
        if(!costCenterID) throw new Error('Required parameter costCenterID was null or undefined when calling CostCenters.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/buyers/${buyerID}/costcenters/${costCenterID}`, costCenter, {
            headers
        })
    }

   /**
    * Delete a cost center assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/delete-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param costCenterID ID of the cost center.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(buyerID: string, costCenterID: string, listOptions: { userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.DeleteAssignment')
        if(!costCenterID) throw new Error('Required parameter costCenterID was null or undefined when calling CostCenters.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'CostCenters.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/costcenters/${costCenterID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of cost center assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/list-assignments|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.costCenterID ID of the cost center.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the cost center assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TCostCenterAssignment extends CostCenterAssignment = CostCenterAssignment>(buyerID: string, listOptions: { costCenterID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCostCenterAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.ListAssignments')
        const queryParams = utils.buildQueryParams(listOptions, 'CostCenters.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/costcenters/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a cost center assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/cost-centers/save-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param costCenterAssignment Required fields: CostCenterID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(buyerID: string, costCenterAssignment: CostCenterAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CostCenters.SaveAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/costcenters/assignments`, costCenterAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * CostCenters.As().List() // lists CostCenters using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}