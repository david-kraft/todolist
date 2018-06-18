### Schema
DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todo
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    complete BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);