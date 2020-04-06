import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { CreditCard } from '../models/CreditCard';
import { CreditCardAssignment } from '../models/CreditCardAssignment';
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
export class OcCreditCardService {
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
    * Get a list of credit cards. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/list|api docs} for more info 
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
    public List<TCreditCard extends CreditCard = CreditCard>(buyerID: string, listOptions: { search?: string, searchOn?: Searchable<'CreditCards.List'>, sortBy?: Sortable<'CreditCards.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCreditCard>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.List')
        const queryParams = utils.buildQueryParams(listOptions, 'CreditCards.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/creditcards`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new credit card. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/create|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param creditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TCreditCard extends CreditCard>(buyerID: string, creditCard: CreditCard,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/creditcards`, creditCard, {
            headers
        })
    }

   /**
    * Get a single credit card. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/get|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TCreditCard extends CreditCard>(buyerID: string, creditCardID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.Get')
        if(!creditCardID) throw new Error('Required parameter creditCardID was null or undefined when calling CreditCards.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/creditcards/${creditCardID}`, {
            headers
        })
    }

   /**
    * Create or update a credit card. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/save|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param creditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TCreditCard extends CreditCard>(buyerID: string, creditCardID: string, creditCard: CreditCard,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.Save')
        if(!creditCardID) throw new Error('Required parameter creditCardID was null or undefined when calling CreditCards.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/buyers/${buyerID}/creditcards/${creditCardID}`, creditCard, {
            headers
        })
    }

   /**
    * Delete a credit card. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/delete|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(buyerID: string, creditCardID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.Delete')
        if(!creditCardID) throw new Error('Required parameter creditCardID was null or undefined when calling CreditCards.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/creditcards/${creditCardID}`, {
            headers
        })
    }

   /**
    * Partially update a credit card. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/patch|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param creditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TCreditCard extends CreditCard>(buyerID: string, creditCardID: string, creditCard: PartialDeep<CreditCard>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.Patch')
        if(!creditCardID) throw new Error('Required parameter creditCardID was null or undefined when calling CreditCards.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/buyers/${buyerID}/creditcards/${creditCardID}`, creditCard, {
            headers
        })
    }

   /**
    * Delete a credit card assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/delete-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param creditCardID ID of the credit card.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(buyerID: string, creditCardID: string, listOptions: { userID?: string, userGroupID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.DeleteAssignment')
        if(!creditCardID) throw new Error('Required parameter creditCardID was null or undefined when calling CreditCards.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'CreditCards.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/buyers/${buyerID}/creditcards/${creditCardID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of credit card assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/list-assignments|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param listOptions.creditCardID ID of the credit card.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the credit card assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TCreditCardAssignment extends CreditCardAssignment = CreditCardAssignment>(buyerID: string, listOptions: { creditCardID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCreditCardAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.ListAssignments')
        const queryParams = utils.buildQueryParams(listOptions, 'CreditCards.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/buyers/${buyerID}/creditcards/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a credit card assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/buyers/credit-cards/save-assignment|api docs} for more info 
    * 
    * @param buyerID ID of the buyer.
    * @param creditCardAssignment Required fields: CreditCardID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(buyerID: string, creditCardAssignment: CreditCardAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!buyerID) throw new Error('Required parameter buyerID was null or undefined when calling CreditCards.SaveAssignment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/buyers/${buyerID}/creditcards/assignments`, creditCardAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * CreditCards.As().List() // lists CreditCards using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}