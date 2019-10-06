export class Article {
    title: string;
    link: string;
    role: string; //added for HW3
    votes: number;

    // votes parameter is optional (hence the ?)
    constructor(title: string, link: string, role: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.role = role; //added for HW3
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    // domain() is a utility function that extracts the domain from a URL
    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}