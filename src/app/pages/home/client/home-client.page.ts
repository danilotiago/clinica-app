import { Component } from '@angular/core';
import { ServiceItem } from 'src/app/shared/services-list/service-item.interface';

@Component({
  selector: 'app-home-client',
  templateUrl: 'home-client.page.html',
  styleUrls: ['home-client.page.scss'],
})
export class HomeClientPage {

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
      logo: '/assets/imgs/nutricionist.svg',
      path: '#',
      name: 'Nutricionista'
    }
  ]

  constructor() {}

}
