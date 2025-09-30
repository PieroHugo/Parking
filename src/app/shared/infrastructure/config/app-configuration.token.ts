import { InjectionToken } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { AppConfiguration } from '../../domain/models/app-configuration';

export const APP_CONFIGURATION = new InjectionToken<AppConfiguration>('APP_CONFIGURATION', {
  providedIn: 'root',
  factory: () => environment satisfies AppConfiguration ? environment : (environment as AppConfiguration)
});
