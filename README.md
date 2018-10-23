# BarBack #
BarBack is a drink ordering and bar management tool focused on delivering a unique experience for bar owners, staff, and customers.

## Deployed URL link ##
https://goonies-barback.herokuapp.com/

## Team ##
Goonies developers: Ryan Heise, Stephen Zerfas, Nicolas Turner (Scrum Master), Joanne Kim, Sarah Silva (Product Owner)

Sumtingeneric legacy developers: J.P. Da Prato (Product Owner), Duke Goulden (Scrum Master), Carlos Astrada, Michael Banzon, Fredrick Lou

## Usage ##

Local Host settings:
- Start MYSQL/MariaDB in ternmial with: 'mysql.server start', then 'mysql -u root -p', press enter when password is requested
- In SQL, create database "barback"
- Create .env file in root directory with the following:
  - HOST=localhost
  - PORT=7337

- NPM Install will first install dependencies then,
- Postinstall will auto-run and perform the following actions
  1. Parcel Build - (webpack alternative to build react dist)
  2. NPM run copy:media - Copies image files into dist folder

Requirements
Node >= V8
MYSQL or MariaDb

Contributing
See CONTRIBUTING.md for contribution guidelines.
