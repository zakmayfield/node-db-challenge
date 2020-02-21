
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          step_number: 1,
          description: "turn on your computer",
          notes: "...",
          completed: false,
          project_id: 1
        },
        {
          step_number: 2,
          description: "search job listings",
          notes: "...",
          completed: false,
          project_id: 1
        },
        {
          step_number: 3,
          description: "find your dream job",
          notes: "...",
          completed: false,
          project_id: 1
        },
        {
          step_number: 4,
          description: "apply for that dream job",
          notes: "...",
          completed: false,
          project_id: 1
        },
        {
          step_number: 5,
          description: "get shot down... hard",
          notes: "...",
          completed: false,
          project_id: 1
        },
        {
          step_number: 6,
          description: "try again tomorrow",
          notes: "...",
          completed: false,
          project_id: 1
        }
      ]);
    });
};
