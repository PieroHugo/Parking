import { Injectable } from '@angular/core';

import { DentalCenter } from '../../domain/entities/dental-center.entity';
import { DentalCenterResponseDto } from '../dto/dental-center-response.dto';

const DEFAULT_CENTER_IMAGE =
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80';

@Injectable({ providedIn: 'root' })
export class DentalCenterAssembler {

  toEntity(dto: DentalCenterResponseDto): DentalCenter {
    return new DentalCenter(
      dto.id,
      dto.name,
      dto.description,
      dto.address,
      dto.city,
      dto.state,
      dto.postal_code,
      dto.longitude,
      dto.latitude,
      dto.phone,
      dto.email,
      dto.image_url || DEFAULT_CENTER_IMAGE,
      dto.website
    );
  }

  toEntities(dtos: readonly DentalCenterResponseDto[]): DentalCenter[] {
    return dtos.map((dto) => this.toEntity(dto));
  }
}
