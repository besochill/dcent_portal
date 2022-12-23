import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {DocsService} from "./docs.service";
import {FaqCategory} from "./docs.types";

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit, OnDestroy {
  faqCategory!: FaqCategory;
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(private docsService: DocsService) { }

  ngOnInit(): void {
    // Get the FAQs
    this.docsService.faqs$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((faqCategories) => {
        this.faqCategory = faqCategories[0];
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  trackByFn(index: number, item: any): any  {
    return item.id || index;
  }
}
