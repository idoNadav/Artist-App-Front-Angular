import { Component, OnInit } from '@angular/core';
import {ArtistService} from '../services/artist.service';
import {FormBuilder, FormControl, FormControlName, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-artist',
  templateUrl: './AddArtist.component.html',
  styleUrls: ['./AddArtist.component.css']
})

export class AddArtistComponent implements OnInit {

  constructor(private artistService: ArtistService , private fb: FormBuilder ) { }

  artist = {
    name: '',
    id: '',
    yearOfBirth: '',
    pictureLink: ''
  };
  submitted = false;
  registerArtist = new FormGroup({
  });

  ngOnInit(): void {
    this.registerArtist = new FormGroup({
        name: new FormControl('', [
        Validators.required
      ]),
      id: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      yearOfBirth: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      pictureLink: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  get name(): any {return this.registerArtist.get('name'); }
  get id(): any {return this.registerArtist.get('id'); }
  get yearOfBirth(): any {return this.registerArtist.get('yearOfBirth'); }
  get pictureLink(): any {return this.registerArtist.get('pictureLink'); }

  saveArtist(addArtistForm: NgForm): void {
    const data = {
      name: this.artist.name,
      id: this.artist.id,
      yearOfBirth: this.artist.yearOfBirth,
      pictureLink: this.artist.pictureLink
    };
    this.artistService.addArtist(data).then(res => {
      console.log(res);
      alert('Artist added successfully!');
      addArtistForm.reset();
    }).catch(err => {
      alert(err.error);
    });
  }

  newArtist(): void {
    this.submitted = false;
    this.artist = {
      name: '',
      id: '',
      yearOfBirth: '',
      pictureLink: ''
    };
  }
}
