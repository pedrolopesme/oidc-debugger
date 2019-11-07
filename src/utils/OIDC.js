import * as Oidc from 'oidc-client'

// Integration Types
const AUTH_CODE = "Authorization Code Flow",
      HYBRID = "Hybrid Flow",
      IMPLICITY = "Implicit Flow";


/**
 * OIDC client lib wrapper
 */
export class OIDC {
    connect = (connection) => {
        Oidc.Log.logger = console;
        Oidc.Log.level = Oidc.Log.INFO;
        var client = new Oidc.OidcClient(connection);

        client.createSigninRequest({ state: { bar: 15 } }).then(function(req) {
            window.location = req.url;
        }).catch(function(err) {
            console.error(err);
        });
    }
};

/**
 * Calculates the type of integration (implicity, hybrid, auth code) based on 
 * response types. 
 */
export function IntegrationType(code=false, token=false, idtoken=false){
    if (idtoken && !code && !token) return IMPLICITY;
    if (!idtoken && code && !token) return IMPLICITY;
    if (!idtoken && code && token)  return IMPLICITY;
    if (!idtoken && code && !token) return AUTH_CODE;
    return HYBRID;
};
