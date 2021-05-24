import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistModel } from '../Models/ArtistModel';

const baseUrl = 'http://localhost:3002/artists/';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(): Promise<ArtistModel[]> {
    return this.http.get<ArtistModel[]>(baseUrl + 'getArtists').toPromise();
  }

  getArtist(artistId: any): Observable<any> {
    return this.http.get(baseUrl + 'getArtist/' + artistId);
  }

  addArtist(data: any): Observable<any> {
    return this.http.post(baseUrl + 'addArtist', data);
  }

  getAllSongs(): Promise<any> {
    return this.http.get(baseUrl + 'getSongs').toPromise();
  }

  addSong(data: any): Promise<any> {
    return this.http.post(baseUrl + 'addSong', data).toPromise();
  }

  getSongsByArtist(artistId: any): Observable<any> {
    return this.http.get(baseUrl + 'getSongsByArtist/' + artistId);
  }

  deleteArtist(artistId: any): Promise<any> {
    return this.http.delete(baseUrl + 'deleteArtist/' + artistId).toPromise();
  }

  deleteArtistSong(artistId: any, songName: any): Promise<any> {
    return this.http.delete(baseUrl + 'deleteArtistSong/' + songName + '/' + artistId).toPromise();
  }
}
