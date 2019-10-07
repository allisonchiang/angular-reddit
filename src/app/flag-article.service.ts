import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagArticleService {

  constructor() { }

  downvoteArticle(flaggedArticle: Article, lowestVote: number) {
    flaggedArticle.votes = lowestVote - 1;
  }

}