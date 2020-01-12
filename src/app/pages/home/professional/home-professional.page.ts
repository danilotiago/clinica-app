import { ServiceItem } from './../../../shared/services-list/service-item.interface';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-home-admin',
  templateUrl: 'home-professional.page.html',
  styleUrls: ['home-professional.page.scss'],
})
export class HomeProfessionalPage implements OnInit {

  @ViewChild('lastConsultations', { static: true }) lastConsultations: ElementRef;

  lastConsultationsChart: Chart;

  serviceItens: ServiceItem[] = [
    {
      logo: '/assets/imgs/professional.svg',
      path: '#',
      name: 'Profissionais'
    },
    {
      logo: '/assets/imgs/user.svg',
      path: '#',
      name: 'Pacientes'
    },
    {
      logo: '/assets/imgs/calendar.svg',
      path: '#',
      name: 'Agendamentos'
    }
  ]

  constructor() {}

  ngOnInit() { 
    this.createLastConsultationsChart();
  }

  createLastConsultationsChart() {
    this.lastConsultationsChart = new Chart(this.lastConsultations.nativeElement, {
      type: "bar",
      data: {
        labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"],
        datasets: [
          {
            label: "Consultas realizadas",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
    

}
