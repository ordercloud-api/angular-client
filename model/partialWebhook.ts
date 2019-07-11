/**
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { WebhookRoute } from './webhookRoute';


export interface PartialWebhook {
    ID?: string;
    Name?: string;
    Description?: string;
    Url?: string;
    HashKey?: string;
    ElevatedRoles?: Array<string>;
    ConfigData?: any;
    BeforeProcessRequest?: boolean;
    ApiClientIDs?: Array<string>;
    WebhookRoutes?: Array<WebhookRoute>;
}
