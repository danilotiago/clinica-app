import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clinica-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {

  @Input('showWelcome')  showWelcome: boolean   = false;
  @Input('showAvatar')   showAvatar: boolean    = true;
  @Input('logoPosition') logoPosition: string   = 'left';

  constructor() { }

  ngOnInit() { }

  getLogoPositionClass(): string[] {
      if (this.logoPosition == 'left') {
        return ['',''];
      }

      return [
        `logo-img-${this.logoPosition}`,
        `logo-content-${this.logoPosition}`
      ];
  }

}
