## OrderCloud Angular SDK v0.0.0-alpha

[OrderCloud](https://developer.ordercloud.io/documentation/) is a cloud-hosted B2B eCommerce platform exposed entirely via a RESTful API.

This package is an SDK for OrderCloud's API written in Angular 4.3+ (Typescript). All of the methods are a 1:1 reflection of the API with
the addition of the AuthService for authentication and the TokenService exposed as a convenience service for storing and getting authentication tokens.

Use of this SDK assumes basic understanding of the API. If you're not quite there yet, no problem! Level up by reading up on [our docs](https://developer.ordercloud.io/documentation/)

### Acknowledgement

This Angular SDK is made possible by leveraging the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project.

### Requirements
Dependencies for this SDK are defined as peer-dependencies. For the uninitiated this simply means that npm will not install them for you, and
they must be installed separately. This ensures that those packages will continue working should you use them independent of the SDK.

Not to worry though, as long as you have installed at least Angular 4.3 the only other dependency you should have to worry about is 
angular2-cookie(^1.2.6) which is used by the TokenService to store auth tokens.


### Installation

From the npm registry:

```
npm install --save @ordercloud/angular-sdk
```

### Configuration

In your root app module:

```javascript
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

### Your first API call

Now that your app is configured you can authenticate and make your
first api call!

```javascript
import { AuthService, TokenService, MeService } from '@ordercloud/angular-sdk';

@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...']
})

export class LoginComponent {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private meService: MeService
  ) { }

  login() {
    let username = 'myUsername';
    let password = 'myPassword123';
    let clientid = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
    let scope = [ 'Shopper' ];

    // login as this user
    return this.authService.Login(username, password, clientid, scope).subscribe(
        authResponse => {
          
          // set the access token in the cookies, now any subsequent calls to the api
          // will automatically have this token set in the headers
          this.tokenService.SetAccess(authResponse.access_token);

          // make call to get that user's details
          this.meService.Get().subscribe(
            currentUser => {

              // because we set that user's token a meService.Get will return details for that user
              console.log(currentUser)
            }
          )
        }
      );
  }
}
```

### Impersonation

Impersonation allows a seller user to make an api call on behalf of another user. The SDK enables this by exposing the
`As()` method for each service. 

Assuming you are already authenticated and have the required ImpersonationConfigs set up for your organization, 
an impersonation call will look something like this:

```javascript
import { AuthService, TokenService, MeService } from '@ordercloud/angular-sdk';

@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...']
})

export class ImpersonationExample {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private meService: MeService
  ) { }

  impersonate() {
    const impersonationRequest = {
      ClientID: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', // clientid of the user to impersonate
      Roles: ['Shopper'] // roles you are requesting
    };
    this.userService.GetAccessToken('examplebuyerid', 'exampleuserid', impersonationRequest)
      .subscribe(response => {
        // store impersonation token, any impersonation calls will now use this token
        this.tokenService.setImpersonation(response.access_token);
        this.meService.As().Get()
          .subscribe(impersonatedUser => {
            console.log(impersonatedUser);
          });

      });
  }
}
```

### Http Responses
This SDK takes advantage of the newer version of the [HTTP service](https://blog.angularindepth.com/the-new-angular-httpclient-api-9e5c85fe3361) introduced in Angular 4.3

Every method can be configured with `observe` and `reportProgress` by setting their values in the options object. If omitted they will default to `'body'` and `false` respectively.

### Getting Help

The [API reference](https://developer.ordercloud.io/documentation/api-reference/) should be your go to reference but if you get stuck or have some feedback about
this SDK please drop us a line on our [community slack channel](https://developer.ordercloud.io/documentation/) or ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/ordercloud)
just use the tag `ordercloud`.


### Contributing

Because this SDK is generated with the help of the swagger codegen we can't accept PR's on this project directly (as they would simply get overwritten when regenerated).
Instead, please check out how to contribute on our swagger and swagger codegen repositories for PR's.

If you see any typo's or have any general feedback please let us know. We really want to make this an easy to use and understand SDK!