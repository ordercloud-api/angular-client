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

import { AccessToken } from '../model/accessToken';
import { ImpersonateTokenRequest } from '../model/impersonateTokenRequest';
import { ListUser } from '../model/listUser';
import { User } from '../model/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SupplierUserService {

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
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(supplierID: string, userID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(supplierID: string, userID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(supplierID: string, userID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(supplierID: string, userID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplierID === null || supplierID === undefined) {
            throw new Error('Required parameter supplierID was null or undefined when calling Delete.');
        }
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling Delete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}/users/${encodeURIComponent(String(userID))}`,
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
     * @param supplierID ID of the supplier.
     * @param user 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(supplierID: string, user: User, options?: { observe?: 'body', reportProgress?: boolean}): Observable<User>;
    public Create(supplierID: string, user: User, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<User>>;
    public Create(supplierID: string, user: User, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<User>>;
    public Create(supplierID: string, user: User, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplierID === null || supplierID === undefined) {
            throw new Error('Required parameter supplierID was null or undefined when calling Create.');
        }
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling Create.');
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

        return this.httpClient.post<User>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}/users`,
            user,
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
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(supplierID: string, userID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<User>;
    public Get(supplierID: string, userID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<User>>;
    public Get(supplierID: string, userID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<User>>;
    public Get(supplierID: string, userID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplierID === null || supplierID === undefined) {
            throw new Error('Required parameter supplierID was null or undefined when calling Get.');
        }
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling Get.');
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

        return this.httpClient.get<User>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}/users/${encodeURIComponent(String(userID))}`,
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
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     * @param tokenRequest 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public GetAccessToken(supplierID: string, userID: string, tokenRequest: ImpersonateTokenRequest, options?: { observe?: 'body', reportProgress?: boolean}): Observable<AccessToken>;
    public GetAccessToken(supplierID: string, userID: string, tokenRequest: ImpersonateTokenRequest, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<AccessToken>>;
    public GetAccessToken(supplierID: string, userID: string, tokenRequest: ImpersonateTokenRequest, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<AccessToken>>;
    public GetAccessToken(supplierID: string, userID: string, tokenRequest: ImpersonateTokenRequest, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplierID === null || supplierID === undefined) {
            throw new Error('Required parameter supplierID was null or undefined when calling GetAccessToken.');
        }
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling GetAccessToken.');
        }
        if (tokenRequest === null || tokenRequest === undefined) {
            throw new Error('Required parameter tokenRequest was null or undefined when calling GetAccessToken.');
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

        return this.httpClient.post<AccessToken>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}/users/${encodeURIComponent(String(userID))}/accesstoken`,
            tokenRequest,
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
     * @param supplierID ID of the supplier.
     * @param options.userGroupID ID of the user group.
     * @param options.search Search of the supplier user.
     * @param options.searchOn Search on of the supplier user.
     * @param options.sortBy Sort by of the supplier user.
     * @param options.page Page of the supplier user.
     * @param options.pageSize Page size of the supplier user.
     * @param options.filters Filters of the supplier user.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public List(supplierID: string, options?: { userGroupID?: string, search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'body', reportProgress?: boolean}): Observable<ListUser>;
    public List(supplierID: string, options?: { userGroupID?: string, search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListUser>>;
    public List(supplierID: string, options?: { userGroupID?: string, search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListUser>>;
    public List(supplierID: string, options?: { userGroupID?: string, search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplierID === null || supplierID === undefined) {
            throw new Error('Required parameter supplierID was null or undefined when calling List.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.userGroupID !== undefined) {
            queryParameters = queryParameters.set('userGroupID', <any>opts.userGroupID);
        }
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

        return this.httpClient.get<ListUser>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}/users`,
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
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     * @param user 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(supplierID: string, userID: string, user: User, options?: { observe?: 'body', reportProgress?: boolean}): Observable<User>;
    public Patch(supplierID: string, userID: string, user: User, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<User>>;
    public Patch(supplierID: string, userID: string, user: User, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<User>>;
    public Patch(supplierID: string, userID: string, user: User, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplierID === null || supplierID === undefined) {
            throw new Error('Required parameter supplierID was null or undefined when calling Patch.');
        }
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling Patch.');
        }
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling Patch.');
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

        return this.httpClient.patch<User>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}/users/${encodeURIComponent(String(userID))}`,
            user,
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
     * @param supplierID ID of the supplier.
     * @param userID ID of the user.
     * @param user 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Update(supplierID: string, userID: string, user: User, options?: { observe?: 'body', reportProgress?: boolean}): Observable<User>;
    public Update(supplierID: string, userID: string, user: User, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<User>>;
    public Update(supplierID: string, userID: string, user: User, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<User>>;
    public Update(supplierID: string, userID: string, user: User, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplierID === null || supplierID === undefined) {
            throw new Error('Required parameter supplierID was null or undefined when calling Update.');
        }
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling Update.');
        }
        if (user === null || user === undefined) {
            throw new Error('Required parameter user was null or undefined when calling Update.');
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

        return this.httpClient.put<User>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}/users/${encodeURIComponent(String(userID))}`,
            user,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
