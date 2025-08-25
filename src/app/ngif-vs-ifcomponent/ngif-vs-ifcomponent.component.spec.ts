import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifVsIfcomponentComponent } from './ngif-vs-ifcomponent.component';

describe('NgifVsIfcomponentComponent', () => {
  let component: NgifVsIfcomponentComponent;
  let fixture: ComponentFixture<NgifVsIfcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifVsIfcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifVsIfcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
