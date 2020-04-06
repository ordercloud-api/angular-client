import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { SpendingAccount } from '../models/SpendingAccount';
import { SpendingAccountAssignment } from '../models/SpendingAccountAssignment';
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
export class OcSpendingAccountService {
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
    * Get a list of spending accounts. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/list|api docs} for more info 
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
    public List<TSpendingAccount extends SpendingAccount = SpendingAccount>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'SpendingAccounts.List'>, sortBy?: Sortable<'SpendingAccounts.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSpendingAccount>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.List')
        const queryParams = utils.buildQueryParams(listOptions, 'SpendingAccounts.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new spending account. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccount Required fields: Name, Balance
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccount: SpendingAccount,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts`, spendingAccount, {
            headers
        })
    }

   /**
    * Get a single spending account. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.Get')
        if(!spendingAccountID) throw new Error('Required parameter spendingAccountID was null or undefined when calling SpendingAccounts.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, {
            headers
        })
    }

   /**
    * Create or update a spending account. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param spendingAccount Required fields: Name, Balance
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string, spendingAccount: SpendingAccount,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.Save')
        if(!spendingAccountID) throw new Error('Required parameter spendingAccountID was null or undefined when calling SpendingAccounts.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, spendingAccount, {
            headers
        })
    }

   /**
    * Delete a spending account. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(buyerID: string, spendingAccountID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.Delete')
        if(!spendingAccountID) throw new Error('Required parameter spendingAccountID was null or undefined when calling SpendingAccounts.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, {
            headers
        })
    }

   /**
    * Partially update a spending account. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param spendingAccount 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TSpendingAccount extends SpendingAccount>(buyerID: string, spendingAccountID: string, spendingAccount: PartialDeep<SpendingAccount>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.Patch')
        if(!spendingAccountID) throw new Error('Required parameter spendingAccountID was null or undefined when calling SpendingAccounts.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts/${spendingAccountID}`, spendingAccount, {
            headers
        })
    }

   /**
    * Delete a spending account assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/delete-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountID ID of the spending account.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(buyerID: string, spendingAccountID: string, listOptions: { userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.DeleteAssignment')
        if(!spendingAccountID) throw new Error('Required parameter spendingAccountID was null or undefined when calling SpendingAccounts.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'SpendingAccounts.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts/${spendingAccountID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of spending account assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/list-assignments|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.spendingAccountID ID of the spending account.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the spending account assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TSpendingAccountAssignment extends SpendingAccountAssignment = SpendingAccountAssignment>(buyerID: string, listOptions: { spendingAccountID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSpendingAccountAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.ListAssignments')
        const queryParams = utils.buildQueryParams(listOptions, 'SpendingAccounts.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a spending account assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/spending-accounts/save-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param spendingAccountAssignment Required fields: SpendingAccountID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(buyerID: string, spendingAccountAssignment: SpendingAccountAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling SpendingAccounts.SaveAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/spendingaccounts/assignments`, spendingAccountAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SpendingAccounts.As().List() // lists SpendingAccounts using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}