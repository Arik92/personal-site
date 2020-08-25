import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBtnsComponent } from './contact-btns.component';

describe('ContactBtnsComponent', () => {
  let component: ContactBtnsComponent;
  let fixture: ComponentFixture<ContactBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
