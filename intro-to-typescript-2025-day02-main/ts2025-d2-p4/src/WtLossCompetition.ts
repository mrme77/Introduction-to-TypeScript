import { Competable } from "./iCompetable.js";
//
class wtLossCompetition implements Competable{
  competitors: string[] = [];
  admin: string = "";
  backupAdmin : string = "";
  addCompetitor(competitor: string): void {
    this.competitors.push(competitor);
  };
  competitonDetails(): string {
    return this.competitors.toString();
  };
  setBackupAdmin(supportAdmin : string){
    this.backupAdmin = supportAdmin;
  };
};
//
export { wtLossCompetition };