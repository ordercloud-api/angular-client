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

import { CostCenter } from '../model/costCenter';
import { CostCenterAssignment } from '../model/costCenterAssignment';
import { ListCostCenter } from '../model/listCostCenter';
import { ListCostCenterAssignment } from '../model/listCostCenterAssignment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CostCenterService {

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
     * @param costCenterID ID of the cost center.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(buyerID: string, costCenterID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(buyerID: string, costCenterID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(buyerID: string, costCenterID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(buyerID: string, costCenterID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (costCenterID === null || costCenterID === undefined) {
            throw new Error('Required parameter costCenterID was null or undefined when calling Delete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters/${encodeURIComponent(String(costCenterID))}`,
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
     * @param costCenter 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(buyerID: string, costCenter: CostCenter, options?: { observe?: 'body', reportProgress?: boolean}): Observable<CostCenter>;
    public Create(buyerID: string, costCenter: CostCenter, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<CostCenter>>;
    public Create(buyerID: string, costCenter: CostCenter, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<CostCenter>>;
    public Create(buyerID: string, costCenter: CostCenter, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (costCenter === null || costCenter === undefined) {
            throw new Error('Required parameter costCenter was null or undefined when calling Create.');
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

        return this.httpClient.post<CostCenter>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters`,
            costCenter,
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
     * @param costCenterID ID of the cost center.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public DeleteAssignment(buyerID: string, costCenterID: string, options?: { userID?: string, userGroupID?: string, observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public DeleteAssignment(buyerID: string, costCenterID: string, options?: { userID?: string, userGroupID?: string, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public DeleteAssignment(buyerID: string, costCenterID: string, options?: { userID?: string, userGroupID?: string, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public DeleteAssignment(buyerID: string, costCenterID: string, options?: { userID?: string, userGroupID?: string, observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (costCenterID === null || costCenterID === undefined) {
            throw new Error('Required parameter costCenterID was null or undefined when calling DeleteAssignment.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.userID !== undefined) {
            queryParameters = queryParameters.set('userID', <any>opts.userID);
        }
        if (opts.userID === null) {
            throw new Error('Parameter userID was null when calling DeleteAssignment. Null values are not allowed');
        }
        if (opts.userGroupID !== undefined) {
            queryParameters = queryParameters.set('userGroupID', <any>opts.userGroupID);
        }
        if (opts.userGroupID === null) {
            throw new Error('Parameter userGroupID was null when calling DeleteAssignment. Null values are not allowed');
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

        return this.httpClient.delete<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters/${encodeURIComponent(String(costCenterID))}/assignments`,
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
     * @param costCenterID ID of the cost center.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(buyerID: string, costCenterID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<CostCenter>;
    public Get(buyerID: string, costCenterID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<CostCenter>>;
    public Get(buyerID: string, costCenterID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<CostCenter>>;
    public Get(buyerID: string, costCenterID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (costCenterID === null || costCenterID === undefined) {
            throw new Error('Required parameter costCenterID was null or undefined when calling Get.');
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

        return this.httpClient.get<CostCenter>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters/${encodeURIComponent(String(costCenterID))}`,
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
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListCostCenter>;
    public List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListCostCenter>>;
    public List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListCostCenter>>;
    public List(buyerID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: any, reportProgress?: boolean}): Observable<any> {
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

        return this.httpClient.get<ListCostCenter>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters`,
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
     * @param options.costCenterID ID of the cost center.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the cost center assignment. Possible values: User, Group, Company.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public ListAssignments(buyerID: string, options?: { costCenterID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean}): Observable<ListCostCenterAssignment>;
    public ListAssignments(buyerID: string, options?: { costCenterID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListCostCenterAssignment>>;
    public ListAssignments(buyerID: string, options?: { costCenterID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListCostCenterAssignment>>;
    public ListAssignments(buyerID: string, options?: { costCenterID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (opts.costCenterID !== undefined) {
            queryParameters = queryParameters.set('costCenterID', <any>opts.costCenterID);
        }
        if (opts.costCenterID === null) {
            throw new Error('Parameter costCenterID was null when calling ListAssignments. Null values are not allowed');
        }
        if (opts.userID !== undefined) {
            queryParameters = queryParameters.set('userID', <any>opts.userID);
        }
        if (opts.userID === null) {
            throw new Error('Parameter userID was null when calling ListAssignments. Null values are not allowed');
        }
        if (opts.userGroupID !== undefined) {
            queryParameters = queryParameters.set('userGroupID', <any>opts.userGroupID);
        }
        if (opts.userGroupID === null) {
            throw new Error('Parameter userGroupID was null when calling ListAssignments. Null values are not allowed');
        }
        if (opts.level !== undefined) {
            queryParameters = queryParameters.set('level', <any>opts.level);
        }
        if (opts.level === null) {
            throw new Error('Parameter level was null when calling ListAssignments. Null values are not allowed');
        }
        if (opts.page !== undefined) {
            queryParameters = queryParameters.set('page', <any>opts.page);
        }
        if (opts.page === null) {
            throw new Error('Parameter page was null when calling ListAssignments. Null values are not allowed');
        }
        if (opts.pageSize !== undefined) {
            queryParameters = queryParameters.set('pageSize', <any>opts.pageSize);
        }
        if (opts.pageSize === null) {
            throw new Error('Parameter pageSize was null when calling ListAssignments. Null values are not allowed');
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

        return this.httpClient.get<ListCostCenterAssignment>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters/assignments`,
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
     * @param costCenterID ID of the cost center.
     * @param partialCostCenter 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(buyerID: string, costCenterID: string, partialCostCenter: CostCenter, options?: { observe?: 'body', reportProgress?: boolean}): Observable<CostCenter>;
    public Patch(buyerID: string, costCenterID: string, partialCostCenter: CostCenter, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<CostCenter>>;
    public Patch(buyerID: string, costCenterID: string, partialCostCenter: CostCenter, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<CostCenter>>;
    public Patch(buyerID: string, costCenterID: string, partialCostCenter: CostCenter, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (costCenterID === null || costCenterID === undefined) {
            throw new Error('Required parameter costCenterID was null or undefined when calling Patch.');
        }
        if (partialCostCenter === null || partialCostCenter === undefined) {
            throw new Error('Required parameter partialCostCenter was null or undefined when calling Patch.');
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

        return this.httpClient.patch<CostCenter>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters/${encodeURIComponent(String(costCenterID))}`,
            partialCostCenter,
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
     * @param costCenterID ID of the cost center.
     * @param costCenter 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Save(buyerID: string, costCenterID: string, costCenter: CostCenter, options?: { observe?: 'body', reportProgress?: boolean}): Observable<CostCenter>;
    public Save(buyerID: string, costCenterID: string, costCenter: CostCenter, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<CostCenter>>;
    public Save(buyerID: string, costCenterID: string, costCenter: CostCenter, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<CostCenter>>;
    public Save(buyerID: string, costCenterID: string, costCenter: CostCenter, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling Save.');
        }
        if (costCenterID === null || costCenterID === undefined) {
            throw new Error('Required parameter costCenterID was null or undefined when calling Save.');
        }
        if (costCenter === null || costCenter === undefined) {
            throw new Error('Required parameter costCenter was null or undefined when calling Save.');
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

        return this.httpClient.put<CostCenter>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters/${encodeURIComponent(String(costCenterID))}`,
            costCenter,
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
     * @param costCenterAssignment 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public SaveAssignment(buyerID: string, costCenterAssignment: CostCenterAssignment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public SaveAssignment(buyerID: string, costCenterAssignment: CostCenterAssignment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public SaveAssignment(buyerID: string, costCenterAssignment: CostCenterAssignment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public SaveAssignment(buyerID: string, costCenterAssignment: CostCenterAssignment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (costCenterAssignment === null || costCenterAssignment === undefined) {
            throw new Error('Required parameter costCenterAssignment was null or undefined when calling SaveAssignment.');
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

        return this.httpClient.post<any>(`${this.basePath}/buyers/${encodeURIComponent(String(buyerID))}/costcenters/assignments`,
            costCenterAssignment,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
