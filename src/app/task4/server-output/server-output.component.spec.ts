import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOutputComponent } from './server-output.component';

describe('ServerOutputComponent', () => {
  let component: ServerOutputComponent;
  let fixture: ComponentFixture<ServerOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
