import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Country, State, City }  from 'country-state-city';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums : any;
  city : any;
  constructor(
    private PhotosService : PhotosService
  ) { }

  ngOnInit(): void {
    this.albums = this.PhotosService.getAlbums();
    // const temp: string[] = []
    // City.getCitiesOfCountry('IL')?.map(ct => {
    //   temp.push(ct.name)
    // })
    this.city = City.getCitiesOfCountry('IL')
    console.log(this.albums)
  }
  async print  () :  Promise<void> {
    this.albums.map((al: any) => console.log(al))
    console.log('click')
  }

  
}
