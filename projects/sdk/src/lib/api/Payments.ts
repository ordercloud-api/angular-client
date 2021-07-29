import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { Payment } from '../models/Payment';
import { OrderDirection } from '../models/OrderDirection';
import { PaymentTransaction } from '../models/PaymentTransaction';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OcTokenService } from './Tokens';
import { Observable } from 'rxjs';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { RequestOptions } from '../models/RequestOptions';
import { Configuration } from '../Configuration';
import utils from '../utils';

@Injectable({
    providedIn: 'root'
})
export class OcPaymentService {
    private basePath: string;
    private impersonating = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor(
        private httpClient: HttpClient,
        private ocTokenService: OcTokenService,
        private configuration: Configuration
    ) {
        this.basePath = this.configuration.basePath;
    }

   /**
    * Get a list of payments. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/payments/list|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public List<TPayment extends Payment = Payment>(direction: OrderDirection, orderID: string, listOptions: { search?: string, searchOn?: Searchable<'Payments.List'>, sortBy?: Sortable<'Payments.List'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TPayment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Payments.List')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Payments.List')
        const queryParams = utils.buildQueryParams(listOptions, 'Payments.List')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/payments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new payment. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/payments/create|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param payment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Create<TPayment extends Payment>(direction: OrderDirection, orderID: string, payment: Payment,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPayment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Payments.Create')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Payments.Create')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/payments`, payment, {
            headers
        })
    }

   /**
    * Get a single payment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/payments/get|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TPayment extends Payment>(direction: OrderDirection, orderID: string, paymentID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPayment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Payments.Get')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Payments.Get')
        if(!paymentID) throw new Error('Required parameter paymentID was null or undefined when calling Payments.Get')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/orders/${direction}/${orderID}/payments/${paymentID}`, {
            headers
        })
    }

   /**
    * Delete a payment. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/payments/delete|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Delete(direction: OrderDirection, orderID: string, paymentID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Payments.Delete')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Payments.Delete')
        if(!paymentID) throw new Error('Required parameter paymentID was null or undefined when calling Payments.Delete')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/orders/${direction}/${orderID}/payments/${paymentID}`, {
            headers
        })
    }

   /**
    * Partially update a payment. PUT is not a supported method for payments due to the implications associated with modifying certain properties. Patch is only permitted on certain properties that vary depending on order status
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/payments/patch|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param payment 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TPayment extends Payment>(direction: OrderDirection, orderID: string, paymentID: string, payment: PartialDeep<Payment>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPayment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Payments.Patch')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Payments.Patch')
        if(!paymentID) throw new Error('Required parameter paymentID was null or undefined when calling Payments.Patch')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/orders/${direction}/${orderID}/payments/${paymentID}`, payment, {
            headers
        })
    }

   /**
    * Create a new payment transaction. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/payments/create-transaction|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param paymentTransaction Required fields: Type, DateExecuted
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public CreateTransaction<TPayment extends Payment>(direction: OrderDirection, orderID: string, paymentID: string, paymentTransaction: PaymentTransaction,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPayment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Payments.CreateTransaction')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Payments.CreateTransaction')
        if(!paymentID) throw new Error('Required parameter paymentID was null or undefined when calling Payments.CreateTransaction')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/orders/${direction}/${orderID}/payments/${paymentID}/transactions`, paymentTransaction, {
            headers
        })
    }

   /**
    * Delete a payment transaction. 
    * Check out the {@link https://ordercloud.io/api-reference/orders-and-fulfillment/payments/delete-transaction|api docs} for more info 
    * 
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing, all.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param transactionID ID of the transaction.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteTransaction(direction: OrderDirection, orderID: string, paymentID: string, transactionID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!direction) throw new Error('Required parameter direction was null or undefined when calling Payments.DeleteTransaction')
        if(!orderID) throw new Error('Required parameter orderID was null or undefined when calling Payments.DeleteTransaction')
        if(!paymentID) throw new Error('Required parameter paymentID was null or undefined when calling Payments.DeleteTransaction')
        if(!transactionID) throw new Error('Required parameter transactionID was null or undefined when calling Payments.DeleteTransaction')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/orders/${direction}/${orderID}/payments/${paymentID}/transactions/${transactionID}`, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Payments.As().List() // lists Payments using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}