import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KilnComponent } from './kiln.component';

describe('KilnComponent', () => {
  let component: KilnComponent;
  let fixture: ComponentFixture<KilnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KilnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KilnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
