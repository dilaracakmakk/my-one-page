import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnePageRegisterComponent } from './my-one-page-register.component';

describe('MyOnePageRegisterComponent', () => {
  let component: MyOnePageRegisterComponent;
  let fixture: ComponentFixture<MyOnePageRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOnePageRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOnePageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
