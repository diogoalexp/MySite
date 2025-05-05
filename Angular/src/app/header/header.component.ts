import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router ) {

  }

  currentRouteStyle = (url: string) => {
    if(this.router.url === url)
      return 'selected'
    return ''
  }
}
