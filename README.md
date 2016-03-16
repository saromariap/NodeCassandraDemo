# NodeCassandraDemo
This demo will show how to connect Cassandra KeySpace to Node and perform CRUD operation.

# Installation
- NodeJS
- GIT SCM for Windows/Linux/Mac
- Apache Cassandra for Windows/Linux/Mac (from DataStax)

# Setup
- Connect to Cassandra CQL Shell
- cqlsh> DESCRIBE KEYSPACES;
- Shows all default key spaces available

- Create a new Keyspace and activate it using USE
- cqlsh> CREATE KEYSPACE people WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor':3};
- cqlsh> USE people;

- Create a new table subscribers and insert records to it.
- cqlsh> CREATE TABLE subscribers(id uuid, email text, first_name text, last_name text, PRIMARY KEY(id));
- cqlsh> DESCRIBE TABLES;
- cqlsh> INSERT INTO subscribers(id, email, first_name, last_name) values (now(), 'u1@gmail.com', 'Rob', 'Smith');
- cqlsh> SELECT * FROM people.subscribers;

- Navigate to the project directory i.e mysubscribers and run 'npm start'. This will the application in http://localhost:3000

# NOTE
- Editing JavaScript files requires restarting node server whereas Jade view files doesn’t require restart
- In Cassandra Insert, when the key is already available in the COLUMNS it won’t throw unique error like RDBMS, instead it updates the existing record.
- In Cassandra, if we update the primary key then it will create a whole new record instead of updating the data

# Author
Saravanakumar Mariappan
