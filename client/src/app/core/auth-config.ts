import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/realms/finvest',
    clientId: 'angularspaclient', // The "Auth Code + PKCE" client
    responseType: 'code',
    redirectUri: window.location.origin + '/',
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    scope: 'openid profile email offline_access', // api Ask offline_access to support refresh token refreshes
    useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
    silentRefreshTimeout: 5000, // For faster testing
    timeoutFactor: 0.25, // For faster testing
    sessionChecksEnabled: true,
    showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
    nonceStateSeparator: 'semicolon' // Real semicolon gets mangled by Duende ID Server's URI encoding

    // original
    // issuer: 'http://localhost:8080/realms/myrealm',
    // clientId: 'angularspaclient', // The "Auth Code + PKCE" client
    // responseType: 'code',
    // redirectUri: window.location.origin + '/',
    // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    // scope: 'openid profile email api offline_access', // Ask offline_access to support refresh token refreshes
    // useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
    // silentRefreshTimeout: 5000, // For faster testing
    // timeoutFactor: 0.25, // For faster testing
    // sessionChecksEnabled: true,
    // showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    // clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
    // nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by Duende ID Server's URI encoding
};
