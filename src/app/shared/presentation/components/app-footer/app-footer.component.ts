import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * @summary Displays footer information required by the Heartland Dental guidelines.
 * @author Piero Elescano
 */
@Component({
  selector: 'app-shared-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.css'
})
export class AppFooterComponent {}
