import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name = "Diogo Alexandro Pereira";
  title = "Cientista da Computação & SCRUM Master";
  description = "Sou um cientista da computação com especialidade em engenharia de software, entusiasta das metodologias agéis e tornei essas vertentes a minha profissão, minha paixão e parte do meu dia a dia.";
}
