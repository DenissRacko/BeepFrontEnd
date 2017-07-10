import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeepInlineComponent } from './beep-inline.component';

describe('BeepInlineComponent', () => {
  let component: BeepInlineComponent;
  let fixture: ComponentFixture<BeepInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeepInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeepInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
