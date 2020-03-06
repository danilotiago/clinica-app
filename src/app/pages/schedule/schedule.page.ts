import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonItem, IonLabel, IonRadioGroup, IonRadio } from '@ionic/angular';
import { ServiceItem } from 'src/app/shared/services-list/service-item.interface';
import { SwiperOptions } from 'swiper';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
    selector: 'clinica-schedule',
    templateUrl: './schedule.page.html',
    styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    @ViewChild(IonSlides, { static: false }) slides: IonSlides;
    actualSlide: number = 0;
    professionalValue: number;

    slideOpts: SwiperOptions = { allowTouchMove: false };
    calendarOpts: CalendarComponentOptions = { color: "danger" }

    serviceItens: ServiceItem[] = [
        {
            logo: '/assets/imgs/podology.svg',
            path: '#',
            name: 'Podologia'
        },
        {
            logo: '/assets/imgs/depilation.svg',
            path: '#',
            name: 'Depilação'
        },
        {
            logo: '/assets/imgs/esthetician.svg',
            path: '#',
            name: 'Esteticista'
        },
        {
            logo: '/assets/imgs/massage.svg',
            path: '#',
            name: 'Massoterapia'
        },
        {
            logo: '/assets/imgs/professional.svg',
            path: '#',
            name: 'Nutricionista'
        }
    ];

    procedureItems: Array<Object> = [
        { label: 'Unha encravada', isChecked: false },
        { label: 'Frieira', isChecked: false },
        { label: 'Calo', isChecked: false },
        { label: 'Micose', isChecked: false },
    ];

    professionalItems: Array<Object> = [
        { id: 1, name: 'Carol', isChecked: false },
        { id: 2, name: 'Márcia', isChecked: false },
        { id: 3, name: 'Roberta', isChecked: false },
        { id: 4, name: 'Mariana', isChecked: false },
    ];

    hourItems: Array<Object> = [
        { id: 1, start: '12:00', end: '13:00' },
        { id: 2, start: '15:40', end: '16:40' },
        { id: 3, start: '17:00', end: '18:00' },
    ];

    constructor() { }

    ngOnInit() {
    }

    nextSlide(): void {
        this.incrmentSlide();
        this.slides.slideNext();
    }

    prevSlide(): void {
        this.decrementSlide();
        this.slides.slidePrev();
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
