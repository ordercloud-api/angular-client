/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface Promotion {
    ID?: string;
    Code?: string;
    Name?: string;
    RedemptionLimit?: number;
    RedemptionLimitPerUser?: number;
    RedemptionCount?: number;
    Description?: string;
    FinePrint?: string;
    StartDate?: string;
    ExpirationDate?: string;
    EligibleExpression?: string;
    ValueExpression?: string;
    CanCombine?: boolean;
    xp?: any;
}
