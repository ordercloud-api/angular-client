/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface ApiClient<ApiClientXp = any> {
    ID?: string;
    ClientSecret?: string;
    AccessTokenDuration?: number;
    Active?: boolean;
    AppName?: string;
    RefreshTokenDuration?: number;
    DefaultContextUserName?: string;
    xp?: ApiClientXp;
    AllowAnyBuyer?: boolean;
    AllowAnySupplier?: boolean;
    AllowSeller?: boolean;
    IsAnonBuyer?: boolean;
    AssignedBuyerCount?: number;
    AssignedSupplierCount?: number;
    OrderCalculateIntegrationEventID?: string;
    OrderCalculateIntegrationEventName?: string;
}
