"use strict";

module.exports = {
  up: (models, mongoose) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.
    //admin@haatch.in
    // Example:
    return models.users
      .insertMany([
        {
          _id: "6679472b970662a8c8cbd2b0",
          firstName : "Hakeem",
          lastName : "Shah",
          email : "hakeemshah1206@gmail.com",
          phone : "9074667232",
          gender : "male",
          password : "$2y$10$pIi5iBduBvUa1kL8WaGzS.ictwZrbMz9f.GTbM8/jzWfMKfW/Gel2",//Hakeem@123
          user_type : "645e344f7483b6558146f843"
          
        },
        {
          _id : "6679475d970662a8c8cbd2b1",
          firstName : "John",
          lastName : "Doe",
          email : "john@gmail.com",
          phone : "1234567890",
          gender : "male",
          password : "$2y$10$nGjTbrLn3P7BGqQAv/GM4uga0J0up7aHiDyhCxHuLRm1IvF09VD.O",//John@23
          user_type : "645e34807483b6558146f844",
        },
        {
          _id : "66794770970662a8c8cbd2b2",
          firstName : "Mike",
          lastName : "Doe",
          email : "mike@gmail.com",
          phone : "9876543210",
          gender : "male",
          password : "$2y$10$Ct32ZArqUvSlWcqvs0UZQepeGMXqLmibCJz.Gl58HFlp2JfXEs3Wi",//Mike@123
          user_type : "645e348b7483b6558146f845",
        }
      ])
      .then((res) => {
        // Prints "1"
        console.log(res.insertedCount);
      });
  },

  down: (models, mongoose) => {
    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return models.users
      .deleteMany({
        _id: {
          $in: [
            "6679472b970662a8c8cbd2b0",
            "6679475d970662a8c8cbd2b1",
            "66794770970662a8c8cbd2b2",
          ],
        },
      })
      .then((res) => {
        // Prints "1"
        console.log(res.deletedCount);
      });
  },
};
