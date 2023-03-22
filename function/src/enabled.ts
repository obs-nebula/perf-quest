// code based on the official example
// https://github.com/open-telemetry/opentelemetry-js/blob/ef6fcdcd1a7e5234758e3bcc9ff6c29db5ff4d23/examples/basic-tracer-node/index.js
import opentelemetry, { Span } from '@opentelemetry/api';
import { BasicTracerProvider, ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';

const provider = new BasicTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const tracer = opentelemetry.trace.getTracer(process.env.npm_package_name!, process.env.npm_package_version);

const parentSpan = tracer.startSpan('main');

parentSpan.end();

function doWork(parent: Span) {
  const ctx = opentelemetry.trace.setSpan(opentelemetry.context.active(), parent);
  const span = tracer.startSpan('doWork', undefined, ctx);

  for (let i = 0; i <= ~~(Math.random() * 4e7); i += 1) {
    //
  }
  span.setAttribute('key', 'value');
  span.addEvent('invoking doWork');
  span.end();
}

export function callDoWorkEnabled() {
  for (let i = 0; i < 10; i += 1) {
    doWork(parentSpan);
  }
}
