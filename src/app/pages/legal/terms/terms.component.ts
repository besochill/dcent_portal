import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  items: any[] = [];
  expandedIndex = 0;

  ngOnInit() {
    this.items = [
      {
        title      : 'Terms',
        description: 'Only a guide to protect everyone.',
      }
    ];
  }
}
