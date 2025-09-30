import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({ providedIn: 'root' })
export class LanguageStore {
  private readonly translate = inject(TranslateService);
  private readonly supportedLanguages = ['en', 'es'] as const;
  private readonly currentLanguageSignal = signal<string>('en');

  readonly language: Signal<string> = computed(() => this.currentLanguageSignal());


  readonly languages: Signal<readonly string[]> = computed(() => this.supportedLanguages);

  constructor() {
    const initialLanguage =
      this.translate.currentLang ?? this.translate.defaultLang ?? this.supportedLanguages[0];
    this.currentLanguageSignal.set(initialLanguage);
    this.translate.use(initialLanguage);
  }


  setLanguage(locale: string): void {
    if (!this.supportedLanguages.includes(locale as (typeof this.supportedLanguages)[number])) {
      return;
    }
    this.currentLanguageSignal.set(locale);
    this.translate.use(locale);
  }
}
