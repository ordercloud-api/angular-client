/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
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

import { ListPromotion } from '../model/listPromotion';
import { ListPromotionAssignment } from '../model/listPromotionAssignment';
import { Promotion } from '../model/promotion';
import { PromotionAssignment } from '../model/promotionAssignment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PromotionService {

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
     * @param promotionID ID of the promotion.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Delete(promotionID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public Delete(promotionID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public Delete(promotionID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public Delete(promotionID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (promotionID === null || promotionID === undefined) {
            throw new Error('Required parameter promotionID was null or undefined when calling Delete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/promotions/${encodeURIComponent(String(promotionID))}`,
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
     * @param promo 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Create(promo: Promotion, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Promotion>;
    public Create(promo: Promotion, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Promotion>>;
    public Create(promo: Promotion, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Promotion>>;
    public Create(promo: Promotion, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (promo === null || promo === undefined) {
            throw new Error('Required parameter promo was null or undefined when calling Create.');
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

        return this.httpClient.post<Promotion>(`${this.basePath}/promotions`,
            promo,
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
     * @param promotionID ID of the promotion.
     * @param buyerID ID of the buyer.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public DeleteAssignment(promotionID: string, buyerID: string, options?: { userID?: string, userGroupID?: string, observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public DeleteAssignment(promotionID: string, buyerID: string, options?: { userID?: string, userGroupID?: string, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public DeleteAssignment(promotionID: string, buyerID: string, options?: { userID?: string, userGroupID?: string, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public DeleteAssignment(promotionID: string, buyerID: string, options?: { userID?: string, userGroupID?: string, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (promotionID === null || promotionID === undefined) {
            throw new Error('Required parameter promotionID was null or undefined when calling DeleteAssignment.');
        }
        if (buyerID === null || buyerID === undefined) {
            throw new Error('Required parameter buyerID was null or undefined when calling DeleteAssignment.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (buyerID !== undefined) {
            queryParameters = queryParameters.set('buyerID', <any>buyerID);
        }
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

        return this.httpClient.delete<any>(`${this.basePath}/promotions/${encodeURIComponent(String(promotionID))}/assignments`,
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
     * @param promotionID ID of the promotion.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Get(promotionID: string, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Promotion>;
    public Get(promotionID: string, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Promotion>>;
    public Get(promotionID: string, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Promotion>>;
    public Get(promotionID: string, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (promotionID === null || promotionID === undefined) {
            throw new Error('Required parameter promotionID was null or undefined when calling Get.');
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

        return this.httpClient.get<Promotion>(`${this.basePath}/promotions/${encodeURIComponent(String(promotionID))}`,
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
     * @param options.search Search of the promotion.
     * @param options.searchOn Search on of the promotion.
     * @param options.sortBy Sort by of the promotion.
     * @param options.page Page of the promotion.
     * @param options.pageSize Page size of the promotion.
     * @param options.filters Filters of the promotion.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public List(options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'body', reportProgress?: boolean}): Observable<ListPromotion>;
    public List(options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListPromotion>>;
    public List(options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListPromotion>>;
    public List(options?: { search?: string, searchOn?: Array<string>, sortBy?: Array<string>, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: any, reportProgress?: boolean}): Observable<any> {
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
            queryParameters = queryParameters.set('filters', JSON.stringify(<any>opts.filters));
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

        return this.httpClient.get<ListPromotion>(`${this.basePath}/promotions`,
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
     * @param options.promotionID ID of the promotion.
     * @param options.userID ID of the user.
     * @param options.userGroupID ID of the user group.
     * @param options.level Level of the promotion.
     * @param options.page Page of the promotion.
     * @param options.pageSize Page size of the promotion.
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
   
    public ListAssignments(options?: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean}): Observable<ListPromotionAssignment>;
    public ListAssignments(options?: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<ListPromotionAssignment>>;
    public ListAssignments(options?: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<ListPromotionAssignment>>;
    public ListAssignments(options?: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (opts.buyerID !== undefined) {
            queryParameters = queryParameters.set('buyerID', <any>opts.buyerID);
        }
        if (opts.promotionID !== undefined) {
            queryParameters = queryParameters.set('promotionID', <any>opts.promotionID);
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

        return this.httpClient.get<ListPromotionAssignment>(`${this.basePath}/promotions/assignments`,
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
     * @param promotionID ID of the promotion.
     * @param partialPromotion 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Patch(promotionID: string, partialPromotion: Promotion, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Promotion>;
    public Patch(promotionID: string, partialPromotion: Promotion, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Promotion>>;
    public Patch(promotionID: string, partialPromotion: Promotion, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Promotion>>;
    public Patch(promotionID: string, partialPromotion: Promotion, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (promotionID === null || promotionID === undefined) {
            throw new Error('Required parameter promotionID was null or undefined when calling Patch.');
        }
        if (partialPromotion === null || partialPromotion === undefined) {
            throw new Error('Required parameter partialPromotion was null or undefined when calling Patch.');
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

        return this.httpClient.patch<Promotion>(`${this.basePath}/promotions/${encodeURIComponent(String(promotionID))}`,
            partialPromotion,
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
     * @param assignment 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public SaveAssignment(assignment: PromotionAssignment, options?: { observe?: 'body', reportProgress?: boolean}): Observable<any>;
    public SaveAssignment(assignment: PromotionAssignment, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<any>>;
    public SaveAssignment(assignment: PromotionAssignment, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<any>>;
    public SaveAssignment(assignment: PromotionAssignment, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
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

        return this.httpClient.post<any>(`${this.basePath}/promotions/assignments`,
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
     * @param promotionID ID of the promotion.
     * @param promo 
     * @param options.observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param options.reportProgress flag to report request and response progress.
     */
    public Update(promotionID: string, promo: Promotion, options?: { observe?: 'body', reportProgress?: boolean}): Observable<Promotion>;
    public Update(promotionID: string, promo: Promotion, options?: { observe?: 'response', reportProgress?: boolean}): Observable<HttpResponse<Promotion>>;
    public Update(promotionID: string, promo: Promotion, options?: { observe?: 'events', reportProgress?: boolean}): Observable<HttpEvent<Promotion>>;
    public Update(promotionID: string, promo: Promotion, options?: { observe?: any, reportProgress?: boolean}): Observable<any> {
        let opts = options || {};
        if (opts.observe === null || opts.observe === undefined) {
            opts.observe = 'body';
        }
        if (opts.reportProgress === null || opts.reportProgress === undefined) {
            opts.reportProgress = false;
        }
        if (promotionID === null || promotionID === undefined) {
            throw new Error('Required parameter promotionID was null or undefined when calling Update.');
        }
        if (promo === null || promo === undefined) {
            throw new Error('Required parameter promo was null or undefined when calling Update.');
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

        return this.httpClient.put<Promotion>(`${this.basePath}/promotions/${encodeURIComponent(String(promotionID))}`,
            promo,
            {
                headers: headers,
                observe: opts.observe,
                reportProgress: opts.reportProgress
            }
        );
    }
 }
