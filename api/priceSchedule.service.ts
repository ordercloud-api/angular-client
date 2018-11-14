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
import { OcTokenService }                                      from './token.service';

import { ListPriceSchedule } from '../model/listPriceSchedule';
import { PriceBreak } from '../model/priceBreak';
import { PriceSchedule } from '../model/priceSchedule';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
    providedIn: 'root'
})
export class OcPriceScheduleService {

    protected basePath = 'https://api.ordercloud.io/v1';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    private impersonating = false;

    constructor(protected httpClient: HttpClient, protected ocTokenService: OcTokenService, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    public As(): this {
        this.impersonating = true;
        return this;
    }
    /**
     * 
     * 
     * @param priceScheduleID ID of the price schedule.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(priceScheduleID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(priceScheduleID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(priceScheduleID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(priceScheduleID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (priceScheduleID === null || priceScheduleID === undefined) {
            throw new Error('Required parameter priceScheduleID was null or undefined when calling Delete.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess();
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

        return this.httpClient.delete<any>(`${this.basePath}/priceschedules/${encodeURIComponent(String(priceScheduleID))}`,
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
     * @param priceSchedule 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create<PriceScheduleXp = any>(priceSchedule: PriceSchedule, options?: { observe?: 'body', reportProgress?: boolean}): Observable<PriceSchedule<PriceScheduleXp>>;
    public Create<PriceScheduleXp = any>(priceSchedule: PriceSchedule, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<PriceSchedule>>;
    public Create<PriceScheduleXp = any>(priceSchedule: PriceSchedule, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<PriceSchedule>>;
    public Create(priceSchedule: PriceSchedule, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (priceSchedule === null || priceSchedule === undefined) {
            throw new Error('Required parameter priceSchedule was null or undefined when calling Create.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess();
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

        return this.httpClient.post<PriceSchedule>(`${this.basePath}/priceschedules`,
            priceSchedule,
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
     * @param priceScheduleID ID of the price schedule.
     * @param quantity Quantity of the price schedule.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public DeletePriceBreak(priceScheduleID: string, quantity: number, options?: { quantity?: number, observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public DeletePriceBreak(priceScheduleID: string, quantity: number, options?: { quantity?: number, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public DeletePriceBreak(priceScheduleID: string, quantity: number, options?: { quantity?: number, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public DeletePriceBreak(priceScheduleID: string, quantity: number, options?: { quantity?: number, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (priceScheduleID === null || priceScheduleID === undefined) {
            throw new Error('Required parameter priceScheduleID was null or undefined when calling DeletePriceBreak.');
        }
        if (quantity === null || quantity === undefined) {
            throw new Error('Required parameter quantity was null or undefined when calling DeletePriceBreak.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (quantity !== undefined) {
            queryParameters = queryParameters.set('quantity', <any>quantity);
        }
        if (quantity === null) {
            throw new Error('Parameter quantity was null when calling DeletePriceBreak. Null values are not allowed');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess();
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

        return this.httpClient.delete<any>(`${this.basePath}/priceschedules/${encodeURIComponent(String(priceScheduleID))}/PriceBreaks`,
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
     * @param priceScheduleID ID of the price schedule.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get<PriceScheduleXp = any>(priceScheduleID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<PriceSchedule<PriceScheduleXp>>;
    public Get<PriceScheduleXp = any>(priceScheduleID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<PriceSchedule>>;
    public Get<PriceScheduleXp = any>(priceScheduleID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<PriceSchedule>>;
    public Get(priceScheduleID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (priceScheduleID === null || priceScheduleID === undefined) {
            throw new Error('Required parameter priceScheduleID was null or undefined when calling Get.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess();
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

        return this.httpClient.get<PriceSchedule>(`${this.basePath}/priceschedules/${encodeURIComponent(String(priceScheduleID))}`,
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
   
    public List<PriceScheduleXp = any>(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListPriceSchedule<PriceScheduleXp>>;
    public List<PriceScheduleXp = any>(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListPriceSchedule>>;
    public List<PriceScheduleXp = any>(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListPriceSchedule>>;
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
        let accessToken = this.impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess();
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

        return this.httpClient.get<ListPriceSchedule>(`${this.basePath}/priceschedules`,
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
     * @param priceScheduleID ID of the price schedule.
     * @param partialPriceSchedule 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch<PriceScheduleXp = any>(priceScheduleID: string, partialPriceSchedule: PriceSchedule, options?: { observe?: 'body', reportProgress?: boolean}): Observable<PriceSchedule<PriceScheduleXp>>;
    public Patch<PriceScheduleXp = any>(priceScheduleID: string, partialPriceSchedule: PriceSchedule, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<PriceSchedule>>;
    public Patch<PriceScheduleXp = any>(priceScheduleID: string, partialPriceSchedule: PriceSchedule, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<PriceSchedule>>;
    public Patch(priceScheduleID: string, partialPriceSchedule: PriceSchedule, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (priceScheduleID === null || priceScheduleID === undefined) {
            throw new Error('Required parameter priceScheduleID was null or undefined when calling Patch.');
        }
        if (partialPriceSchedule === null || partialPriceSchedule === undefined) {
            throw new Error('Required parameter partialPriceSchedule was null or undefined when calling Patch.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess();
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

        return this.httpClient.patch<PriceSchedule>(`${this.basePath}/priceschedules/${encodeURIComponent(String(priceScheduleID))}`,
            partialPriceSchedule,
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
     * @param priceScheduleID ID of the price schedule.
     * @param priceSchedule 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Save<PriceScheduleXp = any>(priceScheduleID: string, priceSchedule: PriceSchedule, options?: { observe?: 'body', reportProgress?: boolean}): Observable<PriceSchedule<PriceScheduleXp>>;
    public Save<PriceScheduleXp = any>(priceScheduleID: string, priceSchedule: PriceSchedule, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<PriceSchedule>>;
    public Save<PriceScheduleXp = any>(priceScheduleID: string, priceSchedule: PriceSchedule, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<PriceSchedule>>;
    public Save(priceScheduleID: string, priceSchedule: PriceSchedule, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (priceScheduleID === null || priceScheduleID === undefined) {
            throw new Error('Required parameter priceScheduleID was null or undefined when calling Save.');
        }
        if (priceSchedule === null || priceSchedule === undefined) {
            throw new Error('Required parameter priceSchedule was null or undefined when calling Save.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess();
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

        return this.httpClient.put<PriceSchedule>(`${this.basePath}/priceschedules/${encodeURIComponent(String(priceScheduleID))}`,
            priceSchedule,
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
     * @param priceScheduleID ID of the price schedule.
     * @param priceBreak 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public SavePriceBreak<PriceScheduleXp = any>(priceScheduleID: string, priceBreak: PriceBreak, options?: { observe?: 'body', reportProgress?: boolean}): Observable<PriceSchedule<PriceScheduleXp>>;
    public SavePriceBreak<PriceScheduleXp = any>(priceScheduleID: string, priceBreak: PriceBreak, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<PriceSchedule>>;
    public SavePriceBreak<PriceScheduleXp = any>(priceScheduleID: string, priceBreak: PriceBreak, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<PriceSchedule>>;
    public SavePriceBreak(priceScheduleID: string, priceBreak: PriceBreak, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (priceScheduleID === null || priceScheduleID === undefined) {
            throw new Error('Required parameter priceScheduleID was null or undefined when calling SavePriceBreak.');
        }
        if (priceBreak === null || priceBreak === undefined) {
            throw new Error('Required parameter priceBreak was null or undefined when calling SavePriceBreak.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        let accessToken = this.impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess();
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

        return this.httpClient.post<PriceSchedule>(`${this.basePath}/priceschedules/${encodeURIComponent(String(priceScheduleID))}/PriceBreaks`,
            priceBreak,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
