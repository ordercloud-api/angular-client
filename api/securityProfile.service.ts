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

import { ListSecurityProfile } from '../model/listSecurityProfile';
import { ListSecurityProfileAssignment } from '../model/listSecurityProfileAssignment';
import { SecurityProfile } from '../model/securityProfile';
import { SecurityProfileAssignment } from '../model/securityProfileAssignment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SecurityProfileService {

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
     * @param securityProfileID ID of the security profile.
     * @param options.buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public DeleteAssignment(securityProfileID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string, observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public DeleteAssignment(securityProfileID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public DeleteAssignment(securityProfileID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public DeleteAssignment(securityProfileID: string, options?: { buyerID?: string, userID?: string, userGroupID?: string, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (securityProfileID === null || securityProfileID === undefined) {
            throw new Error('Required parameter securityProfileID was null or undefined when calling DeleteAssignment.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.buyerID !== undefined && opts.buyerID !== null) {
            queryParameters = queryParameters.set('buyerID', <any>opts.buyerID);
        }
        if (opts.userID !== undefined && opts.userID !== null) {
            queryParameters = queryParameters.set('userID', <any>opts.userID);
        }
        if (opts.userGroupID !== undefined && opts.userGroupID !== null) {
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

        return this.httpClient.delete<any>(`${this.basePath}/securityprofiles/${encodeURIComponent(String(securityProfileID))}/assignments`,
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
     * @param securityProfileID ID of the security profile.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(securityProfileID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<SecurityProfile>;
    public Get(securityProfileID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<SecurityProfile>>;
    public Get(securityProfileID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<SecurityProfile>>;
    public Get(securityProfileID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (securityProfileID === null || securityProfileID === undefined) {
            throw new Error('Required parameter securityProfileID was null or undefined when calling Get.');
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

        return this.httpClient.get<SecurityProfile>(`${this.basePath}/securityprofiles/${encodeURIComponent(String(securityProfileID))}`,
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
   
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListSecurityProfile>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListSecurityProfile>>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListSecurityProfile>>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.search !== undefined && opts.search !== null) {
            queryParameters = queryParameters.set('search', <any>opts.search);
        }
        if (opts.searchOn !== undefined && opts.searchOn !== null) {
            queryParameters = queryParameters.set('searchOn', <any>opts.searchOn);
        }
        if (opts.sortBy !== undefined && opts.sortBy !== null) {
            queryParameters = queryParameters.set('sortBy', <any>opts.sortBy);
        }
        if (opts.page !== undefined && opts.page !== null) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
        if (opts.pageSize !== undefined && opts.pageSize !== null) {
            queryParameters = queryParameters.set('pageSize', <any>opts.pageSize);
        }
        if (opts.filters !== undefined && opts.filters !== null) {
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

        return this.httpClient.get<ListSecurityProfile>(`${this.basePath}/securityprofiles`,
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
     * @param options.buyerID ID of the buyer.
     * @param options.supplierID ID of the supplier.
     * @param options.securityProfileID ID of the security profile.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.commerceRole Commerce role of the security profile assignment. Possible values: Buyer, Seller, Supplier.
     * @param options.level Level of the security profile assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public ListAssignments(options?: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: string, level?: string, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean}): Observable<ListSecurityProfileAssignment>;
    public ListAssignments(options?: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: string, level?: string, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListSecurityProfileAssignment>>;
    public ListAssignments(options?: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: string, level?: string, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListSecurityProfileAssignment>>;
    public ListAssignments(options?: { buyerID?: string, supplierID?: string, securityProfileID?: string, userID?: string, userGroupID?: string, commerceRole?: string, level?: string, page?: number, pageSize?: number, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.buyerID !== undefined && opts.buyerID !== null) {
            queryParameters = queryParameters.set('buyerID', <any>opts.buyerID);
        }
        if (opts.supplierID !== undefined && opts.supplierID !== null) {
            queryParameters = queryParameters.set('supplierID', <any>opts.supplierID);
        }
        if (opts.securityProfileID !== undefined && opts.securityProfileID !== null) {
            queryParameters = queryParameters.set('securityProfileID', <any>opts.securityProfileID);
        }
        if (opts.userID !== undefined && opts.userID !== null) {
            queryParameters = queryParameters.set('userID', <any>opts.userID);
        }
        if (opts.userGroupID !== undefined && opts.userGroupID !== null) {
            queryParameters = queryParameters.set('userGroupID', <any>opts.userGroupID);
        }
        if (opts.commerceRole !== undefined && opts.commerceRole !== null) {
            queryParameters = queryParameters.set('commerceRole', <any>opts.commerceRole);
        }
        if (opts.level !== undefined && opts.level !== null) {
            queryParameters = queryParameters.set('level', <any>opts.level);
        }
        if (opts.page !== undefined && opts.page !== null) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
        if (opts.pageSize !== undefined && opts.pageSize !== null) {
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

        return this.httpClient.get<ListSecurityProfileAssignment>(`${this.basePath}/securityprofiles/assignments`,
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
     * @param securityProfileAssignment 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public SaveAssignment(securityProfileAssignment: SecurityProfileAssignment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public SaveAssignment(securityProfileAssignment: SecurityProfileAssignment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public SaveAssignment(securityProfileAssignment: SecurityProfileAssignment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public SaveAssignment(securityProfileAssignment: SecurityProfileAssignment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (securityProfileAssignment === null || securityProfileAssignment === undefined) {
            throw new Error('Required parameter securityProfileAssignment was null or undefined when calling SaveAssignment.');
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

        return this.httpClient.post<any>(`${this.basePath}/securityprofiles/assignments`,
            securityProfileAssignment,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
