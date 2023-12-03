CREATE SCHEMA namegator;

CREATE TABLE namegator.item (
    id serial,
    type text not null,
    description text not null
);

INSERT INTO namegator.item (type, description) VALUES ('prefix', 'Air');
INSERT INTO namegator.item (type, description) VALUES ('prefix', 'Jet');
INSERT INTO namegator.item (type, description) VALUES ('prefix', 'Flight');
INSERT INTO namegator.item (type, description) VALUES ('sufix', 'Hub');
INSERT INTO namegator.item (type, description) VALUES ('sufix', 'Station');
INSERT INTO namegator.item (type, description) VALUES ('sufix', 'Mart');
