# Grubhub System Design

> System design and DBMS optimization of Grubhub menu page front-end mock-up

* Inherited front-end codebase to optimize the back-end
  * Seeded 10 million records and benchmarked query times
    * Optimized query times for a RDBMS (PostgresSQL) and NoSQL DBMS (MongoDB) by utilizing connection pooling and B-tree indexing
    * Achieved better results with MongoDB under high traffic
  * Horizontally scaled out on AWS EC2 micro-service instances and utilized Nginx load balancer (Round Robin technique)

**Result: 4,440 request per second with 0% error rate**
