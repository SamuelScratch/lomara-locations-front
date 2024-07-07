import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private bienService : BienService, public router : ActivatedRoute) { }

  ngOnInit(): void {

    const bienId = parseInt(this.router.snapshot.paramMap.get('id')!);

    this.bienService.getBien(bienId).subscribe(
      response => {
        this.bien = response;
        this.isLoaded = true;
      }
    )
  }
}
