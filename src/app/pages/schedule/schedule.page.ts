import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
    selector: 'clinica-schedule',
    templateUrl: './schedule.page.html',
    styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    @ViewChild(IonSlides) slides: IonSlides;
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
        const searchbar = document.querySelector('ion-searchbar');
        const items = Array.from(document.getElementById("list").children);
        const query = event.target.value.toLowerCase();
        requestAnimationFrame(() => {
            items.forEach(item => {
                const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
                item.style.display = shouldShow ? 'block' : 'none';
            })
        });
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
