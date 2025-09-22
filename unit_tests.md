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

- Using Reawct Testing Library (RTL) provides several benenfits over testing implementation details including giving the capability to minic how real world users would interact with the application ensuring your application behaves as expected. It also helps with reducing the likehood your tests will break after refactoring which is a common occurance when just tesing implementation details.

Challenges when simulating user interactions

- When doing my form testing i did find it challenging to implement the async behavior required to get userEvent to work, I had to use both async and await methods to ensure that each interaction finished before making the assertions.

Importance of automated testing in software development.

- Helps save costs as manual testing is time comsuming.
- Imprvoed feedback loops with faster test and quicker results.
- Higher accuracy than manual testing as manual testing cannot deliver 100% accurate results.
- Increased test coverage, QA's can perform more number of test cases meaning more tests = wider coverage of features.

Challenge with writing first Jest Test.

- Jest was quite forward to setup for my project, and once the code was written for the basic addition test it ran without an issue, later on i could see some potential challenges with further configuring my jest to work with not only JS files but also JSX.
