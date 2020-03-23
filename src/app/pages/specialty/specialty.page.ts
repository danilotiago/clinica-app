import { Component, OnInit } from '@angular/core';
import { ServiceItem } from 'src/app/shared/services-list/service-item.interface';
import { SpecialtyService } from 'src/app/shared/services/specialty.service';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.page.html',
  styleUrls: ['./specialty.page.scss'],
})
export class SpecialtyPage implements OnInit {

  constructor(private service: SpecialtyService) { }

  serviceItens: ServiceItem[] = [];

  ngOnInit() {
    this.getAllSpecialties();
  }

  /*serviceItens: ServiceItem[] = [
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
  ]*/

  private getAllSpecialties(): void {
    this.service.getAllSpecialties()
      .subscribe(specialties => {
        specialties.map(specialty => {
          this.serviceItens.push({
            name: specialty.name,
            path: '#',
            logo: specialty.image
          });
        });
      });
  }

}
