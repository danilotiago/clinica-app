import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeProfessionalPage } from './home-professional.page';

describe('HomeProfessionalPage', () => {
  let component: HomeProfessionalPage;
  let fixture: ComponentFixture<HomeProfessionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProfessionalPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProfessionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
