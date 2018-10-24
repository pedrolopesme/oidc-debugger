export const Connections = [
    {
        name: "GloboID DEV",
        connection: {
            authority: "https://globoid-connect.be.dev.globoi.com/auth/realms/globo.com",
            client_id: "client-dev",
            redirect_uri: "http://localhost:8080/redirect",
            post_logout_redirect_uri: "http://localhost:8080/logout",
            response_type: "id_token token",
            scope: "openid tester",
            filterProtocolClaims: true,
            loadUserInfo: true
        }
    }
]; 