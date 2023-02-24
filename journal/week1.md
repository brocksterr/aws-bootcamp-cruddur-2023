# Week 1 — App Containerization

## Homework Challenge

Run the dockerfile CMD as an external script
Push and tag a image to DockerHub (they have a free tier)
Use multi-stage building for a Dockerfile build - **Done** - I've used Docker for a while, but never did a multi-stage build. I folowed the tutorial on Docker.com. [Multi-Stage Docker Build](https://docs.docker.com/build/building/multi-stage/)
Implement a healthcheck in the V3 Docker compose file
Research best practices of Dockerfiles and attempt to implement it in your Dockerfile - Done - Referenced the [Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) page from Docker.com.
Learn how to install Docker on your localmachine and get the same containers running outside of Gitpod / Codespaces - **Done** - Already had docker desktop and vscode installed. Added the docker plugin to VScode. Checked out my repo and ran docker up.
Launch an EC2 instance that has docker installed, and pull a container to demonstrate you can run your own docker processes. - **Done** - Launched a micro instance, yum install docker

## Notes

Spelling is important and can reduce the need for troubleshooting....

## Troubleshooting:

* Had to do some troubleshooting becuause I misstyped the import statement in app.py for "notifications_activities" - **Resolved**
* Had to do some troubleshooting becuase I was receiving "NameError: name 'NotificationsActivities' is not defined" while accessing api/activities/notifications - **Resolved**
* Had to figure out why my feed was blank. Inspected the page and saw a couple of errors that indicated a network problem. Discovered that the ports were private and not public. Making them public fixed the issue. - **Resolved** Although, it still complains about a websocket (ws) issue to the backend.
