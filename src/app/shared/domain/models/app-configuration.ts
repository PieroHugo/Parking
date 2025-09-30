
export interface AppConfiguration {
  readonly production: boolean;
  readonly heartlandApi: HeartlandApiConfiguration;
  readonly logo: LogoConfiguration;
}

export interface HeartlandApiConfiguration {
  readonly baseUrl: string;
  readonly centersPath: string;
  readonly apiKey: string;
}

export interface LogoConfiguration {
  readonly domain: string;
  readonly token?: string;
}
