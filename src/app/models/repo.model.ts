export interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  owner: {
    login: string
  };
}
