interface Competable {
  competitors : string[];
  admin : string;
  backupAdmin? : string;
  //
  addCompetitor(competitor : string) : void;
  competitonDetails() : string;
};
//
class wtLossCompetition implements Competable{
    competitors: string[] = [];
    admin: string = "";
    backupAdmin : string = "";
    addCompetitor(competitor: string): void {
    };
    competitonDetails(): string {
      return this.competitors.toString();
    };
      setBackupAdmin(supportAdmin : string){
      this.backupAdmin = supportAdmin;
    };
};
//
class FantasyFootbalCompetition implements Competable{
  constructor(cAdmin : string){
    this.admin = cAdmin;
  };
  competitors : string[] = [];
  admin : string = "";
  //
  addCompetitor(competitor : string) : void {
    this.competitors.push(competitor);
  };
  competitonDetails() : string{
    return this.competitors.toString();
  };
};