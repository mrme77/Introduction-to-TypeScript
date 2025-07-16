class Competition {
  //competitionName : string;
  private competitors : string[] = [];
  private admin : string = "";
  constructor(private competitionName : string, private readonly compId : number) {
    //this.competitionName = cName;
  };
  addCompetitor(competitor : string) {
    this.competitors.push(competitor);
  };
  competitonDetails() {
    return this.compId + "," + this.competitionName;
  };
  get competitionID(){
    return this.compId;
  };
  set competitionAdmin(adminName: string){
    if(adminName != "Axle"){
      this.admin = adminName;
    };
  };

};
const competition = new Competition("Weight Loss Competition 2025", 100);
//competition.addCompetitor();
console.log(competition.competitonDetails());
