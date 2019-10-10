import { Component } from '@angular/core';
import { Article, roles } from './article/article.model';
import { AdminService } from './admin.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  //Changes: for now adminService holds the Articles, app just renders basically
export class AppComponent {
  //articles: Article[];

  constructor(public adminServ: AdminService) {

    //this.initArticles();
    //this.articles = this.adminServ.getArticles();

  }

  /*
  initArticles() {
    this.articles = [
      new Article('Angular', 'http://angular.io', roles.USER, 3),
      new Article('Fullstack', 'http://fullstack.io', roles.ADMIN, 2),
      new Article('Angular HomePage', 'http://angular.io', roles.USER, 1)
    ];
  }
  */


  //we return false to prevent the browser from refreshing/re-loading the page
  //technically it tells the browser not to propogate the event upwards
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);

    //get the data and pass it to the service
    this.adminServ.pushArticle(title.value, link.value);

    //clear the values
    title.value = '';
    link.value = '';

    return false;
  }


  //moved logic into adminService
  sortedArticles(): Article[] {
    return this.adminServ.getArticles();
  }
}
