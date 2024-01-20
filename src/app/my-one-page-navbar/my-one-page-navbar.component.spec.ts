import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnePageNavbarComponent } from './my-one-page-navbar.component';

describe('MyOnePageNavbarComponent', () => {
  let component: MyOnePageNavbarComponent;
  let fixture: ComponentFixture<MyOnePageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOnePageNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOnePageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
