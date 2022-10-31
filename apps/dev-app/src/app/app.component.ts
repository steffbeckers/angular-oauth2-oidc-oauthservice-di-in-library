import { DummyService } from '@angular-oauth2-oidc-oauthservice-di-in-library/dev-lib';
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'angular-oauth2-oidc-oauthservice-di-in-library-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public oAuthService: OAuthService, public dummyService: DummyService) {
    // https://github.com/manfredsteyer/angular-oauth2-oidc#logging-in
    this.oAuthService.configure({
      // Url of the Identity Provider
      issuer: 'https://idsvr4.azurewebsites.net',

      // URL of the SPA to redirect the user to after login
      redirectUri: window.location.origin + '/index.html',

      // The SPA's id. The SPA is registerd with this id at the auth-server
      // clientId: 'server.code',
      clientId: 'spa',

      // Just needed if your auth server demands a secret. In general, this
      // is a sign that the auth server is not configured with SPAs in mind
      // and it might not enforce further best practices vital for security
      // such applications.
      // dummyClientSecret: 'secret',
      responseType: 'code',

      // set the scope for the permissions the client should request
      // The first four are defined by OIDC.
      // Important: Request offline_access to get a refresh token
      // The api scope is a usecase specific one
      scope: 'openid profile email offline_access api',

      showDebugInformation: true
    });
  }

  async ngOnInit() {
    await this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initLoginFlow();
  }

  logout() {
    this.oAuthService.logOut();
  }

  test() {
    this.dummyService.getIdentityClaims();
  }
}
