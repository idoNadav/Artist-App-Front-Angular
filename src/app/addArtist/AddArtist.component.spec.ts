import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtistComponent } from './AddArtist.component';

describe('AddArtistComponent', () => {
  let component: AddArtistComponent;
  let fixture: ComponentFixture<AddArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
