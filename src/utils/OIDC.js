import * as Oidc from 'oidc-client'

// TODO refactor
class OIDC {
    connect = (connection) => {
        Oidc.Log.logger = console;
        Oidc.Log.level = Oidc.Log.INFO;
        var client = new Oidc.OidcClient(connection);

        client.createSigninRequest({ state: { bar: 15 } }).then(function(req) {
            console.log("signin request", req.url, req);
            window.location = req.url;
        }).catch(function(err) {
            console.error(err);
        });

    }

}

export default OIDC;