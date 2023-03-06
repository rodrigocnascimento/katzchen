#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USERNAME" --dbname "$POSTGRES_DATABASE" <<-EOSQL
  CREATE DATABASE $POSTGRES_DATABASE;
  CREATE DATABASE $POSTGRES_TEST_DATABASE;

  GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DATABASE TO postgres;
  GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_TEST_DATABASE TO postgres;
EOSQL
