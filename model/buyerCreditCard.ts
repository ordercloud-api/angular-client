/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface BuyerCreditCard<BuyerCreditCardXp = any> {
    ID?: string;
    Editable?: boolean;
    Token?: string;
    DateCreated?: string;
    CardType?: string;
    PartialAccountNumber?: string;
    CardholderName?: string;
    ExpirationDate?: string;
    xp?: BuyerCreditCardXp;
}
