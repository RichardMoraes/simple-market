import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/views/checkout/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
  disabled = false;

  constructor(private chekcoutService: CheckoutService) { }

  ngOnInit(): void {
  }

  selectFilm() {
    this.disabled = true;
    this.chekcoutService.selectFilm();
  }

  unselectFilm() {
    this.disabled = false;
    this.chekcoutService.unselectFilm();
  }

}
