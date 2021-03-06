import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 'user', 3),
      new Article('Fullstack', 'http://fullstack.io', 'administrator', 2),
      new Article('Angular Homepage', 'http://angular.io', 'user', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement, role: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value} from role: ${role.value}`);
    this.articles.push(new Article(title.value, link.value, role.value, 0));
    title.value = '';
    link.value = '';
    role.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  getLowestVote(): number {
    var votesArray: number[] = [];
    var lowestVote: number;
    
    for (var i = 0; i < this.articles.length; i++) {
      votesArray.push(this.articles[i].votes);
    }

    lowestVote = Math.min.apply(null, votesArray);
    console.log("app.component.ts", lowestVote);
    return lowestVote;
  }
}