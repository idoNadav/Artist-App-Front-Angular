import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArtistService } from 'src/app/services/artist.service';
import {ArtistModel} from '../Models/ArtistModel';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})


export class ArtistsListComponent implements OnInit{

  public selectedField: any;
  artists: any;
  public artistList: ArtistModel[] | undefined;

  constructor(private artistsService: ArtistService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  goToPage(page: any , title: any): void{
     window.open(page, '_self', title);
  }

  retrieveArtists(): void {
    this.artistsService.getArtists().then(data => {
      this.artists = data;
      this.artistList = data;
      console.log(data);
    })
      .catch(error => {
        alert('Failed to get artists data');
        window.open('/', '_self');
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveArtists();
  }


  saveSong(song: any, artistId: any, artistSong: NgForm): void {
    const data = {
      name: song.name,
      artistId
    };

    this.artistsService.addSong(data).then(response => {
      console.log(response);
      alert('Song Added successfully!');
    }).catch(error => {
      alert(error.error);
      console.log(error);
    });
    artistSong.reset();
  }

  deleteArtist(id: string): void {
    const self = this;
    this.artistsService.deleteArtist(id).then(response => {
      console.log(response);
      self.refreshList();
    }).catch(error => {
      console.log(error);
      self.refreshList();
    });
    alert('Artist deleted successfully!');
  }


  sort() {
    if (this.selectedField === 'Year of birth')
    {
      this.artistList?.sort((b, a) => new Date(b.yearOfBirth).getTime() - new Date(a.yearOfBirth).getTime());
    }else if (this.selectedField === 'Id')
    {
      this.artistList?.sort((a, b) => a._id.localeCompare(b._id));
    }else
      {
      this.artistList?.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

}
