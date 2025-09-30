
export class DentalCenter {
  constructor(

    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly address: string,
    public readonly city: string,
    public readonly state: string,
    public readonly postalCode: string,
    public readonly longitude: number,
    public readonly latitude: number,
    public readonly phone: string,
    public readonly email: string,
    public readonly imageUrl: string,
    public readonly website: string
  ) {}

  get fullAddress(): string {
    return [this.address, this.city, this.state, this.postalCode].filter(Boolean).join(', ');
  }


  buildGoogleMapsUrl(): string {
    const query = encodeURIComponent(this.fullAddress || `${this.latitude},${this.longitude}`);
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }
}
