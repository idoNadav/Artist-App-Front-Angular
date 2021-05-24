import { Component, OnInit } from '@angular/core';
import {ArtistService} from '../services/artist.service';
import { RouterModule, Routes } from '@angular/router';
import {error} from '@angular/compiler/src/util';
@Component({
  selector: 'app-add-artist',
  templateUrl: './AddArtist.component.html',
  styleUrls: ['./AddArtist.component.css']
})

export class AddArtistComponent implements OnInit {

  artist = {
    name: '',
    id: '',
    yearOfBirth: '',
    pictureLink: ''
  };

  submitted = false;

  constructor(private artistService: ArtistService , router: RouterModule) { }

  ngOnInit(): void {
  }

  saveArtist(): void {
    const data = {
      name: this.artist.name,
      id: this.artist.id,
      yearOfBirth: this.artist.yearOfBirth,
      pictureLink: this.artist.pictureLink
    };
    this.artistService.addArtist(data)
      .subscribe(
        response => console.log(response),
        err => alert(err.error)
      );
    location.reload();
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