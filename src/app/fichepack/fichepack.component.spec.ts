import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichepackComponent } from './fichepack.component';

describe('FichepackComponent', () => {
  let component: FichepackComponent;
  let fixture: ComponentFixture<FichepackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichepackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
