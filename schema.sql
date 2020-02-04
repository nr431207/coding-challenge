CREATE DATABASE database;
DROP TABLE IF EXISTS tasks
DROP TABLE IF EXISTS dependecies

CREATE TABLE tasks (
  task_id INT NOT NULL PRIMARY KEY,
  task_group VARCHAR(255),
  task_name VARCHAR(255),
  completed_at DATE
);

CREATE TABLE dependecies (
  id INT NOT NULL PRIMARY KEY,
  task_id INT FOREIGN KEY REFERENCES tasks(task_id)
  dependency_id INT FOREIGN KEY REFERENCES tasks(task_id) 
)