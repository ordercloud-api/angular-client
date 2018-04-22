/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';
import { TokenService }                                      from './token.service';

import { CreditCard } from '../model/creditCard';
import { CreditCardAssignment } from '../model/creditCardAssignment';
import { ListCreditCard } from '../model/listCreditCard';
import { ListCreditCardAssignment } from '../model/listCreditCardAssignment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CreditCardService {

    protected basePath = 'https://api.ordercloud.io/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    private impersonating = false;

    constructor(protected httpClient: HttpClient, protected tokens: TokenService, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @description enable impersonation by calling this prior to any of the other methods in this service
     * 
     */
    public As(): any {
        this.impersonating = true;
        return this;
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(buyerID: string, creditCardID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(buyerID: string, creditCardID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(buyerID: string, creditCardID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(buyerID: string, creditCardID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling Delete.');
        }
        if (creditCardID === null || creditCardID === undefined) {
            throw new Error('Required parameter creditCardID was null or undefined when calling Delete.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards/${encodeURIComponent(String(creditCardID))}`,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param card 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(buyerID: string, card: CreditCard, options?: { observe?: 'body', reportProgress?: boolean}): Observable<CreditCard>;
    public Create(buyerID: string, card: CreditCard, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<CreditCard>>;
    public Create(buyerID: string, card: CreditCard, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<CreditCard>>;
    public Create(buyerID: string, card: CreditCard, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling Create.');
        }
        if (card === null || card === undefined) {
            throw new Error('Required parameter card was null or undefined when calling Create.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<CreditCard>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards`,
            card,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public DeleteAssignment(buyerID: string, creditCardID: string, options?: { userID?: string, userGroupID?: string, observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public DeleteAssignment(buyerID: string, creditCardID: string, options?: { userID?: string, userGroupID?: string, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public DeleteAssignment(buyerID: string, creditCardID: string, options?: { userID?: string, userGroupID?: string, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public DeleteAssignment(buyerID: string, creditCardID: string, options?: { userID?: string, userGroupID?: string, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling DeleteAssignment.');
        }
        if (creditCardID === null || creditCardID === undefined) {
            throw new Error('Required parameter creditCardID was null or undefined when calling DeleteAssignment.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.userID !== undefined) {
            queryParameters = queryParameters.set('userID', <any>opts.userID);
        }
        if (opts.userGroupID !== undefined) {
            queryParameters = queryParameters.set('userGroupID', <any>opts.userGroupID);
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];

        return this.httpClient.delete<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards/${encodeURIComponent(String(creditCardID))}/assignments`,
            {
                params: queryParameters,
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(buyerID: string, creditCardID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<CreditCard>;
    public Get(buyerID: string, creditCardID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<CreditCard>>;
    public Get(buyerID: string, creditCardID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<CreditCard>>;
    public Get(buyerID: string, creditCardID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling Get.');
        }
        if (creditCardID === null || creditCardID === undefined) {
            throw new Error('Required parameter creditCardID was null or undefined when calling Get.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];

        return this.httpClient.get<CreditCard>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards/${encodeURIComponent(String(creditCardID))}`,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param options.search Search of the credit card.
     * @param options.searchOn Search on of the credit card.
     * @param options.sortBy Sort by of the credit card.
     * @param options.page Page of the credit card.
     * @param options.pageSize Page size of the credit card.
     * @param options.filters Filters of the credit card.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public List(buyerID: string, options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListCreditCard>;
    public List(buyerID: string, options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListCreditCard>>;
    public List(buyerID: string, options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListCreditCard>>;
    public List(buyerID: string, options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling List.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.search !== undefined) {
            queryParameters = queryParameters.set('search', <any>opts.search);
        }
        if (opts.searchOn) {
            queryParameters = queryParameters.set('searchOn', opts.searchOn.join(COLLECTION_FORMATS['csv']));
        }
        if (opts.sortBy) {
            queryParameters = queryParameters.set('sortBy', opts.sortBy.join(COLLECTION_FORMATS['csv']));
        }
        if (opts.page !== undefined) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
        if (opts.pageSize !== undefined) {
            queryParameters = queryParameters.set('pageSize', <any>opts.pageSize);
        }
        if (opts.filters !== undefined) {
            queryParameters = this.configuration.unwrapFilters(opts.filters, queryParameters);
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];

        return this.httpClient.get<ListCreditCard>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards`,
            {
                params: queryParameters,
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param options.creditCardID ID of the credit card.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the credit card.
     * @param options.page Page of the credit card.
     * @param options.pageSize Page size of the credit card.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public ListAssignments(buyerID: string, options?: { creditCardID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean}): Observable<ListCreditCardAssignment>;
    public ListAssignments(buyerID: string, options?: { creditCardID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListCreditCardAssignment>>;
    public ListAssignments(buyerID: string, options?: { creditCardID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListCreditCardAssignment>>;
    public ListAssignments(buyerID: string, options?: { creditCardID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling ListAssignments.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.creditCardID !== undefined) {
            queryParameters = queryParameters.set('creditCardID', <any>opts.creditCardID);
        }
        if (opts.userID !== undefined) {
            queryParameters = queryParameters.set('userID', <any>opts.userID);
        }
        if (opts.userGroupID !== undefined) {
            queryParameters = queryParameters.set('userGroupID', <any>opts.userGroupID);
        }
        if (opts.level !== undefined) {
            queryParameters = queryParameters.set('level', <any>opts.level);
        }
        if (opts.page !== undefined) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
        if (opts.pageSize !== undefined) {
            queryParameters = queryParameters.set('pageSize', <any>opts.pageSize);
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];

        return this.httpClient.get<ListCreditCardAssignment>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards/assignments`,
            {
                params: queryParameters,
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     * @param card 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(buyerID: string, creditCardID: string, card: CreditCard, options?: { observe?: 'body', reportProgress?: boolean}): Observable<CreditCard>;
    public Patch(buyerID: string, creditCardID: string, card: CreditCard, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<CreditCard>>;
    public Patch(buyerID: string, creditCardID: string, card: CreditCard, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<CreditCard>>;
    public Patch(buyerID: string, creditCardID: string, card: CreditCard, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling Patch.');
        }
        if (creditCardID === null || creditCardID === undefined) {
            throw new Error('Required parameter creditCardID was null or undefined when calling Patch.');
        }
        if (card === null || card === undefined) {
            throw new Error('Required parameter card was null or undefined when calling Patch.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.patch<CreditCard>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards/${encodeURIComponent(String(creditCardID))}`,
            card,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param assignment 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public SaveAssignment(buyerID: string, assignment: CreditCardAssignment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public SaveAssignment(buyerID: string, assignment: CreditCardAssignment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public SaveAssignment(buyerID: string, assignment: CreditCardAssignment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public SaveAssignment(buyerID: string, assignment: CreditCardAssignment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling SaveAssignment.');
        }
        if (assignment === null || assignment === undefined) {
            throw new Error('Required parameter assignment was null or undefined when calling SaveAssignment.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards/assignments`,
            assignment,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
    /**
     * 
     * 
     * @param buyerID ID of the buyer.
     * @param creditCardID ID of the credit card.
     * @param card 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Update(buyerID: string, creditCardID: string, card: CreditCard, options?: { observe?: 'body', reportProgress?: boolean}): Observable<CreditCard>;
    public Update(buyerID: string, creditCardID: string, card: CreditCard, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<CreditCard>>;
    public Update(buyerID: string, creditCardID: string, card: CreditCard, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<CreditCard>>;
    public Update(buyerID: string, creditCardID: string, card: CreditCard, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling Update.');
        }
        if (creditCardID === null || creditCardID === undefined) {
            throw new Error('Required parameter creditCardID was null or undefined when calling Update.');
        }
        if (card === null || card === undefined) {
            throw new Error('Required parameter card was null or undefined when calling Update.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.tokens.GetImpersonation() : this.tokens.GetAccess();
        this.impersonating = false;
        headers = headers.set('Authorization', 'Bearer ' + accessToken);

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json',
            'text/plain; charset=utf-8'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<CreditCard>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/creditcards/${encodeURIComponent(String(creditCardID))}`,
            card,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
