import { Competable } from "./iCompetable.js";
//
@HiDOM("<h2>Hello from HiDOM</h2>", "myDiv")
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
function HiDOM(msg: string, el: string): ClassDecorator {
  return function (constructor: Function) {
    document.addEventListener("DOMContentLoaded", () => {
      const pageTag = document.getElementById(el);
      if (pageTag) {
        pageTag.innerHTML = msg;
      } else {
        console.warn(`Element with id '${el}' not found`);
      }
      console.log(`HiDOM: ${msg}`);
    });
  };
}
//
export { wtLossCompetition };