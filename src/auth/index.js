import { createAuth0 } from "@auth0/auth0-vue";

export default function initAuth (app) {
    app.use(
        createAuth0({
            domain: "dev-yqne2f86vz7fs1zt.us.auth0.com",
            clientId: "HjI2MtPaYGXQxi90D5fj61W94oI30pKq",
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        })
    );
}