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

import { ListPayment } from '../model/listPayment';
import { Payment } from '../model/payment';
import { PaymentTransaction } from '../model/paymentTransaction';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PaymentService {

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
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(direction: string, orderID: string, paymentID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(direction: string, orderID: string, paymentID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(direction: string, orderID: string, paymentID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(direction: string, orderID: string, paymentID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (direction === null || direction === undefined) {
            throw new Error('Required parameter direction was null or undefined when calling Delete.');
        }
        if (orderID === null || orderID === undefined) {
            throw new Error('Required parameter orderID was null or undefined when calling Delete.');
        }
        if (paymentID === null || paymentID === undefined) {
            throw new Error('Required parameter paymentID was null or undefined when calling Delete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/orders/${encodeURIComponent(String(direction))}/${encodeURIComponent(String(orderID))}/payments/${encodeURIComponent(String(paymentID))}`,
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
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param payment 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(direction: string, orderID: string, payment: Payment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Payment>;
    public Create(direction: string, orderID: string, payment: Payment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Payment>>;
    public Create(direction: string, orderID: string, payment: Payment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Payment>>;
    public Create(direction: string, orderID: string, payment: Payment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (direction === null || direction === undefined) {
            throw new Error('Required parameter direction was null or undefined when calling Create.');
        }
        if (orderID === null || orderID === undefined) {
            throw new Error('Required parameter orderID was null or undefined when calling Create.');
        }
        if (payment === null || payment === undefined) {
            throw new Error('Required parameter payment was null or undefined when calling Create.');
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

        return this.httpClient.post<Payment>(`${this.basePath}/orders/${encodeURIComponent(String(direction))}/${encodeURIComponent(String(orderID))}/payments`,
            payment,
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
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     * @param paymentTransaction 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public CreateTransaction(direction: string, orderID: string, paymentID: string, paymentTransaction: PaymentTransaction, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Payment>;
    public CreateTransaction(direction: string, orderID: string, paymentID: string, paymentTransaction: PaymentTransaction, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Payment>>;
    public CreateTransaction(direction: string, orderID: string, paymentID: string, paymentTransaction: PaymentTransaction, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Payment>>;
    public CreateTransaction(direction: string, orderID: string, paymentID: string, paymentTransaction: PaymentTransaction, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (direction === null || direction === undefined) {
            throw new Error('Required parameter direction was null or undefined when calling CreateTransaction.');
        }
        if (orderID === null || orderID === undefined) {
            throw new Error('Required parameter orderID was null or undefined when calling CreateTransaction.');
        }
        if (paymentID === null || paymentID === undefined) {
            throw new Error('Required parameter paymentID was null or undefined when calling CreateTransaction.');
        }
        if (paymentTransaction === null || paymentTransaction === undefined) {
            throw new Error('Required parameter paymentTransaction was null or undefined when calling CreateTransaction.');
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

        return this.httpClient.post<Payment>(`${this.basePath}/orders/${encodeURIComponent(String(direction))}/${encodeURIComponent(String(orderID))}/payments/${encodeURIComponent(String(paymentID))}/transactions`,
            paymentTransaction,
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
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     * @param transactionID ID of the transaction.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public DeleteTransaction(direction: string, orderID: string, paymentID: string, transactionID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public DeleteTransaction(direction: string, orderID: string, paymentID: string, transactionID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public DeleteTransaction(direction: string, orderID: string, paymentID: string, transactionID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public DeleteTransaction(direction: string, orderID: string, paymentID: string, transactionID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (direction === null || direction === undefined) {
            throw new Error('Required parameter direction was null or undefined when calling DeleteTransaction.');
        }
        if (orderID === null || orderID === undefined) {
            throw new Error('Required parameter orderID was null or undefined when calling DeleteTransaction.');
        }
        if (paymentID === null || paymentID === undefined) {
            throw new Error('Required parameter paymentID was null or undefined when calling DeleteTransaction.');
        }
        if (transactionID === null || transactionID === undefined) {
            throw new Error('Required parameter transactionID was null or undefined when calling DeleteTransaction.');
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

        return this.httpClient.delete<any>(`${this.basePath}/orders/${encodeURIComponent(String(direction))}/${encodeURIComponent(String(orderID))}/payments/${encodeURIComponent(String(paymentID))}/transactions/${encodeURIComponent(String(transactionID))}`,
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
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(direction: string, orderID: string, paymentID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Payment>;
    public Get(direction: string, orderID: string, paymentID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Payment>>;
    public Get(direction: string, orderID: string, paymentID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Payment>>;
    public Get(direction: string, orderID: string, paymentID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (direction === null || direction === undefined) {
            throw new Error('Required parameter direction was null or undefined when calling Get.');
        }
        if (orderID === null || orderID === undefined) {
            throw new Error('Required parameter orderID was null or undefined when calling Get.');
        }
        if (paymentID === null || paymentID === undefined) {
            throw new Error('Required parameter paymentID was null or undefined when calling Get.');
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

        return this.httpClient.get<Payment>(`${this.basePath}/orders/${encodeURIComponent(String(direction))}/${encodeURIComponent(String(orderID))}/payments/${encodeURIComponent(String(paymentID))}`,
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
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param options.search Word or phrase to search for.
     * @param options.searchOn Comma-delimited list of fields to search on.
     * @param options.sortBy Comma-delimited list of fields to sort by.
     * @param options.page Page of results to return. Default: 1
     * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public List(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'body', reportProgress?: boolean}): Observable<ListPayment>;
    public List(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListPayment>>;
    public List(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListPayment>>;
    public List(direction: string, orderID: string, options?: { search?: string, searchOn?: string, sortBy?: string, page?: number, pageSize?: number, filters?: { [key: string]: string | Array<string>; }, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (direction === null || direction === undefined) {
            throw new Error('Required parameter direction was null or undefined when calling List.');
        }
        if (orderID === null || orderID === undefined) {
            throw new Error('Required parameter orderID was null or undefined when calling List.');
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

        return this.httpClient.get<ListPayment>(`${this.basePath}/orders/${encodeURIComponent(String(direction))}/${encodeURIComponent(String(orderID))}/payments`,
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
     * @param direction Direction of the order, from the current user&#39;s perspective. Possible values: incoming, outgoing.
     * @param orderID ID of the order.
     * @param paymentID ID of the payment.
     * @param partialPayment 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(direction: string, orderID: string, paymentID: string, partialPayment: Payment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Payment>;
    public Patch(direction: string, orderID: string, paymentID: string, partialPayment: Payment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Payment>>;
    public Patch(direction: string, orderID: string, paymentID: string, partialPayment: Payment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Payment>>;
    public Patch(direction: string, orderID: string, paymentID: string, partialPayment: Payment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (direction === null || direction === undefined) {
            throw new Error('Required parameter direction was null or undefined when calling Patch.');
        }
        if (orderID === null || orderID === undefined) {
            throw new Error('Required parameter orderID was null or undefined when calling Patch.');
        }
        if (paymentID === null || paymentID === undefined) {
            throw new Error('Required parameter paymentID was null or undefined when calling Patch.');
        }
        if (partialPayment === null || partialPayment === undefined) {
            throw new Error('Required parameter partialPayment was null or undefined when calling Patch.');
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

        return this.httpClient.patch<Payment>(`${this.basePath}/orders/${encodeURIComponent(String(direction))}/${encodeURIComponent(String(orderID))}/payments/${encodeURIComponent(String(paymentID))}`,
            partialPayment,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
