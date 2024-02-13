import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienCarteComponent } from './bien-carte.component';

describe('BienCarteComponent', () => {
  let component: BienCarteComponent;
  let fixture: ComponentFixture<BienCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BienCarteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BienCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
