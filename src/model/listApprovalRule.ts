/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ApprovalRule } from './approvalRule';
import { Meta } from './meta';


export interface ListApprovalRule<ApprovalRuleXp = any> {
    Items?: Array<ApprovalRule<ApprovalRuleXp>>;
    Meta?: Meta;
}