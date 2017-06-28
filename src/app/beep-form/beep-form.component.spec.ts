import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeepFormComponent } from './beep-form.component';

describe('BeepFormComponent', () => {
  let component: BeepFormComponent;
  let fixture: ComponentFixture<BeepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeepFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
