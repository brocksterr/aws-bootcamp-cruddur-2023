# Week 2 — Distributed Tracing

## Homework

* ~~Instrument Honeycomb for the frontend-application to observe network latency between frontend and backend[HARD]~~ - **DONE** - Lots and lots of troubleshooting. Not on instrumentatino, but on node packages with Honeycomb. Crudder would not load after following Honeycomb's instructions with tracing.js. I saw lots of errors on the frontend releated to not being able to find packages under "node_modules" even though they were installed and I could browse through the packages. I created my own node projects from scratch and tried to instruement those, but received the same errors. I followed several stackoverflow and github conversatinos on possible resolutions. I changed over to typescript, I downgrad my react scritps, along with several other things. I spent several hours on this before deciding to go in another direction. I went with an OTEL container and 95% of my problems were resolved by this. Although, one issue that prevent Cruddur from loading correctly was indentation/spacing in a python file.
* Add custom instrumentation to Honeycomb to add more attributes eg. UserId, Add a custom span - **Done**
* Run custom queries in Honeycomb and save them later eg. Latency by UserID, Recent Traces - **Done**

The other activites weren't bad. I've played around with x-ray in the past and actively use cloudwatch. Those tasks were a lot easier. 

## Troubleshooting

Tracer/Span - Had issues with tracer/span in home_activities.py. I was not seeing app.results_length in honeycomb. I reviewed everything and still nothing. I looked at the logs and noticed this message "Setting attribute on ended span". Assumed the span was closing before it got to this line. The issue ended up being an indentation issue. I had to tab it one more tab past "return results". I compared mine to what was in the youtube video and line spaces/tabs all match, not sure why I had to add an extra tab. However, app.results_length works now. I'll probably go back and review spacing issues.

Article about downgrading react in an attempt to resolve my issue with polyfills. https://github.com/facebook/create-react-app/issues/11756
