import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtistComponent } from './addArtist/AddArtist.component';
import {ArtistsListComponent} from './artistList/artists-list.component';
import {HomePageComponent} from './homePage/HomePage.component';
import {PlayListComponent} from './playList/PlayList.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add-artist', component: AddArtistComponent},
  { path: 'artists', component: ArtistsListComponent},
  { path: 'play-list/:artistId', component: PlayListComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
