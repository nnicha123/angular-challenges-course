import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrl: './linkedin-post.component.scss'
})
export class LinkedinPostComponent {
  constructor(public router: Router) { }
  get linkedinMessage(): string {
    const base = "https://www.linkedin.com/shareArticle?mini=true";
    const currentSite = `&url=https://www.DylanIsrael.com${this.router.url}`
    return `${base}${currentSite}`;
  }
}
