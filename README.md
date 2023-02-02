# [McFaceBook](https://mcfacebook.netlify.app)

## Authors
* Daniel Park 
* Maria Hamilton 
* Josh Wu
* Theo Robinson 

## Installation Instructions
- To run this app locally, fork and clone this repo and the [server](https://github.com/tbfrobinson/domino-server) repo. 
- Next, in your terminal, go to the locally-cloned repository and run `npx create-react-app . ` and `npm i`
- Check to see if `node_modules` is in the `.gitignore` file on both the forked client and server repos. If not, run the commands `echo node_modules >> .gitignore` and `echo .env >> .gitignore`. 
- Then, in your forked Client repo, run this command in your terminal `touch .env.local` and paste in `REACT_APP_SERVER_URL=http://localhost:8000`. 
- Afterwards, in your forked Server repo, run this command in your terminal `touch .env` and add `JWT_SECRET='[You can add anything here]'`
- In your terminal for the Client, run `npm start`. In your terminal for server, run `nodemon` 

## Project Pitch and description 
The year is 2023 and to some people's surprise, Twitter died. In its place, a new social media has sprung up. McFaceBook is a blog-style social media app that lets users post their thoughts and commenters can wage flame wars against each other in the comment sections (if it exists 🤫). 

## Approach
### Choosing a Project Idea
On the day the project was assigned, we had a Google Doc that each team member added their ideas for what kind of app they wanted to create, along with what names they would want the app to be called. 
### Splitting the Work
Originally, we had a difficult time trying to divide the work among all 4 members because our pitch needed to be resubmitted. However, once it was approved, it was easy to divide the work because we had been planning on the Miro board. 

## Website Preview
![Model](/screenshots/website.png)

## ERD 
![Model](/screenshots/ERD.png)

## Restful Routing Chart 
![Model](/screenshots/routes.png)

## Wireframe 
![Model](/screenshots/homepage.png)
![Model](/screenshots/blog.png)

## Tech Stack
* MongoDB
* Express
* React.js
* Node.js 

## User Stories 
* As a user, regardless of whether I am signed in or not, I would like to be able to view blog posts on the home page 
* As an unregistered user, I would like to be able to sign up for an account
* As a registered user, I would like to be able to sign in/out
* As a signed in user, I would like to be able to create a post, edit a post, and delete a post
* As a signed in user, I would like to be able to view comments under a specific blog and post a comment 

 ## MVP 
 * Render a home page that displays blog posts 
 * Render a comment section 
 * Render a page that displays a specific blog when clicked on
 * Be able to create, edit, and delete posts 
 * Be able to post comment(s)

## Stretch Goals
* CSS styling
* Be able to like and dislike a post 
* Be able to view a list of posts that I have liked
* Be able to edit and delete comments
* Integrate an API that will generate random Breaking Bad quotes 

## Unsolved Problems/Major Hurdles
Looking at the finished product, we don't seem to have any unsolved problems. However, one thing we did not get around to was to limit the amount of posts that would appear on the page so that in the off chance a large number of posts are created, the user doesn't have to endlessly scroll to get to the bottom of the page. <br>

Some of the major hurdles we faced was the planning during the beginning of the project. It was difficult to get started on planning the project because we didn't have a central authority figure that acted like a psuedo manager/supervisor. For the first few hours of the project work time during class, we struggled to come up with a solid game plan regarding the direction of the workflow. Once we opened up a Miro board, the planning became easier and more streamlined, and as a result, we were able to start work on the project itself later on in the day. Communication was not a major hurdle for us as each team member was very responsive to messages sent both in Slack and Discord.
