# Grubhub System Design

> System design and DBMS optimization of Grubhub menu page front-end mock-up

* Inherited front-end codebase to optimize the back-end
  * Seeded 10 million records and benchmarked query times
    * Optimized query times for a RDBMS (PostgresSQL) and NoSQL DBMS (MongoDB) by utilizing connection pooling and B-tree indexing
    * MongoDB yielded better results under high traffic
  * Horizontally scaled out on AWS EC2 micro-service instances and utilized Nginx load balancer (Round Robin technique)

**Result: 4,440 request per second with 0% error rate**

## Requirements <a name="requirements"></a>

You will need [Node.js](https://nodejs.org/en/) and [mongoDB](https://docs.mongodb.com/manual/administration/install-community/) installed on your system.

## Installation & Setup <a name="installation"></a>

Get the code by cloning this repository using git

```bash
git clone https://github.com/wjdwldbs/Grubhub_System_Design.git
```

Once cloned, open the terminal in the project directory and install dependencies locally using npm:

```bash
$ npm install
```

Write and seed data entries with:

```bash
$ npm run seed
$ npm run write
```

Start app with:

```bash
$ npm start
```