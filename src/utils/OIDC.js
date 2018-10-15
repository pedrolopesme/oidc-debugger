
import * as Oidc from 'oidc-client';

class OIDC {
    connect = () => {
        Oidc.Log.logger = console;
        Oidc.Log.level = Oidc.Log.INFO;

        var settings = {
            authority: 'https://globoid-connect.be.dev.globoi.com/auth/realms/globo.com',
            client_id: 'client-dev',
            redirect_uri: 'http://localhost:3000/redirect',
            post_logout_redirect_uri: 'http://localhost:3000/logout',
            response_type: 'id_token token',
            scope: 'openid tester',

            filterProtocolClaims: true,
            loadUserInfo: true
        };

        var client = new Oidc.OidcClient(settings);

        client.createSigninRequest({ state: { bar: 15 } }).then(function(req) {
            console.log("signin request", req.url, req);
            window.location = req.url;
        }).catch(function(err) {
            console.error(err);
        });

    }

}

export default OIDC;