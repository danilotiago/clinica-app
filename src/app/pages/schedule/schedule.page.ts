import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonItem, IonLabel, IonRadioGroup, IonRadio } from '@ionic/angular';
import { ServiceItem } from 'src/app/shared/services-list/service-item.interface';
import { ProfessionalItem } from 'src/app/shared/professionals-list/professional-item.interface';
import {SwiperOptions} from 'swiper';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'clinica-schedule',
    templateUrl: './schedule.page.html',
    styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    @ViewChild(IonSlides, {static: false}) slides: IonSlides;
    actualSlide: number = 0;

    slideOpts: SwiperOptions = {
        allowTouchMove: false
    };

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

    professionalItems: ProfessionalItem[] = [{ name: 'Heitor Fonseca' }]


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

    changeSearchProfessional(): void {
        const search = (<any>event.target).value.toLowerCase();
        const list = this.professionalItems;

        this.professionalItems = list.filter(item => {
            return item.name.indexOf(search);
        })
    }

    private incrmentSlide(): void {
        this.actualSlide++;
    }

    private decrementSlide(): void {
        this.actualSlide--;
    }

    private isFirstSlide(): boolean {
        return this.actualSlide === 0;
    }

}
