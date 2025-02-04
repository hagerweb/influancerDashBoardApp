import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantSubscribeComponent } from './studant-subscribe.component';

describe('StudantSubscribeComponent', () => {
  let component: StudantSubscribeComponent;
  let fixture: ComponentFixture<StudantSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudantSubscribeComponent]
    });
    fixture = TestBed.createComponent(StudantSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
