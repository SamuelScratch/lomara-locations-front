import { Component } from '@angular/core';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
}
