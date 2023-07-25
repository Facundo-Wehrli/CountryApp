import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/contries.service';

@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',
  styles: [],
})
export class ContryPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.countriesService
        .searchCountryByAlphaCode(id)
        .subscribe((country) => {
          console.log({ country });
        });
    });
  }
}
