/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Meta } from './meta';
import { PriceSchedule } from './priceSchedule';


export interface ListPriceSchedule<PriceScheduleXp = any> {
    Items?: Array<PriceSchedule<PriceScheduleXp>>;
    Meta?: Meta;
}
