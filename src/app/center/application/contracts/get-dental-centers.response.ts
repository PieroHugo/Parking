import { DentalCenter } from '../../domain/entities/dental-center.entity';

export interface GetDentalCentersResponse {
  readonly centers: DentalCenter[];
}
