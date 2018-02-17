# Posts
Basic Rails/React app to perform CRUD operations on posts.

Uses the gem webpacker to integrate React. Scaffold was used to generate all the boiler plate Rails stuff. The front-end makes API calls to the Rails back-end. Also using React router to manage front-end routing, and added a little style using spectre.css. 

For fun when creating or updating a post, a factorial for a number between 1 & 10 will randomly be generated. 

Please make sure you have Postgres installed before following these steps. 

To setup run:
````
1. bundle install
2. yarn install
3. rake db:create
4. rake db:migrate
````

To start: `foreman start`
