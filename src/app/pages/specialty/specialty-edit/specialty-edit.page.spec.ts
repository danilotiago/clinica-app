import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialtyEditPage } from './specialty-edit.page';

describe('SpecialtyEditPage', () => {
  let component: SpecialtyEditPage;
  let fixture: ComponentFixture<SpecialtyEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialtyEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
