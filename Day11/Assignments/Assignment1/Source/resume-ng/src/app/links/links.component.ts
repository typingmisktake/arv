import { Component } from '@angular/core';

interface Link {
  text: string;
  path: string;
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styles: [],
})
export class LinksComponent {
  links: Link[] = [
    {
      text: 'About',
      path: '/about',
    },
    {
      text: 'Contact',
      path: '/contact',
    },
    {
      text: 'Education',
      path: '/education',
    },
    {
      text: 'Skills',
      path: '/skills',
    },
  ];
}
