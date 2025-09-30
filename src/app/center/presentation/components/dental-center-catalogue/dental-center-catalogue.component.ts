import { ChangeDetectionStrategy, Component, OnInit, computed, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';

import { DentalCenterStore } from '../../../application/state/dental-center.store';
import { DentalCenter } from '../../../domain/entities/dental-center.entity';
import { DentalCenterCardComponent } from '../dental-center-card/dental-center-card.component';

@Component({
  selector: 'app-dental-center-catalogue',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, MatProgressSpinnerModule, TranslateModule, DentalCenterCardComponent],
  templateUrl: './dental-center-catalogue.component.html',
  styleUrl: './dental-center-catalogue.component.css'
})
export class DentalCenterCatalogueComponent implements OnInit {
  private readonly store = inject(DentalCenterStore);

  readonly isLoading = computed(() => this.store.status() === 'loading');
  readonly hasError = computed(() => this.store.status() === 'error');
  readonly centers = this.store.centers;
  readonly error = this.store.error;

  ngOnInit(): void {
    void this.store.loadCenters();
  }

  trackByCenter(index: number, center: DentalCenter): string {
    return center.id ?? `${index}`;
  }
}
