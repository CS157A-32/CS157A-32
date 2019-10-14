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