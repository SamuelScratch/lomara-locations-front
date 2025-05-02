import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BienService } from '../bien.service';
import { Bien, Image } from '../bien';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrl: './bien.component.css'
})
export class BienComponent {

  isLoaded:boolean = false;
  bien : Bien= new Bien();
  id : number = 0;
  selectedImageIndex : number = 0;
  untrustedUrl : SafeResourceUrl = "";
  trustedUrl : SafeResourceUrl = '';
  displayModale : boolean = false;

  constructor(private bienService : BienService, public router : ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    const bienId = parseInt(this.router.snapshot.paramMap.get('id')!);

    this.bienService.getBien(bienId).subscribe(
      response => {
        this.bien = response;
        this.untrustedUrl = this.bien.calendrier;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.bien.calendrier);
        this.isLoaded = true;
      }
    )
  }

  public IndexImagePlus() {
    this.selectedImageIndex += 1;
    if (this.selectedImageIndex >= this.bien.images.length) {
      this.selectedImageIndex = 0;
    }
    this.Scroll(document.getElementById('image-' + this.selectedImageIndex.toString()) as HTMLElement);
  }

  public IndexImageMinus() {
    this.selectedImageIndex -= 1;
    if (this.selectedImageIndex < 0) {
      this.selectedImageIndex = this.bien.images.length - 1;
    }
    this.Scroll(document.getElementById('image-' + this.selectedImageIndex.toString()) as HTMLElement);
  }
  public Scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}
}
