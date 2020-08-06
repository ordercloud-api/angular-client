export interface ConfigurationParameters {
    /**
     * The apiurl that will be used to talk to the ordercloud API.
     * It may be useful to change this to interact with different environments
     *
     * Defaults to: https://api.ordercloud.io
     */
    baseApiUrl?: string;

    /**
     * At the time of writing there is only one version of the API
     *
     * Defaults to: v1
     */
    apiVersion?: string;

    /**
     * this cookie prefix will be added to the name of any tokens created
     * in the sdk check out the token service for all methods
     */
    cookiePrefix?: string;
}

export class Configuration {
    basePath?: string;
    authPath?: string;
    cookiePrefix?: string;

    constructor(configurationParameters: ConfigurationParameters = {}) {
        this.basePath = `${configurationParameters.baseApiUrl}/${configurationParameters.apiVersion}`;
        this.authPath = `${configurationParameters.baseApiUrl}/oauth/token`;
        this.cookiePrefix = configurationParameters.cookiePrefix;
    }
}
