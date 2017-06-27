import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeepsComponent } from './beeps.component';

describe('BeepsComponent', () => {
  let component: BeepsComponent;
  let fixture: ComponentFixture<BeepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
