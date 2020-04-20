import { Hour } from '../models/hour.model';


const START_DAY_TIME: number   = 8;
const END_DAY_TIME: number     = 18;
const HOUR_PER_SERVICE: number = 2;

export class HourService {

    times: String[] = [];
    
    constructor() {
        this.generateTimes();
    }

    generateHoursByDate(date: Date): Hour[] {
        return this.times.map(time => {
            return (new Hour()).fromJson({id: null, date: date, hour: time});
        });
    }

    private generateTimes(): void {
        let startTime: number = START_DAY_TIME;

        while (startTime < END_DAY_TIME) {
            let time = startTime < 10 ? 
                `0${startTime}:00 às ${startTime+HOUR_PER_SERVICE}:00` : 
                `${startTime}:00 às ${startTime+HOUR_PER_SERVICE}:00`;
            
            this.times.push(time);
            startTime+= HOUR_PER_SERVICE;
        }
    }
}