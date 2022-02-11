

CREATE TABLE beers (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  beer_name VARCHAR(30) NOT NULL,
  beer_description VARCHAR(30) NOT NULL,
  beer_champion BOOLEAN NOT NULL
);