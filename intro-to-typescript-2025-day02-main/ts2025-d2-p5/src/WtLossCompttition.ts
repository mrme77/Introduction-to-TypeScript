import {Competable} from "./iCompetable.js";
//
class wtLossCompetition<T> implements Competable<T>{
  competitors: T[] = [];
  admin: string = "";
  backupAdmin : string = "";
  addCompetitor(competitor: T): void {
    this.competitors.push(competitor);
  };
  competitonDetails(): Array<T> {
    return this.competitors;
  };
    setBackupAdmin(supportAdmin : string){
    this.backupAdmin = supportAdmin;
  };
};
//
export { wtLossCompetition };