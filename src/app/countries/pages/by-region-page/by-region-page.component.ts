import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  constructor(private CountriesServiceesService: CountriesService) {}
  public countries: Country[] = [];

  searchByRegion(term: string): void {
    this.CountriesServiceesService.searchRegion(term).subscribe(
      (countries) => {
        this.countries = countries;
      }
    );
  }
}
