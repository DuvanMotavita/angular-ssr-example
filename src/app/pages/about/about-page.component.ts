import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({
      nmae: 'description',
      content: 'This is my about page',
    });
    this.meta.updateTag({
      nmae: 'og:title',
      content: 'About Page',
    });
    this.meta.updateTag({
      nmae: 'keywords',
      content: 'Hello,Duvan,course, angular',
    });
  }
}
