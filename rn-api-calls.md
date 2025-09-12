why is Axios preferred over fetch in some cases.

- Axios provides additional features when compared to fetch these include:
  - Automatic JSON parsing.
  - Simplified error handling.
  - Interceptors.
  - Browser compatibility.
  - Request cancellation and Timeouts.

Axios-Retry Improvements to network reliability.

- Axios-Rety impvoves it as it will automatically reattempting failed HTTP requests, it also provides to capability to change retry condiitons by attempting a retry for specific HTTP status codes or network errors.
  Doing this improves the resillience of the application against network issues or server side problems.

Handling API failures gracefully

- Use try-catch blocks to catch errors or network errors that are returned by the API. Provide UI messages that translate the error for the user. This can also be done for the loading and error states to indicate to the user what state the APi is in.
- Wrap Components that may fail with ErrorBoundary.
- Implement Retry mechanics for transient erros, this can be done with Axios-Retry.
- Use centralized error handling and logging creating a function or service to handle and log errors across the application.
