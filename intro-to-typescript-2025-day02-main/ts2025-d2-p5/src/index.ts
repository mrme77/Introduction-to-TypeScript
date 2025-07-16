import { wtLossCompetition } from "./WtLossCompttition.js";
//
const wtloss = new wtLossCompetition();
wtloss.addCompetitor("Axle Barr");
wtloss.addCompetitor({name : "John Doe"});
console.log(wtloss.competitonDetails());

