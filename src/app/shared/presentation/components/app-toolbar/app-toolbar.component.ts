import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageStore } from '../../../application/state/language.store';
import { APP_CONFIGURATION } from '../../../infrastructure/config/app-configuration.token';

@Component({
  selector: 'app-shared-toolbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbarModule, MatButtonToggleModule, NgFor, TranslateModule],
  templateUrl: './app-toolbar.component.html',
  styleUrl: './app-toolbar.component.css'
})
export class AppToolbarComponent {
  private readonly languageStore = inject(LanguageStore);
  private readonly configuration = inject(APP_CONFIGURATION);

  /** Resolves the url for the Heartland Dental logo exposed by the Logo.dev API. */
  readonly logoUrl = computed(() => {
    const { domain, token } = this.configuration.logo;
    const tokenQuery = token ? `?token=${token}` : '';
    return `https://img.logo.dev/${domain}${tokenQuery}`;
  });


  readonly languages = this.languageStore.languages;

  readonly selectedLanguage = this.languageStore.language;


  onLanguageChange(change: MatButtonToggleChange): void {
    if (change.value) {
      this.languageStore.setLanguage(change.value);
    }
  }
}
