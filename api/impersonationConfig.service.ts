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

import { ImpersonationConfig } from '../model/impersonationConfig';
import { ListImpersonationConfig } from '../model/listImpersonationConfig';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ImpersonationConfigService {

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
     * @param impersonationConfigID ID of the impersonation config.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(impersonationConfigID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(impersonationConfigID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(impersonationConfigID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(impersonationConfigID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (impersonationConfigID === null || impersonationConfigID === undefined) {
            throw new Error('Required parameter impersonationConfigID was null or undefined when calling Delete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/impersonationconfig/${encodeURIComponent(String(impersonationConfigID))}`,
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
     * @param impersonationConfig 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(impersonationConfig: ImpersonationConfig, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ImpersonationConfig>;
    public Create(impersonationConfig: ImpersonationConfig, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ImpersonationConfig>>;
    public Create(impersonationConfig: ImpersonationConfig, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ImpersonationConfig>>;
    public Create(impersonationConfig: ImpersonationConfig, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (impersonationConfig === null || impersonationConfig === undefined) {
            throw new Error('Required parameter impersonationConfig was null or undefined when calling Create.');
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

        return this.httpClient.post<ImpersonationConfig>(`${this.basePath}/impersonationconfig`,
            impersonationConfig,
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
     * @param impersonationConfigID ID of the impersonation config.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(impersonationConfigID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ImpersonationConfig>;
    public Get(impersonationConfigID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ImpersonationConfig>>;
    public Get(impersonationConfigID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ImpersonationConfig>>;
    public Get(impersonationConfigID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (impersonationConfigID === null || impersonationConfigID === undefined) {
            throw new Error('Required parameter impersonationConfigID was null or undefined when calling Get.');
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

        return this.httpClient.get<ImpersonationConfig>(`${this.basePath}/impersonationconfig/${encodeURIComponent(String(impersonationConfigID))}`,
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
   
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListImpersonationConfig>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListImpersonationConfig>>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListImpersonationConfig>>;
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
        if (opts.searchOn !== undefined) {
            queryParameters = queryParameters.set('searchOn', <any>opts.searchOn);
        }
        if (opts.sortBy !== undefined) {
            queryParameters = queryParameters.set('sortBy', <any>opts.sortBy);
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

        return this.httpClient.get<ListImpersonationConfig>(`${this.basePath}/impersonationconfig`,
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
     * @param impersonationConfigID ID of the impersonation config.
     * @param partialImpersonationConfig 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(impersonationConfigID: string, partialImpersonationConfig: ImpersonationConfig, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ImpersonationConfig>;
    public Patch(impersonationConfigID: string, partialImpersonationConfig: ImpersonationConfig, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ImpersonationConfig>>;
    public Patch(impersonationConfigID: string, partialImpersonationConfig: ImpersonationConfig, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ImpersonationConfig>>;
    public Patch(impersonationConfigID: string, partialImpersonationConfig: ImpersonationConfig, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (impersonationConfigID === null || impersonationConfigID === undefined) {
            throw new Error('Required parameter impersonationConfigID was null or undefined when calling Patch.');
        }
        if (partialImpersonationConfig === null || partialImpersonationConfig === undefined) {
            throw new Error('Required parameter partialImpersonationConfig was null or undefined when calling Patch.');
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

        return this.httpClient.patch<ImpersonationConfig>(`${this.basePath}/impersonationconfig/${encodeURIComponent(String(impersonationConfigID))}`,
            partialImpersonationConfig,
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
     * @param impersonationConfigID ID of the impersonation config.
     * @param impersonationConfig 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Save(impersonationConfigID: string, impersonationConfig: ImpersonationConfig, options?: { observe?: 'body', reportProgress?: boolean}): Observable<ImpersonationConfig>;
    public Save(impersonationConfigID: string, impersonationConfig: ImpersonationConfig, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ImpersonationConfig>>;
    public Save(impersonationConfigID: string, impersonationConfig: ImpersonationConfig, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ImpersonationConfig>>;
    public Save(impersonationConfigID: string, impersonationConfig: ImpersonationConfig, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (impersonationConfigID === null || impersonationConfigID === undefined) {
            throw new Error('Required parameter impersonationConfigID was null or undefined when calling Save.');
        }
        if (impersonationConfig === null || impersonationConfig === undefined) {
            throw new Error('Required parameter impersonationConfig was null or undefined when calling Save.');
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

        return this.httpClient.put<ImpersonationConfig>(`${this.basePath}/impersonationconfig/${encodeURIComponent(String(impersonationConfigID))}`,
            impersonationConfig,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
