import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImgComponent } from './section-img.component';

describe('SectionImgComponent', () => {
  let component: SectionImgComponent;
  let fixture: ComponentFixture<SectionImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
