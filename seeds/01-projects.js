
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "apply for job",
          description: "Go get 'em!",
          completed: false
        }
      ]);
    });
};
