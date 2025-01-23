import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
})
export default class ContactPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({
      nmae: 'description',
      content: 'This is my Contact page',
    });
    this.meta.updateTag({
      nmae: 'og:title',
      content: 'Contact Page',
    });
    this.meta.updateTag({
      nmae: 'keywords',
      content: 'Hello,Duvan,course, angular',
    });
  }
}
