
export enum roles {
  USER = "user",
  ADMIN = "administrator"
}


export class Article {
  title: string;
  link: string;
  role: roles;
  votes: number;




  constructor(title: string, link: string, role: roles, votes?: number) {
    this.title = title;
    this.link = link;
    this.role = role;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  checkRole(): boolean {
    var res = false;
    if (this.role == roles.ADMIN)
      res = true;

    return res;
  }
  
  //domain() is a utility function that extracts
  //the domain from a URL
  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    }

    catch (err) {
      return null;
    }

  }

}
