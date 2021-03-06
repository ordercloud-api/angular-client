import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie'
import { Configuration } from '../Configuration'

@Injectable({
  providedIn: 'root',
})
export class OcTokenService {
  private authTokenCookieName: string
  private impersonationTokenCookieName: string
  private refreshTokenCookieName: string

  constructor(
    private configuration: Configuration,
    private cookies: CookieService
  ) {
    const cookiePrefix = this.configuration.cookiePrefix || 'ordercloud'

    this.authTokenCookieName = cookiePrefix + '.token'
    this.impersonationTokenCookieName = cookiePrefix + '.impersonation.token'
    this.refreshTokenCookieName = cookiePrefix + '.refresh.token'
  }

  public GetAccess() {
    return this.cookies.get(this.authTokenCookieName)
  }

  public SetAccess(token: string) {
    this.cookies.put(this.authTokenCookieName, token)
  }

  public RemoveAccess() {
    this.cookies.remove(this.authTokenCookieName)
  }

  public GetImpersonation() {
    return this.cookies.get(this.impersonationTokenCookieName)
  }

  public SetImpersonation(token: string) {
    this.cookies.put(this.impersonationTokenCookieName, token)
  }

  public RemoveImpersonation() {
    this.cookies.remove(this.impersonationTokenCookieName)
  }

  public GetRefresh() {
    return this.cookies.get(this.refreshTokenCookieName)
  }

  public SetRefresh(token: string) {
    return this.cookies.put(this.refreshTokenCookieName, token)
  }
}
