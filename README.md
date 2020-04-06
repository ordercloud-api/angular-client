# OrderCloud Angular SDK

> The official client library for building Angular (6.0.0+) solutions on [OrderCloud's](https://ordercloud.io/) ecommerce platform

This SDK aims to greatly improve developer productivity and reduce errors by providing discoverable, strongly-typed wrappers for all public endpoints and request/response models.

Coming from an older version? Check out the [migration guide](./MIGRATION_GUIDE.md) so you can upgrade to the latest and greatest.

- [Requirements](#requirements)
- [⚙️ Installation](#%EF%B8%8F-installation)
- [Configuration](#configuration)
- [🔐 Authentication](#-authentication)
- [Understanding SDK models](#understanding-sdk-models)
- [💪 Strongly Typed xp](#-strongly-typed-xp)
- [🔍 Filtering](#-filtering)
- [👬 Impersonation](#-impersonation)
- [Typescript utilities](#typescript-utilities)
- [📄 License](#-license)
- [🤝 Contributing](#-contributing)
- [🆘 Getting Help](#-getting-help)

## Requirements

* angular 6.0.0+
* [ngx-cookie](https://github.com/salemdar/ngx-cookie) 4.0.0+
* typescript 3.5+

## ⚙️ Installation

with npm:

```shell
npm install @ordercloud/angular-sdk --save
```

or

with yarn:

```shell
yarn add @ordercloud/angular-sdk
```

## Configuration

In your root app module:

```typescript
import { OrderCloudModule, Configuration } from '@ordercloud/angular-sdk';

@NgModule({
  declarations: [...],
  imports: [
    OrderCloudModule.forRoot(() => new Configuration({})),
     ...
  ],
  providers: [...]
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## 🔐 Authentication

We'll need to get a token before we can make any API calls. The SDK offers five different ways of getting a token as part of the [OcAuthService](https://ordercloud-api.github.io/angular-client/classes/ocauthservice).

We'll use the login method for this example.

```typescript
import { OcAuthService, OcTokenService, OcMeService } from '@ordercloud/angular-sdk';

@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...']
})

export class LoginComponent {
  constructor(
    private OcAuthService: OcAuthService,
    private OcTokenService: OcTokenService,
    private OcMeService: OcMeService
  ) { }

  login() {
    let username = 'myUsername';
    let password = 'myPassword123';
    let clientid = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
    let scope = [ 'Shopper' ];

    // login as this user
    return this.OcAuthService.Login(username, password, clientid, scope).subscribe(
        authResponse => {

          // set the access token in the cookies, now any subsequent calls to the api
          // will automatically have this token set in the headers
          this.OcTokenService.SetAccess(authResponse.access_token);

          // make call to get that user's details
          this.OcMeService.Get().subscribe(
            currentUser => {

              // because we set that user's token a OcMeService.Get will return details for that user
              console.log(currentUser)
            }
          )
        }
      );
  }
}
```

## Understanding SDK models

By default, properties of sdk models are required if their Create or Save operation requires them. For example the [`LineItem` model](https://ordercloud-api.github.io/angular-client/interfaces/lineitem) has the properties `ProductID` and `Quantity` required. This is important to know if you need to define an object by type before using it.

```typescript
import { OcLineItemService, LineItem } from 'ordercloud-javascript-sdk';

const lineItem: LineItem = {
  ProductID: 'my-awesome-product', // if this field is missing you get a type error!
  Quantity: 2 // if this field is missing you get a type error!
}
this.OcLineItemService.Create('Outgoing', 'my-order-id', lineItem)
```

This works as expected and ensures a create or save always has the correct required parameters. However, if for example you need to perform a Patch operation (partial update), then you want all of the fields to be optional. To accomplish this you should use Typescript's built-in utility type [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt)

```typescript
import { OcLineItemService, LineItem } from 'ordercloud-javascript-sdk';

const lineItem: Partial<LineItem> = {
  // no type errors even though Quantity and ProductID are missing
  ShippingAddressID: 'my-shipping-address-id'
}
this.OcLineItems.Patch('Outgoing', 'my-order-id', 'my-lineitem-id', lineItem)
```

## 💪 Strongly Typed xp

Extended properties, or xp, is a [platform feature](https://ordercloud.io/features/extended-properties) that allows you to extend the OrderCloud data model. This is modeled in the SDK using (by default) a Typescript [`any`](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) type:

```typescript
const category: Category = {};
category.xp.Featured = true;
```

Even though `Featured` does not exist on the native model, the above code will compile and work just fine with the API. But you don't get any compile-time type-checking.

Alternatively, the SDK provides generic versions of all models that allow you to provide a custom xp type:

```typescript
interface MyCategoryXp {
  Featured?: boolean;
}

const category: Category<MyCategoryXp> = {};
category.xp.Featured = true; // strongly typed!
```

These custom models can then be used when calling any method in the SDK

```typescript
Categories.List<Category<MyCategoryXp>>('mock-catalog-id')
  .then(categoryList => {
    const firstCategory = categoryList.Items[0];
    const isFeatured = firstCategory.xp.Featured; // strongly typed!
  })
```

A common alternative to the above example is to first define a custom class that extends `Category<MyCategoryXp>`

```typescript
interface MyCategoryXp {
  Featured?: boolean;
}

interface MyCategory extends Category<MyCategoryXp> {

}

Categories.List<MyCategory>('mock-catalog-id')
  .then(categoryList => {
    const firstCategory = categoryList.Items[0];
    const isFeatured = firstCategory.xp.Featured; // strongly typed!
  })
```

This is nicer and especially preferable for models like `Order` which have many nested models each with their own `xp` fields that must be defined at the top level. For example: `Order<OrderXp, FromUserXp, BillingAddressXp>`. Declaring those 3 xp types once on a custom `MyOrder` class is far cleaner than declaring them on every call to `OcOrderService.Get` or `OcOrderService.List`.

## 🔍 Filtering

All of the [filtering options](https://ordercloud.io/features/advanced-querying#filtering)  you love from the API are available through the SDK as well. Simply pass in a key/value pair to the filters object on list calls where the `key` is any top-level API model *or* a custom indexed xp value and the `value` is the value you'd like to filter on.

Let's run through a couple scenarios and what the call will look like with the SDK:

My products where `xp.Featured` is `true`

```javascript
this.OcMeService.ListProducts({ filters: { 'xp.Featued': true } })
```

My orders submitted after April 20th, 2018

```javascript
this.OcMeService.ListOrders({ filters: { DateSubmitted: '>2020-04-20' } })
```

Users with the last name starting with Smith:

```javascript
this.OcUserService.List('my-mock-buyerid', { filters: { LastName: 'Smith*' } })
```

Users with the last name starting with Smith *or* users with the last name *ending* with Jones

```javascript
this.OcUserService.List('my-mock-buyerid', { filters: { LastName: 'Smith*|*Jones' } })
```

Products where xp.Color is not red *and* not blue

```javascript
this.OcProductService.List({ filters: { 'xp.Color': ['!red', '!blue'] } })
```

And of course you can mix and match filters to your heart's content.

## 👬 Impersonation

[Impersonation](https://ordercloud.io/features/impersonation) allows a seller user to make an API call on behalf of another user. The SDK enables this in two ways, each tackling different use cases.

The first method we'll talk about is best suited when you need to toggle between just two users during a session. You'll simply get an impersonation token, set it and then use the `As()` method available on every service to flag the SDK that you want to use the the stored token for that call.

```typescript
import { OcAuthService, OcTokenService, OcMeService } from '@ordercloud/angular-sdk';

@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...']
})

export class ImpersonationExample1 {
  constructor(
    private OcAuthService: OcAuthService,
    private OcTokenService: OcTokenService,
    private OcMeService: OcMeService
  ) { }

  impersonate() {
    // set regular token
    const myToken = 'YOUR_TOKEN';
    this.OcTokenService.SetAccess(myToken);

      // set impersonation token
    const myImpersonationToken = 'YOUR_IMPERSONATED_TOKEN'
    this.OcTokenService.SetImpersonation(myImpersonationToken);

    // get products for regular user
    this.OcMeService.ListProducts()
        .subscribe(productList => {
            console.log(productList)
            // get products for impersonated user
            this.OcMeService.As().ListProducts()
                .subscribe(impersonatedProductList => {
                    console.log(impersonatedProductList)
                })
        })
  }
}
```

As you can see this method makes it very easy to toggle between impersonated calls and non-impersonated calls. But what if you have more than two tokens to toggle between? To address that scenario we recommend using the optional `requestOptions.accessToken` parameter. `requestOptions` is available as the last parameter on all sdk methods.

```typescript
import { OcAuthService, OcTokenService, OcMeService } from '@ordercloud/angular-sdk';

@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...']
})

export class ImpersonationExample2 {
  constructor(
    private OcAuthService: OcAuthService,
    private OcTokenService: OcTokenService,
    private OcMeService: OcMeService
  ) { }

  impersonate() {
    const token1 = 'USER1_TOKEN';
    const token2 = 'USER2_TOKEN';
    const token3 = 'USER3_TOKEN';

      // set impersonation token
    const myImpersonationToken = 'YOUR_IMPERSONATED_TOKEN'
    this.OcTokenService.SetImpersonation(myImpersonationToken);

    // get products for first user
    this.OcMeService.ListProducts(null, { accessToken: token1 })
        .subscribe(productList1 => {
            console.log(productList1)

            // get products for second user
            this.OcMeService.ListProducts(null, { accessToken: token2 })
                .subscribe(productList2 => {
                    console.log(productList2)

                    // get products for second user
                     this.OcMeService.ListProducts(null, { accessToken: token3 })
                        .subscribe(productList3 => {
                            console.log(productList3)
                        })
                })
        })
  }
}
```

## Typescript utilities

Various helpers and utilities that may be useful. We also recommend using [Typescript's built-in utilities](https://www.typescriptlang.org/docs/handbook/utility-types.html) when possible.

| Utility                                                                                                               | Description                                                                                                                                                                                                                          |
|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ListPage<T>`](https://ordercloud-api.github.io/angular-client/interfaces/listpage)                       | Takes in a type for the item in the list. For example `ListPage<Order>` will be the type for an order list page.                                                                                                                     |
| [`ListPageWithFacets<T>`]( https://ordercloud-api.github.io/angular-client/interfaces/listpagewithfacets ) | Similar to `ListPage` but for [premium search](https://ordercloud.io/blog/introducing-premium-search) models. For example `ListPageWithFacets<Product>` will be the type for a product list page.                                              |
| [`Searchable<T>`](https://ordercloud-api.github.io/angular-client#searchable)                              | Takes in a [`SearchableEndpoint`](https://ordercloud-api.github.io/angular-client#searchableendpoint) and returns the type for a valid `searchOn` field on list calls. For example `Searchable<'Orders.List'>`.           |
| [`Sortable<T>`](https://ordercloud-api.github.io/angular-client#sortable)                                  | Takes in a [`SortableEndpoint`](https://ordercloud-api.github.io/angular-client#sortableendpoint) and returns the type for a valid `sortBy` field on list calls. For example `Sortable<'Orders.List'>`.                   |
| [`Filters<T>`](https://ordercloud-api.github.io/angular-client#filters)                                    | Takes in an ordercloud model and returns the type for a valid `filter` field on list calls. For example `Filters<Product>`. This also works for any custom models that extend an OrderCloud model, for example `Filters<MyProduct>`. |
| [`PartialDeep<T>`](https://ordercloud-api.github.io/angular-client#partialdeep)                            | Similar to Typescript's [`Partial<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialt) except works on nested properties as well.                                                                          |
| [`RequiredDeep<T>`]( https://ordercloud-api.github.io/angular-client#requireddeep )                        | Similar to Typescript's [`Required<T>`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredt) except works on nested properties as well.                                                                        |
| [`DecodedToken`](https://ordercloud-api.github.io/angular-client/interfaces/decodedtoken)                  | A type representing a decoded OrderCloud token                                                                                                                                                                                       |                                                                                                                                                                         |

## 📄 License

OrderCloud's Angular SDK is an open-sourced software licensed under the [MIT license](./LICENSE).

## 🤝 Contributing

Check out our [Contributing](./CONTRIBUTING.md) guide.

## 🆘 Getting Help

If you're new to OrderCloud, exploring the [documentation](https://ordercloud.io/) is recommended, especially the [Intro to OrderCloud](https://ordercloud.io/getting-started/intro-to-ordercloud).

For programming questions, please [ask](https://stackoverflow.com/questions/ask?tags=ordercloud) on Stack Overflow.

To report a bug or request a feature specific to the SDK, please open an [issue](https://github.com/ordercloud-api/angular-client/issues/new).
