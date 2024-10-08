import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrl: './star-ratings.component.scss'
})
export class StarRatingsComponent {
  @Input() rating: number = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStars(): boolean {
    const highestRating = 5;
    return (this.rating - Math.floor(this.rating) >= 0.5) && this.rating != highestRating;
  }

  public get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }
}
