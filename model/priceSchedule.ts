/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PriceBreak } from './priceBreak';


export interface PriceSchedule {
    ID?: string;
    Name?: string;
    ApplyTax?: boolean;
    ApplyShipping?: boolean;
    MinQuantity?: number;
    MaxQuantity?: number;
    UseCumulativeQuantity?: boolean;
    RestrictedQuantity?: boolean;
    PriceBreaks?: Array<PriceBreak>;
    xp?: any;
}
