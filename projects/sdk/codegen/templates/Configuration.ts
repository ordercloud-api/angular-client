export interface ConfigurationParameters {
    /**
     * the path that will be used to talk to the ordercloud api
     * this defaults to https://api.ordercloud.io/v1 
     * 
     * it may be useful to change this to interact with different
     * environments or different versions of the api
     * 
     * at the time of writing there is only one version of the api
     * 
     */
    basePath?: string;

    /**
     * the path that will be used to authenticate to the ordercloud api
     * this defaults to https://auth.ordercloud.io/oauth/token
     * 
     * if may be useful to change this to interact with different
     * environments
     * 
     */
    authPath?: string;

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
        this.basePath = configurationParameters.basePath;
        this.authPath = configurationParameters.authPath;
        this.cookiePrefix = configurationParameters.cookiePrefix;
    }
}
