import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.page.html',
    styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

    actualSlide: number = 0;

    @ViewChild(IonSlides) slides: IonSlides;
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

    constructor() { }

    ngOnInit() {
    }

    nextSlide() {
        this.incrmentSlide();
        this.slides.slideNext();
    }

    prevSlide() {
        this.decrementSlide();
        this.slides.slidePrev();
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
