import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BienService } from '../bien.service';
import { Bien } from '../bien';

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrl: './bien.component.css'
})
export class BienComponent {

  isLoaded:boolean = false;
  bien : Bien= new Bien();
  id : number = 0;

  constructor(private bienService : BienService, public router : Router) { }

  ngOnInit(): void {
    this.bienService.getBien(this.id).subscribe(
      response => {
        this.bien = response;
        this.isLoaded = true;
      }
    )
  }
}
