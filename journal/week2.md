# Week 2 — Distributed Tracing

## Homework

* Instrument Honeycomb for the frontend-application to observe network latency between frontend and backend[HARD]
* Add custom instrumentation to Honeycomb to add more attributes eg. UserId, Add a custom span
* Run custom queries in Honeycomb and save them later eg. Latency by UserID, Recent Traces

## Troubleshooting

Tracer/Span - Had issues with tracer/span in home_activities.py. I was not seeing app.results_length in honeycomb. I reviewed everything and still nothing. I looked at the logs and noticed this message "Setting attribute on ended span". Assumed the span was closing before it got to this line. The issue ended up being an indentation issue. I had to tab it one more tab past "return results". I compared mine to what was in the youtube video and line spaces/tabs all match, not sure why I had to add an extra tab. However, app.results_length works now. I'll probably go back and review spacing issues.
