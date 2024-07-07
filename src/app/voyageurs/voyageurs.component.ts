import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienService } from '../bien.service';
import { Bien } from '../bien';

@Component({
  selector: 'app-voyageurs',
  templateUrl: './voyageurs.component.html',
  styleUrl: './voyageurs.component.css'
})
export class VoyageursComponent implements OnInit {

  isLoaded:boolean = false;
  biens : Bien[] = [];

  
  constructor(private bienService : BienService, public router : Router) { }

  ngOnInit(): void {
    this.bienService.getBiens().subscribe(
      response => {
        this.biens = response;
        this.isLoaded = true;
      }
    )
  }
}
