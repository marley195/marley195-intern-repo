Making API calls with Axios

Resuable Axios instances

- centralized configuration.
- Consistent Authentication using interceptors.
- allows for reusability and maintainability.

Intercepting requests for authentication

- As interceptors let you hook into every request before it leaves the application you can ensure that each requests has the right authenification.

API request time out handle

- Axios aborts and throws ECONNABORTED error.
- timeout periods can be set when an instance is created.
- AbortController can be used to manually abort requests and also abort multiple signals at the same time.
