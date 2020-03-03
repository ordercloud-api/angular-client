/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SpecOption } from './specOption';


export interface PartialSpec<SpecXp = any, SpecOptionXp = any> {
    ID?: string;
    ListOrder?: number;
    Name?: string;
    DefaultValue?: string;
    Required?: boolean;
    AllowOpenText?: boolean;
    DefaultOptionID?: string;
    DefinesVariant?: boolean;
    xp?: SpecXp;
    OptionCount?: number;
    Options?: Array<SpecOption<SpecOptionXp>>;
}
