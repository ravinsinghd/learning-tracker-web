import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getStatCounts() {
    const url = `${environment.apiUrl}tracker/count`;
    return this.httpGet(url);
  }

  getStatImage(data: any) {
    const url = 'https://export.highcharts.com/';
    return this.httpPost(url, data);
  }

  httpGet<T>(url: string) {
    return this.http.get<T>(url);
  }

  httpPost(url: string, data: any) {
    return this.http.post(url, data, { responseType: 'blob' });
  }
}
