USE mysql;

CREATE USER 'playground_user'@'%' IDENTIFIED BY ' kim13245';
GRANT ALL PRIVILEGES ON playground.* TO 'playground_user'@'%' WITH GRANT OPTION;

FLUSH PRIVILEGES;