import { Component, OnInit } from '@angular/core';
import { ServiceItem } from 'src/app/shared/services-list/service-item.interface';
import { SpecialtyService } from 'src/app/shared/services/specialty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.page.html',
  styleUrls: ['./specialty.page.scss'],
})
export class SpecialtyPage implements OnInit {

  constructor(
    private service: SpecialtyService,
    private route: ActivatedRoute) { }

  serviceItens: ServiceItem[] = [];

  ngOnInit() {
    this.getAllSpecialtiesByResolver();
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

  private getAllSpecialtiesByResolver(): void {
    
    this.route.snapshot.data.specialties
      .map(specialty => {
        this.serviceItens.push({
          name: specialty.name,
          path: '#',
          logo: specialty.image
        });
    });
  }

}
