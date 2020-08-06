import { Injectable, Optional } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Configuration } from "../Configuration";
import { AccessToken } from "../models/AccessToken";
import { ApiRole } from "../models/ApiRole";
const encode = encodeURIComponent;

@Injectable({
  providedIn: "root",
})
export class OcAuthService {
  protected authPath = "https://api.ordercloud.io/oauth/token";
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() configuration: Configuration
  ) {
    if (configuration && configuration.authPath) {
      this.authPath = configuration.authPath;
    }
  }

  /**
   * this workflow is most appropriate for client apps where user is a human, ie a registered user
   *
   * @param username of the user logging in
   * @param password of the user logging in
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   */
  public Login(
    username: string,
    password: string,
    clientID: string,
    scope: ApiRole[]
  ): Observable<Required<AccessToken>> {
    if (!username) {
      throw new Error(
        "Required parameter username was null or undefined when calling _login."
      );
    }
    if (!password) {
      throw new Error(
        "Required parameter password was null or undefined when calling _login."
      );
    }
    if (!clientID) {
      throw new Error(
        "Required parameter clientID was null or undefined when calling _login."
      );
    }
    if (!scope) {
      throw new Error(
        "Required parameter scope was null or undefined when calling _login."
      );
    }

    const authRequest = `grant_type=password&scope=${encode(
      scope.join(" ")
    )}&client_id=${clientID}&username=${encode(username)}&password=${encode(
      password
    )}`;
    return this.httpClient.post<Required<AccessToken>>(
      this.authPath,
      authRequest
    );
  }

  /**
   * similar to login except client secret is also required, adding another level of security
   *
   * @param clientSecret of the application
   * @param username of the user logging in
   * @param password of the user logging in
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   */
  public ElevatedLogin(
    clientSecret: string,
    username: string,
    password: string,
    clientID: string,
    scope: ApiRole[]
  ): Observable<Required<AccessToken>> {
    if (!clientSecret) {
      throw new Error(
        "Required parameter clientSecret was null or undefined when calling ElevatedLogin."
      );
    }
    if (!username) {
      throw new Error(
        "Required parameter username was null or undefined when calling ElevatedLogin."
      );
    }
    if (!password) {
      throw new Error(
        "Required parameter password was null or undefined when calling ElevatedLogin."
      );
    }
    if (!clientID) {
      throw new Error(
        "Required parameter clientID was null or undefined when calling ElevatedLogin."
      );
    }
    if (!scope) {
      throw new Error(
        "Required parameter scope was null or undefined when calling ElevatedLogin."
      );
    }

    const authRequest = `grant_type=client_credentials&scope=${encode(
      scope.join(" ")
    )}&client_id=${clientID}&username=${encode(username)}&password=${encode(
      password
    )}&client_secret=${encode(clientSecret)}`;
    return this.httpClient.post<Required<AccessToken>>(
      this.authPath,
      authRequest
    );
  }

  /**
   * this workflow is best suited for a backend system
   *
   * @param clientSecret of the application
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   */
  public ClientCredentials(
    clientSecret: string,
    clientID: string,
    scope: ApiRole[]
  ): Observable<Required<AccessToken>> {
    if (!clientSecret) {
      throw new Error(
        "Required parameter clientSecret was null or undefined when calling ElevatedLogin."
      );
    }
    if (!clientID) {
      throw new Error(
        "Required parameter clientID was null or undefined when calling ElevatedLogin."
      );
    }
    if (!scope) {
      throw new Error(
        "Required parameter scope was null or undefined when calling ElevatedLogin."
      );
    }

    const authRequest = `grant_type=password&scope=${encode(
      scope.join(" ")
    )}&client_id=${clientID}&client_secret=${encode(clientSecret)}`;
    return this.httpClient.post<Required<AccessToken>>(
      this.authPath,
      authRequest
    );
  }

  /**
   * extend your users' session by getting a new access token with a refresh token. refresh tokens must be enabled in the dashboard
   *
   * @param refreshToken of the application
   * @param clientID of the application the user is logging into
   */
  public RefreshToken(
    refreshToken: string,
    clientID: string
  ): Observable<Required<AccessToken>> {
    if (!refreshToken) {
      throw new Error(
        "Required parameter refreshToken was null or undefined when calling RefreshToken."
      );
    }
    if (!clientID) {
      throw new Error(
        "Required parameter clientID was null or undefined when calling ElevatedLogin."
      );
    }
    const authRequest = `grant_type=refresh_token&client_id=${clientID}&refresh_token=${refreshToken}`;
    return this.httpClient.post<Required<AccessToken>>(
      this.authPath,
      authRequest
    );
  }

  /**
   * allow users to browse your catalog without signing in - must have anonymous template user set in dashboard
   *
   * @param clientID of the application the user is logging into
   * @param scope roles being requested - space delimited string or array
   */
  public Anonymous(
    clientID: string,
    scope: ApiRole[]
  ): Observable<AccessToken> {
    if (!clientID) {
      throw new Error(
        "Required parameter clientID was null or undefined when calling ElevatedLogin."
      );
    }
    if (!scope) {
      throw new Error(
        "Required parameter scope was null or undefined when calling ElevatedLogin."
      );
    }

    const authRequest = `grant_type=client_credentials&client_id=${clientID}&scope=${encode(
      scope.join(" ")
    )}`;
    return this.httpClient.post<AccessToken>(this.authPath, authRequest);
  }
}
