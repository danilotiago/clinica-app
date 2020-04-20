import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonItem, IonLabel, IonRadioGroup, IonRadio } from '@ionic/angular';
import { ServiceItem } from 'src/app/shared/services-list/service-item.interface';
import { SwiperOptions } from 'swiper';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ActivatedRoute } from '@angular/router';
import { Specialty } from 'src/app/shared/models/Specialty.model';
import { ProfessionalService } from 'src/app/shared/services/professional.service';
import { Professional } from 'src/app/shared/models/Professional.model';
import { ScheduleService } from 'src/app/shared/services/schedule.service';
import { HourService } from 'src/app/shared/services/hour.service';
import { Hour } from 'src/app/shared/models/hour.model';

@Component({
    selector: 'clinica-schedule',
    templateUrl: './schedule.page.html',
    styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    @ViewChild(IonSlides, { static: false }) slides: IonSlides;
    actualSlide: number = 0;

    slideOpts: SwiperOptions = { allowTouchMove: false };
    calendarOpts: CalendarComponentOptions = { color: "danger" };

    specialties: Specialty[];
    serviceItens: ServiceItem[];

    procedureItems: Array<Object> = [];

    professionals: Professional[];
    professionalItems: Array<Object> = [];
    
    hours: Hour[] = [];

    specialtySelected: Specialty;
    proceduresSelected: String[] = [];
    professionalSelected: Professional;
    serviceMode: String;
    date: Date;
    hourSelected: String;
    observations: String;

    constructor(
        private route: ActivatedRoute,
        private professionalService: ProfessionalService,
        private service: ScheduleService
    ) { }

    ngOnInit() {
        this.route.data.subscribe(param => {
            this.specialties = param['specialties'];
            this.renderServiceItensWithSpecialties(param['specialties']);
        });
    }

    selectSpecialty(specialtyItem: ServiceItem) {
        this.specialtySelected = this.specialties
            .find(specialty => specialty.id === specialtyItem.id);
        
        this.defineProcedures();
        this.getProfessionalsByProcedure();
        
        this.nextSlide();
    }

    getHours() {
        this.hours = (new HourService()).generateHoursByDate(this.date);

        this.service.getAllHourByDate(this.date, this.professionalSelected.id)
            .subscribe(hoursInUse => {
               hoursInUse.forEach(hourUse => {
                this.hours = this.hours.filter(hour => hour.hour != hourUse.hour);
               });
            });
    }

    selectHour(hour: String) {
        this.hourSelected = hour;
    }

    selectProfessional(professionalId: String) {
        this.professionalSelected = this.professionals
            .find(professional => professional.id === professionalId);
    }

    nextSlide(): void {
        this.incrmentSlide();
        this.slides.slideNext();
    }

    prevSlide(): void {
        this.decrementSlide();
        this.slides.slidePrev();
    }

    resume() {

        this.defineSelectedProcedures();

        console.log("==========");
        console.log(this.specialtySelected);
        console.log("==========");

        console.log("==========");
        console.log(this.proceduresSelected);
        console.log("==========");

        console.log("==========");
        console.log(this.professionalSelected);
        console.log("==========");

        console.log("==========");
        console.log(this.serviceMode);
        console.log("==========");

        console.log("==========");
        console.log(this.date);
        console.log("==========");

        console.log("==========");
        console.log(this.hourSelected);
        console.log("==========");

        console.log("==========");
        console.log(this.observations);
        console.log("==========");
    }

    private defineSelectedProcedures(): void {
        this.procedureItems.forEach(procedure => {
            if (procedure["isChecked"]) {
                this.proceduresSelected.push(procedure["label"]);
            }
        });
    }

    private defineProcedures() {
        this.procedureItems = [];
        this.specialtySelected.procedures.map(procedure => {
            this.procedureItems.push({label: procedure, isChecked: false});
        });
    }

    private getProfessionalsByProcedure() {
        this.professionalItems = [];
        
        this.professionalService
            .getAllProfessionalsBySpecialty(this.specialtySelected.id)
            .subscribe(professionals => {
                this.professionals = professionals;

                this.professionals.map(professional => {
                    this.professionalItems.push({
                        id: professional.id,
                        name: professional.user.name,
                        isChecked: false
                    });    
                });
            });
    }

    private renderServiceItensWithSpecialties(specialties: Specialty[]): void {
        this.serviceItens = [];
        specialties.map(specialty => {
          this.serviceItens.push({
            id: specialty.id,
            name: specialty.name,
            path: '#',
            logo: specialty.image
          });
      });
    }

    private incrmentSlide(): void {
        if (this.actualSlide < 6)
            this.actualSlide++;
    }

    private decrementSlide(): void {
        if (this.actualSlide > 0)
            this.actualSlide--;
    }

    private isFirstSlide(): boolean {
        return this.actualSlide === 0;
    }

    private isLastSlide(): boolean {
        return this.actualSlide === 6;
    }

    private isFirstAndLastSlide(): boolean {
        return this.isFirstSlide() || this.isLastSlide();
    }

}
