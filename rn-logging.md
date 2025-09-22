Importance of logging in a production React Native app

- Catch silent errors that may not crash the app, logging will reveal these erros.
- Logging users interactionas and key events allows developers gain knowledge on how the users engages with the app.
- Gain a deaper understanding of why a crahs or bug happens on a specific device or build.
- Allows you to monitor app performance such as load times and network requets.

Improved debugging and issue tracking with Sentry

- Session replay for mobile app provides the capability to watch what a user did before/during the error so that we can reproduce the error.
- Conextual data is provided when errors occur including stack traces, breadcrumbs, environemtnal details and user context which helps with gaining a better understanding of the cause of a bug or issue.
- Performance traces to help trace slow screens and API calls between JS - native.
-

Best Practices for handling and logging errors

- Make structured logs that use a consistent format for log messssages.
- Log with levels, e.g use differnet levels for logs (INFO, DEBUG, WARN, ERROR)
- Avoid logging sensitive data.
- Never log secects.
- Include metadat that is relevant to the context of the log messages e.g timestamps, severity level, UID, user ID
- Capture both native and JS errors.
