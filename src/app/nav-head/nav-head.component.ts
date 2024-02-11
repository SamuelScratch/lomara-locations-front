import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-head',
  templateUrl: './nav-head.component.html',
  styleUrl: './nav-head.component.css'
})
export class NavHeadComponent {
  @Input()
  affiche! : boolean
  innerWidth! : number

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
