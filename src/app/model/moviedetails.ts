import { Production_countries } from './production_countries';
import { Production_companies } from './production_companies';
export class Moviedetails {
  public id: number;
  public original_title: String;
  public title: String;
  public original_language: String;
  public popularity: number;
  public adult: boolean;
  public overview: String;
  public release_date: String;
  public vote_average: number;
  public poster_path: String;
  public homepage: String;
  public revenue: number;
  public status: String;
  public production_companies: Production_companies;
  public production_countries: Production_countries;
}
