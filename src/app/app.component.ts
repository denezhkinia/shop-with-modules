import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'swm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'shop-with-modules';

  @ViewChild('appTitle', { static: true }) appTitle!: ElementRef;

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = 'Shop with modules';
  }
}
