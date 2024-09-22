import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrl: './twitter-post.component.scss'
})
export class TwitterPostComponent {
  @Input() baseHref: string = 'https://www.DylabIsrael.com';
  @Input() public hashTags: string[] = ['DylanIsrael', 'Javascript', 'Angular', '100AngularChallenge'];

  constructor(
    public titleService: Title
  ) { }

  get twitterUrl(): string {
    const base = this.getBaseWithHashtagsAndRoute();
    const message = encodeURIComponent(` Check out ${this.titleService.getTitle()} and become a CODING GOD`)
    return `${base}${message}`;
  }

  private getBaseWithHashtagsAndRoute(){
    const route = encodeURI(this.baseHref);
    const hasTags = this.hashTags.join(',');
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hasTags)}
    &url=${route}`;
  }
}
