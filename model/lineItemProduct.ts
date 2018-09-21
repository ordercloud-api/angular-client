/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface LineItemProduct<ProductXp = any> {
    ID?: string;
    Name?: string;
    Description?: string;
    QuantityMultiplier?: number;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    xp?: ProductXp;
}
