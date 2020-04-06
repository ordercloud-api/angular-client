import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Promotion } from '../models/Promotion';
import { PromotionAssignment } from '../models/PromotionAssignment';
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
export class OcPromotionService {
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
    * Get a list of promotions. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TPromotion extends Promotion = Promotion>(listOptions: { search?: string, searchOn?: Searchable<'Promotions.List'>, sortBy?: Sortable<'Promotions.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Promotions.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/promotions`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new promotion. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/create|api docs} for more info 
    * 
    * @param promotion Required fields: Code, EligibleExpression, ValueExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TPromotion extends Promotion>(promotion: Promotion,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/promotions`, promotion, {
            headers
        })
    }

   /**
    * Get a single promotion. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/get|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TPromotion extends Promotion>(promotionID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!promotionID) throw new Error('Required parameter promotionID was null or undefined when calling Promotions.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/promotions/${promotionID}`, {
            headers
        })
    }

   /**
    * Create or update a promotion. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/save|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param promotion Required fields: Code, EligibleExpression, ValueExpression
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TPromotion extends Promotion>(promotionID: string, promotion: Promotion,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!promotionID) throw new Error('Required parameter promotionID was null or undefined when calling Promotions.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/promotions/${promotionID}`, promotion, {
            headers
        })
    }

   /**
    * Delete a promotion. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/delete|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(promotionID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!promotionID) throw new Error('Required parameter promotionID was null or undefined when calling Promotions.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/promotions/${promotionID}`, {
            headers
        })
    }

   /**
    * Partially update a promotion. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/patch|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param promotion 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TPromotion extends Promotion>(promotionID: string, promotion: PartialDeep<Promotion>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!promotionID) throw new Error('Required parameter promotionID was null or undefined when calling Promotions.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/promotions/${promotionID}`, promotion, {
            headers
        })
    }

   /**
    * Delete a promotion assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/delete-assignment|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(promotionID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!promotionID) throw new Error('Required parameter promotionID was null or undefined when calling Promotions.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'Promotions.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/promotions/${promotionID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of promotion assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/list-assignments|api docs} for more info 
    * 
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.promotionID ID of the promotion.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the promotion assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TPromotionAssignment extends PromotionAssignment = PromotionAssignment>(listOptions: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TPromotionAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Promotions.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/promotions/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a promotion assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/promotions/save-assignment|api docs} for more info 
    * 
    * @param promotionAssignment Required fields: PromotionID, BuyerID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(promotionAssignment: PromotionAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/promotions/assignments`, promotionAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Promotions.As().List() // lists Promotions using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}