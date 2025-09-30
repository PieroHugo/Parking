import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppToolbarComponent } from './shared/presentation/components/app-toolbar/app-toolbar.component';
import { AppFooterComponent } from './shared/presentation/components/app-footer/app-footer.component';
import { DentalCenterCatalogueComponent } from './center/presentation/components/dental-center-catalogue/dental-center-catalogue.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppToolbarComponent, AppFooterComponent, DentalCenterCatalogueComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
