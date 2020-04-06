import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { ApprovalRule } from '../models/ApprovalRule';
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
export class OcApprovalRulService {
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
    * Get a list of approval rules. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/list|api docs} for more info 
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
    public List<TApprovalRule extends ApprovalRule = ApprovalRule>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'ApprovalRules.List'>, sortBy?: Sortable<'ApprovalRules.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TApprovalRule>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling ApprovalRules.List')
        const queryParams = utils.buildQueryParams(listOptions, 'ApprovalRules.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/approvalrules`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new approval rule. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRule Required fields: ApprovingGroupID, RuleExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRule: ApprovalRule,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TApprovalRule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling ApprovalRules.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/approvalrules`, approvalRule, {
            headers
        })
    }

   /**
    * Get a single approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TApprovalRule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling ApprovalRules.Get')
        if(!approvalRuleID) throw new Error('Required parameter approvalRuleID was null or undefined when calling ApprovalRules.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/approvalrules/${approvalRuleID}`, {
            headers
        })
    }

   /**
    * Create or update an approval rule. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param approvalRule Required fields: ApprovingGroupID, RuleExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string, approvalRule: ApprovalRule,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TApprovalRule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling ApprovalRules.Save')
        if(!approvalRuleID) throw new Error('Required parameter approvalRuleID was null or undefined when calling ApprovalRules.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/buyers/${buyerID}/approvalrules/${approvalRuleID}`, approvalRule, {
            headers
        })
    }

   /**
    * Delete an approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(buyerID: string, approvalRuleID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling ApprovalRules.Delete')
        if(!approvalRuleID) throw new Error('Required parameter approvalRuleID was null or undefined when calling ApprovalRules.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/approvalrules/${approvalRuleID}`, {
            headers
        })
    }

   /**
    * Partially update an approval rule. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/approval-rules/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param approvalRuleID ID of the approval rule.
    * @param approvalRule 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TApprovalRule extends ApprovalRule>(buyerID: string, approvalRuleID: string, approvalRule: PartialDeep<ApprovalRule>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TApprovalRule>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling ApprovalRules.Patch')
        if(!approvalRuleID) throw new Error('Required parameter approvalRuleID was null or undefined when calling ApprovalRules.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/buyers/${buyerID}/approvalrules/${approvalRuleID}`, approvalRule, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ApprovalRules.As().List() // lists ApprovalRules using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}