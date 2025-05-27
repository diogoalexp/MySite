import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedLanguage = signal<string>('');

  constructor(private router: Router, private translate: TranslateService) {

  }

  ngAfterViewInit() {
    const savedLang = window.localStorage.getItem('lang');
    this.translate.use(savedLang ? savedLang : 'pt-br');
    this.selectedLanguage.set(savedLang ? savedLang : 'pt-br');
  }

  currentRouteStyle = (url: string) => {
    if(this.router.url === url)
      return 'selected'
    return ''
  }

  changeLanguage = (test: any) => {
    const value = (test.target as HTMLSelectElement).value;
    this.translate.use(value);

    window.localStorage.setItem('lang', value);
  }

}
