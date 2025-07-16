type Competitor = {
  cName: string;
  dateJoined : Date;
}
//
type Admins = {
  adminID: number;
}
//
type AdminCompetitor = Competitor & Admins;
//
const adminCompetitor: AdminCompetitor = {
  cName: "Axle Barr",
  adminID: 12345,
  dateJoined : new Date("2021-06-30"),
};
//
// console.log(
//   adminCompetitor.cName 
//   + " joined on " 
//   + adminCompetitor.dateJoined.toLocaleDateString('en-US')
// );
//
const displayAdminCompetitor = (admin: AdminCompetitor): void => {
  console.log(`Admin Competitor Name: ${admin.cName}`);
  console.log(`Admin ID: ${admin.adminID}`);
  console.log(`Date Joined: ${admin.dateJoined.toLocaleDateString('en-US')}`);
};
//displayAdminCompetitor(adminCompetitor);
type adminCompetitor = Competitor | Admins;
//
const daysSinceJoined = (competitor: adminCompetitor) : number => {
  const today = new Date();
  if (!('dateJoined' in competitor)) {
    return 0; // Regular competitors have no dateJoined property
  }
  const joinedDate = new Date(competitor.dateJoined);
  const timeDiff = today.getTime() - joinedDate.getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24)); 
};
