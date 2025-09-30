import { Injectable, Signal, computed, inject, signal } from '@angular/core';

import { DentalCenter } from '../../domain/entities/dental-center.entity';
import { LoadDentalCentersUseCase } from '../use-cases/load-dental-centers.use-case';

type LoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

@Injectable({ providedIn: 'root' })
export class DentalCenterStore {
  private readonly loadUseCase = inject(LoadDentalCentersUseCase);

  private readonly centersSignal = signal<DentalCenter[]>([]);
  private readonly statusSignal = signal<LoadStatus>('idle');
  private readonly errorSignal = signal<string | null>(null);
  readonly centers: Signal<DentalCenter[]> = computed(() => this.centersSignal());
  readonly status: Signal<LoadStatus> = computed(() => this.statusSignal());
  readonly error: Signal<string | null> = computed(() => this.errorSignal());
  async loadCenters(): Promise<void> {
    this.statusSignal.set('loading');
    this.errorSignal.set(null);
    try {
      const response = await this.loadUseCase.execute();
      this.centersSignal.set(response.centers);
      this.statusSignal.set('loaded');
    } catch (error) {
      console.error('Unable to load dental centers', error);
      this.centersSignal.set([]);
      this.statusSignal.set('error');
      this.errorSignal.set('catalogue.errors.load');
    }
  }
}
