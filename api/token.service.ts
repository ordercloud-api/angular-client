/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Injectable, Optional }                              from '@angular/core';
import { CookieService }                                     from 'ngx-cookie';
import { Configuration }                                     from '../configuration';


@Injectable({
    providedIn: 'root'
})
export class OcTokenService {

    private authTokenCookieName: string;
    private impersonationTokenCookieName: string;
    private refreshTokenCookieName: string;


    constructor( @Optional() configuration: Configuration, protected cookies: CookieService) {
        const cookiePrefix = configuration.cookiePrefix || 'ordercloud';

        this.authTokenCookieName = cookiePrefix + '.token';
        this.impersonationTokenCookieName = cookiePrefix + '.impersonation.token';
        this.refreshTokenCookieName = cookiePrefix + '.refresh.token';
    }

    public GetAccess() {
        return this.cookies.get(this.authTokenCookieName);
    }

    public SetAccess(token: string) {
        this.cookies.put(this.authTokenCookieName, token)
    }

    public RemoveAccess() {
        this.cookies.remove(this.authTokenCookieName);
    }

    public GetImpersonation() {
        return this.cookies.get(this.impersonationTokenCookieName);
    }

    public SetImpersonation(token: string) {
        this.cookies.put(this.impersonationTokenCookieName, token);
    }

    public RemoveImpersonation() {
        this.cookies.remove(this.impersonationTokenCookieName);
    }

    public GetRefresh() {
        return this.cookies.get(this.refreshTokenCookieName);
    }

    public SetRefresh(token: string) {
        return this.cookies.put(this.refreshTokenCookieName, token);
    }
}