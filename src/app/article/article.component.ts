import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article} from './article.model';
import { FlagArticleService } from '../flag-article.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  flagArticleService: FlagArticleService;
  appComponent: AppComponent;

  constructor(flagArticleService: FlagArticleService, appComponent: AppComponent) {
    this.flagArticleService = flagArticleService;
    this.appComponent = appComponent;
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  flagArticle(): boolean {
    var lowestVote = this.appComponent.getLowestVote();
    console.log("article.component.ts", lowestVote);
    // if the flagged article is not the lowest-voted already, then call the service function to downvote it
    if (this.article.votes != lowestVote) {
      this.flagArticleService.downvoteArticle(this.article, lowestVote);
    }
    return false;
  }

  ngOnInit() {
  }

}
