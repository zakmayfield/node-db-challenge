
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "computer",
          description: "a fast one"
        },
        {
          name: "email account",
          description: "probaly a gmail"
        },
        {
          name: "internet access",
          description: "a least 5mbps to use email?"
        },
        {
          name: "whole wheat bread",
          description: "..."
        }
      ]);
    });
};
