import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Angular';

  constructor(private translate: TranslateService) {
      this.translate.addLangs(['pt-br', 'en', 'fr']);
      this.translate.setDefaultLang('pt-br');
      this.translate.use('pt-br');
  }

  ngAfterViewInit() {
    const savedLang = window.localStorage.getItem('lang');
    const getBrowserLang = this.translate.getBrowserLang() ?  this.translate.getBrowserLang() : this.translate.defaultLang;

    this.translate.use(savedLang ? savedLang! : getBrowserLang!);
  }
}
