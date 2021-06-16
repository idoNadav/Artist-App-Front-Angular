import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddArtistComponent } from './addArtist/AddArtist.component';
import { ArtistsListComponent } from './artistList/artists-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './homePage/HomePage.component';
import {NavBarComponent} from './navBar/NavBar.component';
import {PlayListComponent} from './playList/PlayList.component';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'add-artist', component: AddArtistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddArtistComponent,
    ArtistsListComponent,
    HomePageComponent,
    NavBarComponent,
    PlayListComponent,
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
