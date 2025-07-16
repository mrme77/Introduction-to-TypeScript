export interface Competable {
  competitors : string[];
  admin : string;
  backupAdmin? : string;
  //
  addCompetitor(competitor : string) : void;
  competitonDetails() : string;
};