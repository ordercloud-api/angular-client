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

import { ListSupplier } from '../model/listSupplier';
import { Supplier } from '../model/supplier';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SupplierService {

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
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(supplierID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(supplierID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(supplierID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(supplierID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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

        return this.httpClient.delete<any>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}`,
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
     * @param supplier 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(supplier: Supplier, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Supplier>;
    public Create(supplier: Supplier, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Supplier>>;
    public Create(supplier: Supplier, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Supplier>>;
    public Create(supplier: Supplier, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplier === null || supplier === undefined) {
            throw new Error('Required parameter supplier was null or undefined when calling Create.');
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

        return this.httpClient.post<Supplier>(`${this.basePath}/suppliers`,
            supplier,
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
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(supplierID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Supplier>;
    public Get(supplierID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Supplier>>;
    public Get(supplierID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Supplier>>;
    public Get(supplierID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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

        return this.httpClient.get<Supplier>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}`,
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
   
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListSupplier>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListSupplier>>;
    public List(options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListSupplier>>;
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

        return this.httpClient.get<ListSupplier>(`${this.basePath}/suppliers`,
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
     * @param partialSupplier 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(supplierID: string, partialSupplier: Supplier, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Supplier>;
    public Patch(supplierID: string, partialSupplier: Supplier, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Supplier>>;
    public Patch(supplierID: string, partialSupplier: Supplier, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Supplier>>;
    public Patch(supplierID: string, partialSupplier: Supplier, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
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
        if (partialSupplier === null || partialSupplier === undefined) {
            throw new Error('Required parameter partialSupplier was null or undefined when calling Patch.');
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

        return this.httpClient.patch<Supplier>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}`,
            partialSupplier,
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
     * @param supplier 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Save(supplierID: string, supplier: Supplier, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Supplier>;
    public Save(supplierID: string, supplier: Supplier, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Supplier>>;
    public Save(supplierID: string, supplier: Supplier, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Supplier>>;
    public Save(supplierID: string, supplier: Supplier, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (supplierID === null || supplierID === undefined) {
            throw new Error('Required parameter supplierID was null or undefined when calling Save.');
        }
        if (supplier === null || supplier === undefined) {
            throw new Error('Required parameter supplier was null or undefined when calling Save.');
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

        return this.httpClient.put<Supplier>(`${this.basePath}/suppliers/${encodeURIComponent(String(supplierID))}`,
            supplier,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
