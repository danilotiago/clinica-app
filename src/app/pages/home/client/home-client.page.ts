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
      id: "#",
      logo: '/assets/imgs/podology.svg',
      path: '#',
      name: 'Podologia'
    },
    {
      id: "#",
      logo: '/assets/imgs/depilation.svg',
      path: '#',
      name: 'Depilação'
    },
    {
      id: "#",
      logo: '/assets/imgs/esthetician.svg',
      path: '#',
      name: 'Esteticista'
    },
    {
      id: "#",
      logo: '/assets/imgs/massage.svg',
      path: '#',
      name: 'Massoterapia'
    },
    {
      id: "#",
      logo: '/assets/imgs/professional.svg',
      path: '#',
      name: 'Nutricionista'
    }
  ]

  constructor() {}

}
