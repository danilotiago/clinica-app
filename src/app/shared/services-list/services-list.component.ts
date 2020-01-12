import { ServiceItem } from './service-item.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clinica-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent implements OnInit {

  @Input('serviceItens') serviceItens: ServiceItem[];
  
  constructor() { }

  ngOnInit() {}

  /**
   * Valida a necessidade de uma coluna extra vazia para
   * ajustar o poscionamento
   */
  needEmptyItem(): boolean {
    if (this.serviceItens.length < 2) return false;
    return this.serviceItens.length % 3 == 2;
  }

}
