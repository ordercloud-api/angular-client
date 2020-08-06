import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { MessageSender } from '../models/MessageSender';
import { MessageSenderAssignment } from '../models/MessageSenderAssignment';
import { PartyType } from '../models/PartyType';
import { MessageCCListenerAssignment } from '../models/MessageCCListenerAssignment';
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
export class OcMessageSenderService {
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
    * Get a list of message senders. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/list|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TMessageSender extends MessageSender = MessageSender>(listOptions: { search?: string, searchOn?: Searchable<'MessageSenders.List'>, sortBy?: Sortable<'MessageSenders.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TMessageSender>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'MessageSenders.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/messagesenders`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new message sender. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/create|api docs} for more info 
    * 
    * @param messageSender Required fields: Name, MessageTypes, URL, SharedKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TMessageSender extends MessageSender>(messageSender: MessageSender,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TMessageSender>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/messagesenders`, messageSender, {
            headers
        })
    }

   /**
    * Get a single message sender. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/get|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TMessageSender extends MessageSender>(messageSenderID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TMessageSender>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!messageSenderID) throw new Error('Required parameter messageSenderID was null or undefined when calling MessageSenders.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/messagesenders/${messageSenderID}`, {
            headers
        })
    }

   /**
    * Create or update a message sender. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/save|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param messageSender Required fields: Name, MessageTypes, URL, SharedKey
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TMessageSender extends MessageSender>(messageSenderID: string, messageSender: MessageSender,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TMessageSender>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!messageSenderID) throw new Error('Required parameter messageSenderID was null or undefined when calling MessageSenders.Save')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/messagesenders/${messageSenderID}`, messageSender, {
            headers
        })
    }

   /**
    * Delete a message sender. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/delete|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(messageSenderID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!messageSenderID) throw new Error('Required parameter messageSenderID was null or undefined when calling MessageSenders.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/messagesenders/${messageSenderID}`, {
            headers
        })
    }

   /**
    * Partially update a message sender. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/patch|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param messageSender 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TMessageSender extends MessageSender>(messageSenderID: string, messageSender: PartialDeep<MessageSender>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TMessageSender>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!messageSenderID) throw new Error('Required parameter messageSenderID was null or undefined when calling MessageSenders.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/messagesenders/${messageSenderID}`, messageSender, {
            headers
        })
    }

   /**
    * Delete a message sender assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/delete-assignment|api docs} for more info 
    * 
    * @param messageSenderID ID of the message sender.
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAssignment(messageSenderID: string, listOptions: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!messageSenderID) throw new Error('Required parameter messageSenderID was null or undefined when calling MessageSenders.DeleteAssignment')
        const queryParams = utils.buildQueryParams(listOptions, 'MessageSenders.DeleteAssignment')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/messagesenders/${messageSenderID}/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of message sender assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/list-assignments|api docs} for more info 
    * 
    * @param listOptions.buyerID ID of the buyer.
    * @param listOptions.messageSenderID ID of the message sender.
    * @param listOptions.userID ID of the user.
    * @param listOptions.userGroupID ID of the user group.
    * @param listOptions.level Level of the message sender assignment. Possible values: User, Group, Company.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.supplierID ID of the supplier.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAssignments<TMessageSenderAssignment extends MessageSenderAssignment = MessageSenderAssignment>(listOptions: { buyerID?: string, messageSenderID?: string, userID?: string, userGroupID?: string, level?: PartyType, page?: number, pageSize?: number, supplierID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TMessageSenderAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'MessageSenders.ListAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/messagesenders/assignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a message sender assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/save-assignment|api docs} for more info 
    * 
    * @param messageSenderAssignment Required fields: MessageSenderID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAssignment(messageSenderAssignment: MessageSenderAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/messagesenders/assignments`, messageSenderAssignment, {
            headers
        })
    }

   /**
    * Get a list of message sender cc listener assignments. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/list-cclistener-assignments|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListCCListenerAssignments<TMessageCCListenerAssignment extends MessageCCListenerAssignment = MessageCCListenerAssignment>(listOptions: { search?: string, searchOn?: Searchable<'MessageSenders.ListCCListenerAssignments'>, sortBy?: Sortable<'MessageSenders.ListCCListenerAssignments'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TMessageCCListenerAssignment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'MessageSenders.ListCCListenerAssignments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/messagesenders/CCListenerAssignments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create or update a message sender cc listener assignment. 
    * Check out the {@link https://ordercloud.io/api-reference/seller/message-senders/save-cclistener-assignment|api docs} for more info 
    * 
    * @param messageCCListenerAssignment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveCCListenerAssignment(messageCCListenerAssignment: MessageCCListenerAssignment,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/messagesenders/CCListenerAssignments`, messageCCListenerAssignment, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * MessageSenders.As().List() // lists MessageSenders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}