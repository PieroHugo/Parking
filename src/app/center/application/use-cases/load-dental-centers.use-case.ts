import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { DentalCenterAssembler } from '../../infrastructure/assemblers/dental-center.assembler';
import { DentalCenterResource } from '../../infrastructure/resources/dental-center.resource';
import { GetDentalCentersResponse } from '../contracts/get-dental-centers.response';
import { APP_CONFIGURATION } from '../../../shared/infrastructure/config/app-configuration.token';

@Injectable({ providedIn: 'root' })
export class LoadDentalCentersUseCase {
  private readonly resource = inject(DentalCenterResource);
  private readonly assembler = inject(DentalCenterAssembler);
  private readonly configuration = inject(APP_CONFIGURATION);


  async execute(): Promise<GetDentalCentersResponse> {
    const apiKey = this.configuration.heartlandApi.apiKey;
    if (!apiKey) {
      throw new Error('Heartland Dental API key is not configured.');
    }
    const dtos = await firstValueFrom(this.resource.fetchCenters({ apiKey }));
    const centers = this.assembler.toEntities(dtos);
    return { centers };
  }
}
