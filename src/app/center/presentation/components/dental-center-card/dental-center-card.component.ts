import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { DentalCenter } from '../../../domain/entities/dental-center.entity';
import { ShareService } from '../../../../shared/application/services/share.service';

@Component({
  selector: 'app-dental-center-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatSnackBarModule, NgIf, TranslateModule],
  templateUrl: './dental-center-card.component.html',
  styleUrl: './dental-center-card.component.css'
})
export class DentalCenterCardComponent {
  private readonly shareService = inject(ShareService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly translate = inject(TranslateService);

  @Input({ required: true }) center!: DentalCenter;


  async share(event: MouseEvent): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    try {
      const action = await this.shareService.shareResource({
        title: this.center.name,
        text: this.center.description,
        url: this.center.website || this.center.buildGoogleMapsUrl()
      });
      const messageKey =
        action === 'shared' ? 'catalogue.notifications.shared' : 'catalogue.notifications.copied';
      const message = this.translate.instant(messageKey, { name: this.center.name });
      this.snackBar.open(message, undefined, { duration: 3000 });
    } catch (error) {
      const message = this.translate.instant('catalogue.notifications.error');
      this.snackBar.open(message, undefined, { duration: 4000 });
      console.error('Share not supported', error);
    }
  }
}
