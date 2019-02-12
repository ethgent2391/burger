CREATE DATABASE burger_db;
USE burger_db;
CREATE TABLE burgers{
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    devoured BIT NOT NULL DEFAULT 0,
};