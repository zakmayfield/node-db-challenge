
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', projects => {
      projects.increments();
      projects.string('name', 244)
        .notNullable();
      projects.string('description', 1024);
      projects.boolean('completed', 244)
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', resources => {
      resources.increments();
      resources.string('name', 244)
        .notNullable();
      resources.string('description', 1024);
    })
    .createTable('tasks', tasks => {
      tasks.increments();
      tasks.integer('step_number', 244)
        .notNullable();
      tasks.string('description', 1024)
        .notNullable();
      tasks.string('notes', 1024);
      tasks.boolean('completed', 244)
        .notNullable()
        .defaultTo(false);

      tasks.integer('project_id', 244)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('project_resources', pr => {
      pr.integer('project_id', 244)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      pr.integer('resource_id', 244)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      pr.primary(['project_id', 'resource_id']);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
