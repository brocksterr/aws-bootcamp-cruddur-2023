# Week 1 — App Containerization

## Homework Challenge

Run the dockerfile CMD as an external script
Push and tag a image to DockerHub (they have a free tier)
Use multi-stage building for a Dockerfile build
Implement a healthcheck in the V3 Docker compose file
Research best practices of Dockerfiles and attempt to implement it in your Dockerfile
Learn how to install Docker on your localmachine and get the same containers running outside of Gitpod / Codespaces
Launch an EC2 instance that has docker installed, and pull a container to demonstrate you can run your own docker processes.

## Notes

Spelling is important and can reduce the need for troubleshooting....


## Troubleshooting:

* Had to do some troubleshooting becuause I misstyped the import statement in app.py for "notifications_activities" - **Resolved**
* Had to do some troubleshooting becuase I was receiving "NameError: name 'NotificationsActivities' is not defined" while accessing api/activities/notifications - **Resolved**
* Had to figure out why my feed was blank. Inspected the page and saw a couple of errors that indicated a network problem. Discovered that the ports were private and not public. Making them public fixed the issue. - **Resolved** Although, it still complains about a websocket (ws) issue to the backend.
