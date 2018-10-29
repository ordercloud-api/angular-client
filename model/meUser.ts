/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MeBuyer } from './meBuyer';
import { MeSupplier } from './meSupplier';


export interface MeUser<MeUserXp = any> {
    Buyer?: MeBuyer;
    Supplier?: MeSupplier;
    ID?: string;
    Username?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Phone?: string;
    TermsAccepted?: string;
    Active?: boolean;
    xp?: MeUserXp;
    AvailableRoles?: Array<string>;
}
