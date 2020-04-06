import { PasswordResetRequest } from '../models/PasswordResetRequest';
import { PasswordReset } from '../models/PasswordReset';
import { Optional, Injectable } from '@angular/core';
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
export class OcForgottenPasswordService {
    protected basePath = 'https://api.ordercloud.io/v1';
    private impersonating = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor(protected httpClient: HttpClient, protected ocTokenService: OcTokenService,  @Optional() configuration: Configuration) {
        if (configuration) {
            this.basePath = configuration.basePath || this.basePath;
        }
    }

   /**
    * Send a verification code. Sends a temporary verification code via email, which must subsequently be passed in a Reset Password call.
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/forgotten-password/send-verification-code|api docs} for more info 
    * 
    * @param passwordResetRequest Required fields: ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public SendVerificationCode(passwordResetRequest: PasswordResetRequest,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.post<any>(`${this.basePath}/password/reset`, passwordResetRequest, {
            headers
        })
    }

   /**
    * Reset a password by verification code. 
    * Check out the {@link https://ordercloud.io/api-reference/authentication-and-authorization/forgotten-password/reset-password-by-verification-code|api docs} for more info 
    * 
    * @param verificationCode Verification code of the password reset.
    * @param passwordReset Required fields: ClientID
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public ResetPasswordByVerificationCode(verificationCode: string, passwordReset: PasswordReset,requestOptions: RequestOptions = {} ): Observable<void>{
        const impersonating = this.impersonating;
        this.impersonating = false;

        if(!verificationCode) throw new Error('Required parameter verificationCode was null or undefined when calling PasswordResets.ResetPasswordByVerificationCode')
        

        let headers = new HttpHeaders();
        const token = requestOptions.accessToken || (impersonating ? this.ocTokenService.GetImpersonation() : this.ocTokenService.GetAccess())
        headers = headers.set(
            'Authorization', 
            'Bearer ' + token
        );
        return this.httpClient.put<any>(`${this.basePath}/password/reset/${verificationCode}`, passwordReset, {
            headers
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ForgottenPassword.As().List() // lists ForgottenPassword using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}