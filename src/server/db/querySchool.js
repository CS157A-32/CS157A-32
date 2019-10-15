// the db folder being a place to hold query definitions for all the different tables. 
// Right now the getSchools is in the router file. But when we have more and more tables to query from, 
// we want to have like a schools.js, coaches.js, stadiums.js in the db file to define the query... 
// then from the routes we can just import and call the function. 
// Its just to make the code organized and traceable instead of lumping everything into one file




import { Connection } from "./index";

Connection.query("SELECT * FROM schools", function(err, res){
    (err) ? res.send
})

/*export const all = async () => {
  return new Promise((resolve, reject) => {
    Connection.query("SELECT * from schools", (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

export default {
  all
};
*/