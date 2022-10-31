import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class DummyService {
  constructor(private oAuthService: OAuthService) {}

  getIdentityClaims(): object {
    return this.oAuthService.getIdentityClaims();
  }
}
