import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOnePageMainComponent } from './my-one-page-main.component';

describe('MyOnePageMainComponent', () => {
  let component: MyOnePageMainComponent;
  let fixture: ComponentFixture<MyOnePageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOnePageMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyOnePageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
