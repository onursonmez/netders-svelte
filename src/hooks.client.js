import * as Sentry from "@sentry/svelte";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: "https://b733a4b8b8c842bf825e6d35f3bae827@o4504741805162496.ingest.sentry.io/4504741806145536",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

/** @type {import('@sveltejs/kit').HandleClientError} */
export function handleError({ error, event }) {
    const errorId = crypto.randomUUID();
    // example integration with https://sentry.io/
    Sentry.captureException(error, { event, errorId });

    return {
        message: 'Whoops!',
        errorId
    };
}
