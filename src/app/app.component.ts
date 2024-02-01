import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NotesListComponent } from './notes-list/notes-list.component';
import { HeaderComponent } from './header/header.component';
import { NOTES } from './notes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NotesListComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-get';
  totalAngularPackages: number = 0; // Initialize with a default value of 0
  url: string = 'https://pokeapi.co/api/v2/generation/generation-i';
  error: any;
  notes = NOTES;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('ngOnInit() started');

    this.http.get<any>(this.url).subscribe(data => {
      let info = JSON.stringify(data);
      console.log('info: ' + info);
      let structureData = JSON.parse(info);
      console.log('structureData: ' + structureData);
      let { pokemon_species } = structureData;
      console.log('pokemon_species: ' + pokemon_species);


      this.totalAngularPackages = data.total;
      console.log('data.pokemon_species: ' + data, )
      console.log('typeof data.pokemon_species: ' +  typeof data.pokemon_species);

      this.notes = data;
      console.log('notes: ' + this.notes);
    }, (error: any) => this.error = error);
  }

  onSubmit() {
    // console.log("onSubmit(): this.totalAngularPackages: " + this.totalAngularPackages);
    console.log("onSubmit(): this.notes: " + this.notes);
  }

}
