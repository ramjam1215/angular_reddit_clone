import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

  //In Angular, a component host is the element this component is attached to
  //we’re asking Angular to keep the value of the host elements class to be in sync with the property cssClass
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(public adminServ: AdminService) {

    //this.article = new Article('Angular', 'http://angular.io', 10);
    //article is populated via Input now
  }

  //we return false to prevent the browser from refreshing/re-loading the page
  //technically it tells the browser not to propogate the event upwards
  //voteUp and voteDown are from 'click events'
  //ie event handler will want to tell the parent to reload b/c of a state change?
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  showButton(): boolean {
    return this.article.checkRole();
  }

  //TODO: needs to call a service function(?), that accepts the article
  //and downvotes it to be the lowest rated article
  flagArticle(): void {
    console.log(`Flagged article: ${this.article.title}`);
    this.adminServ.initFlag(this.article);
  }

  ngOnInit() {
  }

}
