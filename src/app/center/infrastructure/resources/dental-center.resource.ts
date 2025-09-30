import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { GetDentalCentersRequest } from '../../application/contracts/get-dental-centers.request';
import { APP_CONFIGURATION } from '../../../shared/infrastructure/config/app-configuration.token';
import { DentalCenterResponseDto } from '../dto/dental-center-response.dto';

@Injectable({ providedIn: 'root' })
export class DentalCenterResource {
  private readonly http = inject(HttpClient);
  private readonly configuration = inject(APP_CONFIGURATION);


  fetchCenters(request: GetDentalCentersRequest): Observable<DentalCenterResponseDto[]> {
    const { baseUrl, centersPath } = this.configuration.heartlandApi;
    const endpoint = `${baseUrl}${centersPath}`;
    const params = new HttpParams({ fromObject: { key: request.apiKey } });
    const headers = new HttpHeaders({ 'X-API-Key': request.apiKey, Accept: 'application/json' });
    return this.http.get<DentalCenterResponseDto[]>(endpoint, { params, headers });
  }
}
