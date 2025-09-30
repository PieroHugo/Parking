export interface DentalCenterResponseDto {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly address: string;
  readonly city: string;
  readonly state: string;
  readonly postal_code: string;
  readonly longitude: number;
  readonly latitude: number;
  readonly phone: string;
  readonly email: string;
  readonly image_url: string;
  readonly website: string;
}
