# Migration Guide

The objective of this guide is to document the breaking changes and updates required to migrate from one major version to the next.

## version 0.x.x to version 1.x.x

* The minimum compatible typescript version is now **3.5**

* The `OcPasswordResetService` service has been renamed to `OcForgottenPasswordService`.

    Before:

    ```javascript
    const resetRequest = {
        ClientID: 'my-client-id',
        Email: 'test@test.com',
        Username: 'test'
    }
    this.OcPasswordResetService.SendVerificationCode(resetRequest)
    ```

    After:

    ```javascript
    const resetRequest = {
        ClientID: 'my-client-id',
        Email: 'test@test.com',
        Username: 'test'
    }
    this.OcForgottenPasswordService.SendVerificationCode(resetRequest)
    ```

* Models previously were defined such that all properties were required. Now, properties are only required if the Create/Update operation requires them. Please see [understanding ordercloud's models](./README.md#understanding-sdk-models) for more information.

* The following types now require specific case-sensitive string literals instead of simply type `string`
  * [`ApiRole`](https://ordercloud-api.github.io/angular-client#apirole)
  * [`ApprovalStatus`](https://ordercloud-api.github.io/angular-client#approvalstatus)
  * [`CommerceRole`](https://ordercloud-api.github.io/angular-client#commercerole)
  * [`MessageType`](https://ordercloud-api.github.io/angular-client#messagetype)
  * [`OrderDirection`](https://ordercloud-api.github.io/angular-client#orderdirection)
  * [`OrderStatus`](https://ordercloud-api.github.io/angular-client#orderstatus)
  * [`PartyType`](https://ordercloud-api.github.io/angular-client#partytype)
  * [`Payment`](https://ordercloud-api.github.io/angular-client#payment)
  * [`PriceMarkupType`](https://ordercloud-api.github.io/angular-client#pricemarkuptype)
  * [`UserOrderMoveOption`](https://ordercloud-api.github.io/angular-client#userordermovedirection)
  
  Before:
  
  ```typescript
  OcOrderService.List('incoming') // case insensitive
  ```
  
  After:
  
  ```typescript
  OcOrderService.List('Incoming') // case sensitive
  ```

  This may also change how you need to define wrapper functions

  Before:
  
  ```typescript
  function OrderListWrapper(orderDirection: string) {
      return this.OcProductService.List({ orderDirection: orderDirection })
  }
  ```
  
  After:
  
  ```typescript
  // where OrderDirection is a model that can be imported
  function OrderListWrapper(orderDirection: OrderDirection) {
      return this.OcProductService.List({ orderDirection: orderDirection })
  }
  ```

* `searchOn` and `sortBy` now require types `Searchable<T>` and `Sortable<T>`. Each resolve to an array of string literals specific to that list operation. For example `Searchable<'Orders.List'>` resolves to `("ID" | "FromCompanyID" | "ToCompanyID" | "Comments")[]`.

    Before:

    ```javascript
    this.OcOrders.List('Incoming', {searchOn: 'ID,FromCompanyID', sortBy: 'ID,ToCompanyID'})
    ```

    After:

    ```javascript
    this.OcOrders.List('Incoming', {searchOn: ['ID', 'FromCompanyID'], sortBy: ['ID', 'ToCompanyID']})
    ```

* List models have been replaced with a generic `ListPage` model that takes a type parameter for the item. Any premium search list that has facets should use `ListPageWithFacets`

    Before:

    ```typescript
    const orderList: ListOrder
    const ccList: ListCreditCard
    ```

    After:

    ```typescript
    const orderList: ListPage<Order>
    const ccList: ListPage<CreditCard>
    ```

* Configuration used to take `basePath` and `baseAuthPath`. These were two separate values because our auth server had a different url (https://auth.ordercloud.io) than our main api server (https://api.ordercloud.io). That is no longer true, they are now both served from https://api.ordercloud.io

    Before:

    ```typescript
    OrderCloudModule.forRoot(() => new Configuration({
        basePath: 'https://api.ordercloud.io/v1',
        authPath: 'https://auth.ordercloud.io/oauth/token'
    })),
    ```

    After:
    ```typescript
    OrderCloudModule.forRoot(() => new Configuration({
        baseApiUrl: 'https://api.ordercloud.io'
    })),
    ```