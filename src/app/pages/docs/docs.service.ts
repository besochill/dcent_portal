import { Injectable } from '@angular/core';
import {HttpService} from "../../../settings/core/http/http.service";
import {Observable, ReplaySubject, tap} from "rxjs";
import {FaqCategory, Guide, GuideCategory} from "./docs.types";

@Injectable({
  providedIn: 'root'
})
export class DocsService {
  private _faqs: ReplaySubject<FaqCategory[]> = new ReplaySubject<FaqCategory[]>(1);
  private _guides: ReplaySubject<GuideCategory[]> = new ReplaySubject<GuideCategory[]>(1);
  private _guide: ReplaySubject<Guide> = new ReplaySubject<Guide>(1);
  constructor(private httpService: HttpService) { }

  get faqs$(): Observable<FaqCategory[]> {
    return this._faqs.asObservable();
  }

  get guides$(): Observable<GuideCategory[]> {
    return this._guides.asObservable();
  }

  get guide$(): Observable<GuideCategory> {
    return this._guide.asObservable();
  }
  getAllFaqs(): Observable<FaqCategory[]> {
    // @ts-ignore
    return this.httpService.get<FaqCategory[]>('api/apps/help-center/faqs').pipe(
      tap((response: any) => {
        this._faqs.next(response);
      })
    );
  }

  getFaqsByCategory(slug: string): Observable<FaqCategory[]> {
    // @ts-ignore
    return this.httpService.get<FaqCategory[]>('api/apps/help-center/faqs', {
      params: {slug}
    }).pipe(
      tap((response: any) => {
        this._faqs.next(response);
      })
    );
  }

  getAllGuides(limit = '4'): Observable<GuideCategory[]> {
    // @ts-ignore
    return this.httpService.get<GuideCategory[]>('api/apps/help-center/guides', {
      params: {limit}
    }).pipe(
      tap((response: any) => {
        this._guides.next(response);
      })
    );
  }

  getGuidesByCategory(slug: string): Observable<GuideCategory[]> {
    // @ts-ignore
    return this.httpService.get<GuideCategory[]>('api/apps/help-center/guides', {
      params: {slug}
    }).pipe(
      tap((response: any) => {
        this._guides.next(response);
      })
    );
  }

  getGuide(categorySlug: string, guideSlug: string): Observable<GuideCategory> {
    // @ts-ignore
    return this.httpService.get<GuideCategory>('api/apps/help-center/guide', {
      params: {
        categorySlug,
        guideSlug
      }
    }).pipe(
      tap((response: any) => {
        this._guide.next(response);
      })
    );
  }
}
