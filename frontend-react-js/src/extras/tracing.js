import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { WebTracerProvider, BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
// import { trace } from '@opentelemetry/api';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

// For sending traces for all http request
import { registerInstrumentations } from '@opentelemetry/instrumentation';

const exporter = new OTLPTraceExporter({
  url: `${process.env.REACT_APP_OTEL_COLLECTOR_ENDPOINT}/v1/traces`,
});

//Reference Docs
//https://docs.honeycomb.io/getting-data-in/opentelemetry/browser-js/#automatically-propagate-the-trace-context-header
//https://docs.honeycomb.io/getting-data-in/opentelemetry/browser-js/
//https://www.w3.org/TR/trace-context/

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
    getWebAutoInstrumentations({
      // load custom configuration for xml-http-request instrumentation
      '@opentelemetry/instrumentation-xml-http-request': {
        propagateTraceHeaderCorsUrls: [
          new RegExp(`${process.env.REACT_APP_BACKEND_URL}`, 'g')
        ],
      },
      '@opentelemetry/instrumentation-fetch': {
        propagateTraceHeaderCorsUrls: [
          new RegExp(`${process.env.REACT_APP_BACKEND_URL}`, 'g')
          ],
      },
    }),
  ],
 });
 
