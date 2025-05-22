import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueCarouselComponent } from './destaque-carousel.component';

describe('DestaqueCarouselComponent', () => {
  let component: DestaqueCarouselComponent;
  let fixture: ComponentFixture<DestaqueCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestaqueCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestaqueCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
