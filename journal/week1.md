# Week 1 — App Containerization

## Homework Challenge

Run the dockerfile CMD as an external script - **Done**

Push and tag a image to DockerHub (they have a free tier) - **Done** - Created a public repo in docker hub called "firstcontainerrepo", pushed the existing backend image for Cruddur to the hub.

I logged into Docker Hub via the CLI, tagged the image I was using for the backend, and then pushed it to Docker Hub using the commands below.

Public Repo location: https://hub.docker.com/r/brocksterr/aws-bootcamp-crudder-backend

**b**rock@Brocks-MacBook-Pro-2 ~ % docker tag 219b859ed69f *myusername*/aws-bootcamp-crudder-backend:latest


brock@Brocks-MacBook-Pro-2 ~ % docker push *myusername*/aws-bootcamp-crudder-backend

docker push brocksterr/firstcontainerrepo:tagname

docker push firstcontainerrepo:aws-bootcamp-cruddur-2023-backend-flask

Use multi-stage building for a Dockerfile build - **Done** - I've used Docker for a while, but never did a multi-stage build. I folowed the tutorial on Docker.com. [Multi-Stage Docker Build](https://docs.docker.com/build/building/multi-stage/)

Implement a healthcheck in the V3 Docker compose file - **Done** - I added a health check to each docker file to check their respective service. I docker-compose restarted, ran docker ps and noticed that one container was healthy and the other container was unhealth. I had an error in my healthcheck. I corrected it, docker-compose restarted again, and then docker ps showed that both containers were healthy. 

Research best practices of Dockerfiles and attempt to implement it in your Dockerfile - Done - Referenced the [Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) page from Docker.com. Need to spend a little time reviewing our current dockerfiles to see how I can improve them. 

Learn how to install Docker on your localmachine and get the same containers running outside of Gitpod / Codespaces - **Done** - Already had docker desktop and vscode installed. Added the docker plugin to VScode. Checked out my repo and ran docker up. Had issues getting the frontend container up, but that was only because I did not have npm installed. I installed NVM and am using it for npm. I tried doing some of these without watching the videos and I now see that you cover this issue in the notification video. Additionally, once I got the containers running, I could load the page but I was not getting any content in the feed. I duplicated the docker-compose file, renamed it to docker-compose-local and changed the envars to localhost. A docker-compose restart and then everything worked. 

Launch an EC2 instance that has docker installed, and pull a container to demonstrate you can run your own docker processes. - **Done** - Launched a micro instance, yum install docker

## Notes

Spelling is important and can reduce the need for troubleshooting....

## Troubleshooting:

* Had to do some troubleshooting becuause I misstyped the import statement in app.py for "notifications_activities" - **Resolved**
* Had to do some troubleshooting becuase I was receiving "NameError: name 'NotificationsActivities' is not defined" while accessing api/activities/notifications - **Resolved**
* Had to figure out why my feed was blank. Inspected the page and saw a couple of errors that indicated a network problem. Discovered that the ports were private and not public. Making them public fixed the issue. - **Resolved** Although, it still complains about a websocket (ws) issue to the backend.
