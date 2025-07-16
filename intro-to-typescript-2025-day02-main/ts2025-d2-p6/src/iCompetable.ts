export interface Competable<T> {
  competitors : T[];
  admin : string;
  backupAdmin? : string;
  //
  addCompetitor(competitor : T) : void;
  competitonDetails() : Array<T>;
};