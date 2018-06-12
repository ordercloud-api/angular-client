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

import { Observable }                                        from 'rxjs';
import { TokenService }                                      from './token.service';

import { ListUserGroup } from '../model/listUserGroup';
import { ListUserGroupAssignment } from '../model/listUserGroupAssignment';
import { UserGroup } from '../model/userGroup';
import { UserGroupAssignment } from '../model/userGroupAssignment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AdminUserGroupService {

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
     * @param userGroupID ID of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(userGroupID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(userGroupID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(userGroupID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(userGroupID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
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

        return this.httpClient.delete<any>(`${this.basePath}/usergroups/${encodeURIComponent(String(userGroupID))}`,
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
     * @param userGroup 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(userGroup: UserGroup, options?: { observe?: 'body', reportProgress?: boolean}): Observable<UserGroup>;
    public Create(userGroup: UserGroup, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<UserGroup>>;
    public Create(userGroup: UserGroup, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<UserGroup>>;
    public Create(userGroup: UserGroup, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (userGroup === null || userGroup === undefined) {
            throw new Error('Required parameter userGroup was null or undefined when calling Create.');
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

        return this.httpClient.post<UserGroup>(`${this.basePath}/usergroups`,
            userGroup,
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
     * @param userGroupID ID of the user group.
     * @param userID ID of the user.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public DeleteUserAssignment(userGroupID: string, userID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public DeleteUserAssignment(userGroupID: string, userID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public DeleteUserAssignment(userGroupID: string, userID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public DeleteUserAssignment(userGroupID: string, userID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
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

        return this.httpClient.delete<any>(`${this.basePath}/usergroups/${encodeURIComponent(String(userGroupID))}/assignments/${encodeURIComponent(String(userID))}`,
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
     * @param userGroupID ID of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(userGroupID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<UserGroup>;
    public Get(userGroupID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<UserGroup>>;
    public Get(userGroupID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<UserGroup>>;
    public Get(userGroupID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
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

        return this.httpClient.get<UserGroup>(`${this.basePath}/usergroups/${encodeURIComponent(String(userGroupID))}`,
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
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListUserGroup>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListUserGroup>>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListUserGroup>>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.search !== undefined) {
            queryParameters = queryParameters.set('search', <any>opts.search);
        }
        if (opts.search === null) {
            throw new Error('Parameter search was null when calling List. Null values are not allowed');
        }
        if (opts.searchOn !== undefined) {
            queryParameters = queryParameters.set('searchOn', <any>opts.searchOn);
        }
        if (opts.searchOn === null) {
            throw new Error('Parameter searchOn was null when calling List. Null values are not allowed');
        }
        if (opts.sortBy !== undefined) {
            queryParameters = queryParameters.set('sortBy', <any>opts.sortBy);
        }
        if (opts.sortBy === null) {
            throw new Error('Parameter sortBy was null when calling List. Null values are not allowed');
        }
        if (opts.page !== undefined) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
        if (opts.page === null) {
            throw new Error('Parameter page was null when calling List. Null values are not allowed');
        }
        if (opts.pageSize !== undefined) {
            queryParameters = queryParameters.set('pageSize', <any>opts.pageSize);
        }
        if (opts.pageSize === null) {
            throw new Error('Parameter pageSize was null when calling List. Null values are not allowed');
        }
        if (opts.filters !== undefined) {
            queryParameters = this.configuration.unwrapFilters(opts.filters, queryParameters, 'List');
        }
        if (opts.filters === null) {
            throw new Error('Parameter filters was null when calling List. Null values are not allowed');
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

        return this.httpClient.get<ListUserGroup>(`${this.basePath}/usergroups`,
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
     * @param options.userGroupID ID of the user group.
     * @param options.userID ID of the user.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public ListUserAssignments(options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean}): Observable<ListUserGroupAssignment>;
    public ListUserAssignments(options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListUserGroupAssignment>>;
    public ListUserAssignments(options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListUserGroupAssignment>>;
    public ListUserAssignments(options?: { userGroupID?: string, userID?: string, page?: number, pageSize?: number, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.userGroupID !== undefined) {
            queryParameters = queryParameters.set('userGroupID', <any>opts.userGroupID);
        }
        if (opts.userGroupID === null) {
            throw new Error('Parameter userGroupID was null when calling ListUserAssignments. Null values are not allowed');
        }
        if (opts.userID !== undefined) {
            queryParameters = queryParameters.set('userID', <any>opts.userID);
        }
        if (opts.userID === null) {
            throw new Error('Parameter userID was null when calling ListUserAssignments. Null values are not allowed');
        }
        if (opts.page !== undefined) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
        if (opts.page === null) {
            throw new Error('Parameter page was null when calling ListUserAssignments. Null values are not allowed');
        }
        if (opts.pageSize !== undefined) {
            queryParameters = queryParameters.set('pageSize', <any>opts.pageSize);
        }
        if (opts.pageSize === null) {
            throw new Error('Parameter pageSize was null when calling ListUserAssignments. Null values are not allowed');
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

        return this.httpClient.get<ListUserGroupAssignment>(`${this.basePath}/usergroups/assignments`,
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
     * @param userGroupID ID of the user group.
     * @param partialUserGroup 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(userGroupID: string, partialUserGroup: UserGroup, options?: { observe?: 'body', reportProgress?: boolean}): Observable<UserGroup>;
    public Patch(userGroupID: string, partialUserGroup: UserGroup, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<UserGroup>>;
    public Patch(userGroupID: string, partialUserGroup: UserGroup, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<UserGroup>>;
    public Patch(userGroupID: string, partialUserGroup: UserGroup, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (userGroupID === null || userGroupID === undefined) {
            throw new Error('Required parameter userGroupID was null or undefined when calling Patch.');
        }
        if (partialUserGroup === null || partialUserGroup === undefined) {
            throw new Error('Required parameter partialUserGroup was null or undefined when calling Patch.');
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

        return this.httpClient.patch<UserGroup>(`${this.basePath}/usergroups/${encodeURIComponent(String(userGroupID))}`,
            partialUserGroup,
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
     * @param userGroupID ID of the user group.
     * @param userGroup 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Save(userGroupID: string, userGroup: UserGroup, options?: { observe?: 'body', reportProgress?: boolean}): Observable<UserGroup>;
    public Save(userGroupID: string, userGroup: UserGroup, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<UserGroup>>;
    public Save(userGroupID: string, userGroup: UserGroup, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<UserGroup>>;
    public Save(userGroupID: string, userGroup: UserGroup, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (userGroupID === null || userGroupID === undefined) {
            throw new Error('Required parameter userGroupID was null or undefined when calling Save.');
        }
        if (userGroup === null || userGroup === undefined) {
            throw new Error('Required parameter userGroup was null or undefined when calling Save.');
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

        return this.httpClient.put<UserGroup>(`${this.basePath}/usergroups/${encodeURIComponent(String(userGroupID))}`,
            userGroup,
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
     * @param userGroupAssignment 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public SaveUserAssignment(userGroupAssignment: UserGroupAssignment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public SaveUserAssignment(userGroupAssignment: UserGroupAssignment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public SaveUserAssignment(userGroupAssignment: UserGroupAssignment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public SaveUserAssignment(userGroupAssignment: UserGroupAssignment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
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

        return this.httpClient.post<any>(`${this.basePath}/usergroups/assignments`,
            userGroupAssignment,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
