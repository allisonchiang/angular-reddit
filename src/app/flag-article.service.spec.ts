import { TestBed } from '@angular/core/testing';

import { FlagArticleService } from './flag-article.service';

describe('FlagArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlagArticleService = TestBed.get(FlagArticleService);
    expect(service).toBeTruthy();
  });
});
