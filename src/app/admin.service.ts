import { Injectable } from '@angular/core';
import { Article, roles } from './article/article.model';

@Injectable({
  providedIn: 'root',
})

//Admin Service holds the article array ,
//and since its a singleton can be passed between components
export class AdminService {
  articles: Article[];

  constructor() {
    this.initArticles();
  }

  initFlag(a: Article)
  {
    //lets try this... we are going to assume this array is sorted,
    //so i will go to the last article object b/c it should be lowest
    //get its vote number and change the one given to us.

    console.log('in admin Service');
    var last = this.articles.length - 1;
    if (this.articles[last] != null) {

      console.log(`Flagged article: ${a.title} Votes before => ${a.votes}`);
      a.votes = this.articles[last].votes - 10;
      console.log(`Flagged article: ${a.title} Votes after => ${a.votes}`);
    }
    
    
  }

  initArticles() {
    this.articles = [
      new Article('Angular', 'http://angular.io', roles.USER, 3),
      new Article('Fullstack', 'http://fullstack.io', roles.ADMIN, 2),
      new Article('Angular HomePage', 'http://angular.io', roles.USER, 1)
    ];
  }

  pushArticle(title: string, link: string) {
    this.articles.push(new Article(title, link, roles.USER));
  }

  sortArticles() {
    this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  getArticles(): Article[] {

    this.sortArticles();

    return this.articles;;
  }
}
