"use strict";

module.exports = {
  up: (models, mongoose) => {
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return models.user_types
      .insertMany([
        {
          _id: "645e344f7483b6558146f843",
          user_type: "admin",
        },
        {
          _id: "645e34807483b6558146f844",
          user_type: "faculty",
        },
        {
          _id: "645e348b7483b6558146f845",
          user_type: "student",
        },
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
    return models.user_types
      .deleteMany({
        _id: {
          $in: [
            "645e344f7483b6558146f843",
            "645e34807483b6558146f844",
            "645e348b7483b6558146f845",
          ],
        },
      })
      .then((res) => {
        // Prints "1"
        console.log(res.deletedCount);
      });
  },
};
