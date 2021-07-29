import { MeUser } from '../models/MeUser';
import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Filters } from '../models/Filters';
import { BuyerAddress } from '../models/BuyerAddress';
import { Catalog } from '../models/Catalog';
import { Category } from '../models/Category';
import { CostCenter } from '../models/CostCenter';
import { BuyerCreditCard } from '../models/BuyerCreditCard';
import { Order } from '../models/Order';
import { TokenPasswordReset } from '../models/TokenPasswordReset';
import { ListPageWithFacets } from '../models/ListPageWithFacets';
import { BuyerProduct } from '../models/BuyerProduct';
import { SearchType } from '../models/SearchType';
import { Spec } from '../models/Spec';
import { Variant } from '../models/Variant';
import { Promotion } from '../models/Promotion';
import { AccessTokenBasic } from '../models/AccessTokenBasic';
import { BuyerSupplier } from '../models/BuyerSupplier';
import { Shipment } from '../models/Shipment';
import { ShipmentItem } from '../models/ShipmentItem';
import { SpendingAccount } from '../models/SpendingAccount';
import { UserGroup } from '../models/UserGroup';
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
export class OcMeService {
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
    * Get the Current Authenticated User 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get|api docs} for more info 
    * 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Get<TMeUser extends MeUser>(requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TMeUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me`, {
            headers
        })
    }

   /**
    * Update the Currently Authenticated User If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save|api docs} for more info 
    * 
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Save<TMeUser extends MeUser>(meUser: MeUser,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TMeUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/me`, meUser, {
            headers
        })
    }

   /**
    * Patch the Currently Authenticated User. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch|api docs} for more info 
    * 
    * @param meUser 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Patch<TMeUser extends MeUser>(meUser: PartialDeep<MeUser>, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TMeUser>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/me`, meUser, {
            headers
        })
    }

   /**
    * Get a list of addresses visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-addresses|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListAddresses<TBuyerAddress extends BuyerAddress = BuyerAddress>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListAddresses'>, sortBy?: Sortable<'Me.ListAddresses'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TBuyerAddress>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListAddresses')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/addresses`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new address. Only available to Buyer Users. Addresses created using this endpoint are considered private, and only accessible to the user who created them.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-address|api docs} for more info 
    * 
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public CreateAddress<TBuyerAddress extends BuyerAddress>(buyerAddress: BuyerAddress,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyerAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/me/addresses`, buyerAddress, {
            headers
        })
    }

   /**
    * Get a single address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetAddress<TBuyerAddress extends BuyerAddress>(addressID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyerAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Me.GetAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/addresses/${addressID}`, {
            headers
        })
    }

   /**
    * Update an address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveAddress<TBuyerAddress extends BuyerAddress>(addressID: string, buyerAddress: BuyerAddress,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyerAddress>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Me.SaveAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/me/addresses/${addressID}`, buyerAddress, {
            headers
        })
    }

   /**
    * Delete an address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteAddress(addressID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Me.DeleteAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/me/addresses/${addressID}`, {
            headers
        })
    }

   /**
    * Partially update an address. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch-address|api docs} for more info 
    * 
    * @param addressID ID of the address.
    * @param buyerAddress 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public PatchAddress(addressID: string, buyerAddress: PartialDeep<BuyerAddress>, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!addressID) throw new Error('Required parameter addressID was null or undefined when calling Me.PatchAddress')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/me/addresses/${addressID}`, buyerAddress, {
            headers
        })
    }

   /**
    * Get a list of catalogs visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-catalogs|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param listOptions.sellerID ID of the seller.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListCatalogs<TCatalog extends Catalog = Catalog>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListCatalogs'>, sortBy?: Sortable<'Me.ListCatalogs'>, page?: number, pageSize?: number, filters?: Filters, sellerID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCatalog>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListCatalogs')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/catalogs`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single catalog. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-catalog|api docs} for more info 
    * 
    * @param catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetCatalog<TCatalog extends Catalog>(catalogID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCatalog>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!catalogID) throw new Error('Required parameter catalogID was null or undefined when calling Me.GetCatalog')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/catalogs/${catalogID}`, {
            headers
        })
    }

   /**
    * Get a list of categories visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-categories|api docs} for more info 
    * 
    * @param listOptions.depth Indicates how deep down the hierarchy to return results. Valid values are a number of 1 or greater, or 'all'. Relative to ParentID if specified. Default is 1.
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListCategories<TCategory extends Category = Category>(listOptions: { depth?: string, catalogID?: string, productID?: string, search?: string, searchOn?: Searchable<'Me.ListCategories'>, sortBy?: Sortable<'Me.ListCategories'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCategory>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListCategories')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/categories`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single category. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-category|api docs} for more info 
    * 
    * @param categoryID ID of the category.
    * @param listOptions.catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetCategory<TCategory extends Category>(categoryID: string, listOptions: { catalogID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TCategory>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!categoryID) throw new Error('Required parameter categoryID was null or undefined when calling Me.GetCategory')
        const queryParams = utils.buildQueryParams(listOptions, 'Me.GetCategory')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/categories/${categoryID}`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of cost centers visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-cost-centers|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListCostCenters<TCostCenter extends CostCenter = CostCenter>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListCostCenters'>, sortBy?: Sortable<'Me.ListCostCenters'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TCostCenter>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListCostCenters')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/costcenters`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of credit cards visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-credit-cards|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListCreditCards<TBuyerCreditCard extends BuyerCreditCard = BuyerCreditCard>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListCreditCards'>, sortBy?: Sortable<'Me.ListCreditCards'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TBuyerCreditCard>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListCreditCards')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/creditcards`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Create a new credit card. Only available to Buyer Users. Credit Cards created using this endpoint are considered private, and only accessible to the user who created them.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/create-credit-card|api docs} for more info 
    * 
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public CreateCreditCard<TBuyerCreditCard extends BuyerCreditCard>(buyerCreditCard: BuyerCreditCard,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyerCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/me/creditcards`, buyerCreditCard, {
            headers
        })
    }

   /**
    * Get a single credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyerCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!creditcardID) throw new Error('Required parameter creditcardID was null or undefined when calling Me.GetCreditCard')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/creditcards/${creditcardID}`, {
            headers
        })
    }

   /**
    * Update a credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/save-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SaveCreditCard<TBuyerCreditCard extends BuyerCreditCard>(creditcardID: string, buyerCreditCard: BuyerCreditCard,requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyerCreditCard>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!creditcardID) throw new Error('Required parameter creditcardID was null or undefined when calling Me.SaveCreditCard')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/me/creditcards/${creditcardID}`, buyerCreditCard, {
            headers
        })
    }

   /**
    * Delete a credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/delete-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public DeleteCreditCard(creditcardID: string, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!creditcardID) throw new Error('Required parameter creditcardID was null or undefined when calling Me.DeleteCreditCard')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.delete<any>(`${this.basePath}/me/creditcards/${creditcardID}`, {
            headers
        })
    }

   /**
    * Partially update a credit card. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/patch-credit-card|api docs} for more info 
    * 
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public PatchCreditCard(creditcardID: string, buyerCreditCard: PartialDeep<BuyerCreditCard>, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!creditcardID) throw new Error('Required parameter creditcardID was null or undefined when calling Me.PatchCreditCard')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.patch<any>(`${this.basePath}/me/creditcards/${creditcardID}`, buyerCreditCard, {
            headers
        })
    }

   /**
    * Get a list of orders visible to this user. List orders created by this user.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-orders|api docs} for more info 
    * 
    * @param listOptions.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param listOptions.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListOrders<TOrder extends Order = Order>(listOptions: { from?: string, to?: string, search?: string, searchOn?: Searchable<'Me.ListOrders'>, sortBy?: Sortable<'Me.ListOrders'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TOrder>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListOrders')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/orders`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Transfer an order. If a user begins an order as the anonymous shopper and later logs in, use this endpoint to transfer that order to them.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/transfer-anon-user-order|api docs} for more info 
    * 
    * @param listOptions.anonUserToken Anon user token of the me.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public TransferAnonUserOrder(listOptions: { anonUserToken?: string } = {}, requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.TransferAnonUserOrder')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/me/orders`, null, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of orders that this user can approve. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-approvable-orders|api docs} for more info 
    * 
    * @param listOptions.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param listOptions.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListApprovableOrders<TOrder extends Order = Order>(listOptions: { from?: string, to?: string, search?: string, searchOn?: Searchable<'Me.ListApprovableOrders'>, sortBy?: Sortable<'Me.ListApprovableOrders'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TOrder>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListApprovableOrders')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/orders/approvable`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Reset a password by token. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/reset-password-by-token|api docs} for more info 
    * 
    * @param tokenPasswordReset Required fields: NewPassword
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ResetPasswordByToken(tokenPasswordReset: TokenPasswordReset,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/me/password`, tokenPasswordReset, {
            headers
        })
    }

   /**
    * Get a list of products visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-products|api docs} for more info 
    * 
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.categoryID ID of the category.
    * @param listOptions.depth Indicates how deep down the category hierarchy to return results. Valid values are a number of 1 or greater, or 'all'. Relative to CategoryID if specified, otherwise top level of the Catalog. Default is 'all'.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.searchType Type of search to perform. Possible values: AnyTerm (default), AllTermsAnyField, AllTermsSameField, ExactPhrase, ExactPhrasePrefix.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param listOptions.sellerID ID of the seller.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListProducts<TBuyerProduct extends BuyerProduct = BuyerProduct>(listOptions: { catalogID?: string, categoryID?: string, depth?: string, search?: string, searchOn?: Searchable<'Me.ListProducts'>, searchType?: SearchType, sortBy?: Sortable<'Me.ListProducts'>, page?: number, pageSize?: number, filters?: Filters, sellerID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPageWithFacets<TBuyerProduct>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListProducts')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/products`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single product. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-product|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.sellerID ID of the seller.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetProduct<TBuyerProduct extends BuyerProduct>(productID: string, listOptions: { sellerID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TBuyerProduct>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Me.GetProduct')
        const queryParams = utils.buildQueryParams(listOptions, 'Me.GetProduct')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/products/${productID}`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of specs visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-specs|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.catalogID ID of the catalog.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListSpecs<TSpec extends Spec = Spec>(productID: string, listOptions: { catalogID?: string, search?: string, searchOn?: Searchable<'Me.ListSpecs'>, sortBy?: Sortable<'Me.ListSpecs'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSpec>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Me.ListSpecs')
        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListSpecs')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/products/${productID}/specs`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single spec. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-spec|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param specID ID of the spec.
    * @param listOptions.catalogID ID of the catalog.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetSpec<TSpec extends Spec>(productID: string, specID: string, listOptions: { catalogID?: string } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpec>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Me.GetSpec')
        if(!specID) throw new Error('Required parameter specID was null or undefined when calling Me.GetSpec')
        const queryParams = utils.buildQueryParams(listOptions, 'Me.GetSpec')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/products/${productID}/specs/${specID}`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of variants visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-variants|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListVariants<TVariant extends Variant = Variant>(productID: string, listOptions: { search?: string, searchOn?: Searchable<'Me.ListVariants'>, sortBy?: Sortable<'Me.ListVariants'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TVariant>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Me.ListVariants')
        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListVariants')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/products/${productID}/variants`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single variant. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-variant|api docs} for more info 
    * 
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetVariant<TVariant extends Variant>(productID: string, variantID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TVariant>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!productID) throw new Error('Required parameter productID was null or undefined when calling Me.GetVariant')
        if(!variantID) throw new Error('Required parameter variantID was null or undefined when calling Me.GetVariant')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/products/${productID}/variants/${variantID}`, {
            headers
        })
    }

   /**
    * Get a list of promotions visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-promotions|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListPromotions<TPromotion extends Promotion = Promotion>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListPromotions'>, sortBy?: Sortable<'Me.ListPromotions'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TPromotion>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListPromotions')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/promotions`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single promotion. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-promotion|api docs} for more info 
    * 
    * @param promotionID ID of the promotion.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetPromotion<TPromotion extends Promotion>(promotionID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPromotion>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!promotionID) throw new Error('Required parameter promotionID was null or undefined when calling Me.GetPromotion')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/promotions/${promotionID}`, {
            headers
        })
    }

   /**
    * Register a register. 
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/register|api docs} for more info 
    * 
    * @param listOptions.anonUserToken Anon user token of the user.
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public Register<TAccessTokenBasic extends AccessTokenBasic>(meUser: MeUser,listOptions: { anonUserToken?: string } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TAccessTokenBasic>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.Register')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/me/register`, meUser, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of buyer sellers visible to this user. Organizations you can place orders directly to.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-buyer-sellers|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListBuyerSellers<TBuyerSupplier extends BuyerSupplier = BuyerSupplier>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListBuyerSellers'>, sortBy?: Sortable<'Me.ListBuyerSellers'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TBuyerSupplier>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListBuyerSellers')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/sellers`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of shipments visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-shipments|api docs} for more info 
    * 
    * @param listOptions.orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListShipments<TShipment extends Shipment = Shipment>(listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Me.ListShipments'>, sortBy?: Sortable<'Me.ListShipments'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TShipment>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListShipments')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/shipments`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single shipment. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-shipment|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetShipment<TShipment extends Shipment>(shipmentID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TShipment>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Me.GetShipment')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/shipments/${shipmentID}`, {
            headers
        })
    }

   /**
    * Get a list of shipment items visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-shipment-items|api docs} for more info 
    * 
    * @param shipmentID ID of the shipment.
    * @param listOptions.orderID ID of the order.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListShipmentItems<TShipmentItem extends ShipmentItem = ShipmentItem>(shipmentID: string, listOptions: { orderID?: string, search?: string, searchOn?: Searchable<'Me.ListShipmentItems'>, sortBy?: Sortable<'Me.ListShipmentItems'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TShipmentItem>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!shipmentID) throw new Error('Required parameter shipmentID was null or undefined when calling Me.ListShipmentItems')
        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListShipmentItems')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/shipments/${shipmentID}/items`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a list of spending accounts visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-spending-accounts|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListSpendingAccounts<TSpendingAccount extends SpendingAccount = SpendingAccount>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListSpendingAccounts'>, sortBy?: Sortable<'Me.ListSpendingAccounts'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TSpendingAccount>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListSpendingAccounts')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/spendingAccounts`, {
            headers,
            params: queryParams
        })
    }

   /**
    * Get a single spending account. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/get-spending-account|api docs} for more info 
    * 
    * @param spendingAccountID ID of the spending account.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetSpendingAccount<TSpendingAccount extends SpendingAccount>(spendingAccountID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TSpendingAccount>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!spendingAccountID) throw new Error('Required parameter spendingAccountID was null or undefined when calling Me.GetSpendingAccount')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/spendingaccounts/${spendingAccountID}`, {
            headers
        })
    }

   /**
    * Get a list of user groups visible to this user. Only available to Buyer Users.
    * Check out the {@link https://ordercloud.io/api-reference/me-and-my-stuff/me/list-user-groups|api docs} for more info 
    * 
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ListUserGroups<TUserGroup extends UserGroup = UserGroup>(listOptions: { search?: string, searchOn?: Searchable<'Me.ListUserGroups'>, sortBy?: Sortable<'Me.ListUserGroups'>, page?: number, pageSize?: number, filters?: Filters } = {}, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<ListPage<TUserGroup>>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        const queryParams = utils.buildQueryParams(listOptions, 'Me.ListUserGroups')

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}/me/usergroups`, {
            headers,
            params: queryParams
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Me.As().List() // lists Me using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}