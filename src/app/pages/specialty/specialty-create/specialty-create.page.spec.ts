import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialtyCreatePage } from './specialty-create.page';

describe('SpecialtyCreatePage', () => {
  let component: SpecialtyCreatePage;
  let fixture: ComponentFixture<SpecialtyCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialtyCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
