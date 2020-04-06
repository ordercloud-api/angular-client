import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Webhook } from '../models/Webhook';
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
export class OcWebhookService {
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
    * Get a list of webhooks. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/webhooks/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TWebhook extends Webhook = Webhook>(listOptions: { search?: string, searchOn?: Searchable<'Webhooks.List'>, sortBy?: Sortable<'Webhooks.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TWebhook>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Webhooks.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/webhooks`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new webhook. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/webhooks/create|api docs} for more info 
    * 
    * @param webhook Required fields: Name, Url, HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TWebhook extends Webhook>(webhook: Webhook,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TWebhook>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/webhooks`, webhook, {
            headers
        })
    }

   /**
    * Get a single webhook. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/webhooks/get|api docs} for more info 
    * 
    * @param webhookID ID of the webhook.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TWebhook extends Webhook>(webhookID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TWebhook>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!webhookID) throw new Error('Required parameter webhookID was null or undefined when calling Webhooks.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/webhooks/${webhookID}`, {
            headers
        })
    }

   /**
    * Create or update a webhook. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/webhooks/save|api docs} for more info 
    * 
    * @param webhookID ID of the webhook.
    * @param webhook Required fields: Name, Url, HashKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TWebhook extends Webhook>(webhookID: string, webhook: Webhook,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TWebhook>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!webhookID) throw new Error('Required parameter webhookID was null or undefined when calling Webhooks.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/webhooks/${webhookID}`, webhook, {
            headers
        })
    }

   /**
    * Delete a webhook. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/webhooks/delete|api docs} for more info 
    * 
    * @param webhookID ID of the webhook.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(webhookID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!webhookID) throw new Error('Required parameter webhookID was null or undefined when calling Webhooks.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/webhooks/${webhookID}`, {
            headers
        })
    }

   /**
    * Partially update a webhook. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/webhooks/patch|api docs} for more info 
    * 
    * @param webhookID ID of the webhook.
    * @param webhook 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TWebhook extends Webhook>(webhookID: string, webhook: PartialDeep<Webhook>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TWebhook>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!webhookID) throw new Error('Required parameter webhookID was null or undefined when calling Webhooks.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/webhooks/${webhookID}`, webhook, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Webhooks.As().List() // lists Webhooks using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}