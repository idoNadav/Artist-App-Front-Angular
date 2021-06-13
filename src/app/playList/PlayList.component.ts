import { Component, OnInit } from '@angular/core';
import {ArtistService} from '../services/artist.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-list',
  templateUrl: './PlayList.component.html',
  styleUrls: ['./PlayList.component.css']
})


export class PlayListComponent implements OnInit {

  songs: any;

  constructor(private artistService: ArtistService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.retrieveSongs();
  }

  retrieveSongs(): void {
    this.artistService.getSongsByArtist(this.route.snapshot.params.artistId).subscribe(data => {
    this.songs = data;
    console.log(data);
    });
  }


  deleteSong(song: any): void {
    this.artistService.deleteArtistSong(song.artistId , song.name).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
    const index = this.songs.findIndex((i: { name: any; }) => i.name === song.name);
    if (index !== undefined) { this.songs.splice(index, 1); }
  }

}

