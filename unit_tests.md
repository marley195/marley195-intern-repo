Challenges.

- Getting the Environemnet and Jest configuations setup for babael + jest.
- while i did not implement a test which required a full store i have read that determining when to use them with testing can be difficult.
- Ensuring i reset cache between tests.

Redux test differences.

- Redux primarily focuses on testign the redux store, reducers, actions and selectors by verifying the logic of state updates to ensure that the actions correctly trigger state changes and the selectors retrieve the expectd data from the state. The difference from this to react testing is that react focuses more on the rendering and behaviour of inidividual react components.

Testing Results

> my-app@0.0.0 test
> jest

PASS src/features/Counter/counterSlice.test.js
counter reducer
✓ should return the initial state when passed an unknown action (2 ms)
✓ should handle increment
✓ should handle decrement
✓ should handle incrementByAmount with a positive amount (1 ms)
✓ should handle reset
counter actions
✓ increment action has the correct shape (1 ms)
✓ incrementByAmount action carries payload
counter selector
✓ selectCountValue returns the value from root state

Test Suites: 1 passed, 1 total
Tests: 8 passed, 8 total
Snapshots: 0 total
Time: 0.413 s

Mock API calls.

- Using the mock API call when tesing allows the user to isolate the component being tested from external dependencies, such as actual API services. The helps when external API services may not be fully up and running as well.

Pitfalls when testing asychronous code.

- not using async/await or done callbacks when testing asynchronous code.
- Outcomes can depend on the timing of events, laeding to race conditions.
- Not remembering to handle rejected promises orexceptions in asych code.

Benefits of React Testing Library instead of testing implementation details.

-

Challenges when simulating user interactions
