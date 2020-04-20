import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hour } from '../models/hour.model';
import { map } from 'rxjs/operators';

const API_URL: string = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

    getAllHourByDate(date: Date, professionaId: String): Observable<Hour[]> {
        return this.http
            .get<Hour[]>(`${API_URL}/schedules/scheduled-times?date=${date}&professionalId=${professionaId}`)
            .pipe(map(json => json.map(hourData => {
                return (new Hour()).fromJson(hourData)
            })));
    }
}