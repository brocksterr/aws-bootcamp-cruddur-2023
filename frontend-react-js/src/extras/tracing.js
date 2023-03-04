import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { WebTracerProvider, BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// import { trace } from '@opentelemetry/api';

// For sending traces for all http requests
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';

const exporter = new OTLPTraceExporter({
  url: `${process.env.REACT_APP_OTEL_COLLECTOR_ENDPOINT}/v1/traces`,
});

//Reference Docs
//https://docs.honeycomb.io/getting-data-in/opentelemetry/browser-js/#automatically-propagate-the-trace-context-header

const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "FRONTEND",
  }),
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register({
  contextManager: new ZoneContextManager()
});

registerInstrumentations({
  instrumentations: [
    new XMLHttpRequestInstrumentation({
      propagateTraceHeaderCorsUrls: [
        new RegExp(`${process.env.REACT_APP_BACKEND_URL}`, 'g')
      ]
    }),
    new FetchInstrumentation({
      propagateTraceHeaderCorsUrls: [
        new RegExp(`${process.env.REACT_APP_BACKEND_URL}`, 'g')
      ]
    }),
    new DocumentLoadInstrumentation(),
  ],
});