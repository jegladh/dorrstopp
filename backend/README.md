## Beskrivning
Backend för DS-sidan. REST api för att kommunicera med mysql DB.
Tips: anänd postman för att testa dina anrop t.e.x. GET localhost:3000/stoppisar för att lista alla stoppisar i json-format.

Om du får problem med att ansluta till en lokal DB så testa denna SQLquarry i din mysql-prompt.
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
där pw är det lösenord du valt för mysql

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```