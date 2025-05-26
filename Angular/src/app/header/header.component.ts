import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedLanguage = signal<string>('pt-br');

  constructor(private router: Router, private translate: TranslateService ) {
    const getBrowserLang = this.translate.getBrowserLang() ?  this.translate.getBrowserLang() : 'pt-br';
    this.selectedLanguage.set(this.translate.currentLang ? this.translate.currentLang : getBrowserLang!);

  }

  currentRouteStyle = (url: string) => {
    if(this.router.url === url)
      return 'selected'
    return ''
  }

  changeLanguage = (test: any) => {
    const value = (test.target as HTMLSelectElement).value;
    this.translate.use(value);
  }

}
