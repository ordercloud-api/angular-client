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

import { ListUserGroup } from '../model/listUserGroup';
import { ListUserGroupAssignment } from '../model/listUserGroupAssignment';
import { UserGroup } from '../model/userGroup';
import { UserGroupAssignment } from '../model/userGroupAssignment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UserGroupService {

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
     * @param userGroupID ID of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(buyerID: string, userGroupID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(buyerID: string, userGroupID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(buyerID: string, userGroupID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(buyerID: string, userGroupID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (userGroupID === null || userGroupID === undefined) {
            throw new Error('Required parameter userGroupID was null or undefined when calling Delete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups/${encodeURIComponent(String(userGroupID))}`,
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
     * @param group 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(buyerID: string, group: UserGroup, options?: { observe?: 'body', reportProgress?: boolean}): Observable<UserGroup>;
    public Create(buyerID: string, group: UserGroup, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<UserGroup>>;
    public Create(buyerID: string, group: UserGroup, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<UserGroup>>;
    public Create(buyerID: string, group: UserGroup, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (group === null || group === undefined) {
            throw new Error('Required parameter group was null or undefined when calling Create.');
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

        return this.httpClient.post<UserGroup>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups`,
            group,
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
     * @param userGroupID ID of the user group.
     * @param userID ID of the user.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public DeleteUserAssignment(buyerID: string, userGroupID: string, userID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public DeleteUserAssignment(buyerID: string, userGroupID: string, userID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public DeleteUserAssignment(buyerID: string, userGroupID: string, userID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public DeleteUserAssignment(buyerID: string, userGroupID: string, userID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling DeleteUserAssignment.');
        }
        if (userGroupID === null || userGroupID === undefined) {
            throw new Error('Required parameter userGroupID was null or undefined when calling DeleteUserAssignment.');
        }
        if (userID === null || userID === undefined) {
            throw new Error('Required parameter userID was null or undefined when calling DeleteUserAssignment.');
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

        return this.httpClient.delete<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups/${encodeURIComponent(String(userGroupID))}/assignments/${encodeURIComponent(String(userID))}`,
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
     * @param userGroupID ID of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(buyerID: string, userGroupID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<UserGroup>;
    public Get(buyerID: string, userGroupID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<UserGroup>>;
    public Get(buyerID: string, userGroupID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<UserGroup>>;
    public Get(buyerID: string, userGroupID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (userGroupID === null || userGroupID === undefined) {
            throw new Error('Required parameter userGroupID was null or undefined when calling Get.');
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

        return this.httpClient.get<UserGroup>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups/${encodeURIComponent(String(userGroupID))}`,
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
     * @param options.search Search of the user group.
     * @param options.searchOn Search on of the user group.
     * @param options.sortBy Sort by of the user group.
     * @param options.page Page of the user group.
     * @param options.pageSize Page size of the user group.
     * @param options.filters Filters of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public List(buyerID: string, options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'body', reportProgress?: boolean}): Observable<ListUserGroup>;
    public List(buyerID: string, options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListUserGroup>>;
    public List(buyerID: string, options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListUserGroup>>;
    public List(buyerID: string, options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: any, reportProgress?: boolean}): Observable<any> {
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

        return this.httpClient.get<ListUserGroup>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups`,
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
     * @param options.userGroupID ID of the user group.
     * @param options.userID ID of the user.
     * @param options.page Page of the user group.
     * @param options.pageSize Page size of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public ListUserAssignments(buyerID: string, options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean}): Observable<ListUserGroupAssignment>;
    public ListUserAssignments(buyerID: string, options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListUserGroupAssignment>>;
    public ListUserAssignments(buyerID: string, options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListUserGroupAssignment>>;
    public ListUserAssignments(buyerID: string, options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling ListUserAssignments.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.userGroupID !== undefined) {
            queryParameters = queryParameters.set('userGroupID', <any>opts.userGroupID);
        }
        if (opts.userID !== undefined) {
            queryParameters = queryParameters.set('userID', <any>opts.userID);
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

        return this.httpClient.get<ListUserGroupAssignment>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups/assignments`,
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
     * @param userGroupID ID of the user group.
     * @param group 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(buyerID: string, userGroupID: string, group: UserGroup, options?: { observe?: 'body', reportProgress?: boolean}): Observable<UserGroup>;
    public Patch(buyerID: string, userGroupID: string, group: UserGroup, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<UserGroup>>;
    public Patch(buyerID: string, userGroupID: string, group: UserGroup, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<UserGroup>>;
    public Patch(buyerID: string, userGroupID: string, group: UserGroup, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (userGroupID === null || userGroupID === undefined) {
            throw new Error('Required parameter userGroupID was null or undefined when calling Patch.');
        }
        if (group === null || group === undefined) {
            throw new Error('Required parameter group was null or undefined when calling Patch.');
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

        return this.httpClient.patch<UserGroup>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups/${encodeURIComponent(String(userGroupID))}`,
            group,
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
     * @param userGroupAssignment 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public SaveUserAssignment(buyerID: string, userGroupAssignment: UserGroupAssignment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public SaveUserAssignment(buyerID: string, userGroupAssignment: UserGroupAssignment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public SaveUserAssignment(buyerID: string, userGroupAssignment: UserGroupAssignment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public SaveUserAssignment(buyerID: string, userGroupAssignment: UserGroupAssignment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling SaveUserAssignment.');
        }
        if (userGroupAssignment === null || userGroupAssignment === undefined) {
            throw new Error('Required parameter userGroupAssignment was null or undefined when calling SaveUserAssignment.');
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

        return this.httpClient.post<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups/assignments`,
            userGroupAssignment,
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
     * @param userGroupID ID of the user group.
     * @param group 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Update(buyerID: string, userGroupID: string, group: UserGroup, options?: { observe?: 'body', reportProgress?: boolean}): Observable<UserGroup>;
    public Update(buyerID: string, userGroupID: string, group: UserGroup, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<UserGroup>>;
    public Update(buyerID: string, userGroupID: string, group: UserGroup, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<UserGroup>>;
    public Update(buyerID: string, userGroupID: string, group: UserGroup, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (userGroupID === null || userGroupID === undefined) {
            throw new Error('Required parameter userGroupID was null or undefined when calling Update.');
        }
        if (group === null || group === undefined) {
            throw new Error('Required parameter group was null or undefined when calling Update.');
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

        return this.httpClient.put<UserGroup>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/usergroups/${encodeURIComponent(String(userGroupID))}`,
            group,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
