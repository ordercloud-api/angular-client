import { PublicKey } from '../models/PublicKey';
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
export class OcCertService {
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
    * Get a single cert public key. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/certs/get-public-key|api docs} for more info 
    * 
    * @param ID ID of the public key.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public GetPublicKey<TPublicKey extends PublicKey>(ID: string, requestOptions: RequestOptions = {} ): Observable<RequiredDeep<TPublicKey>>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!ID) throw new Error('Required parameter ID was null or undefined when calling Certs.GetPublicKey')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.get<any>(`${this.basePath}oauth/certs/${ID}`, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Certs.As().List() // lists Certs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}