Common performance issues for React Native.

- Components re-rendering more than they need to leading to a waste of CPU resources.
- slow list rendering due to not implementing proper optimization.
- execessive use of JS bridge causing a bridge bottleneck.
- Slow navigation transitions by using the wrong navigation libraries.
- large animations and transitions that rely heavily on JS, this causes same issue as stated before with JS bridge becoming the bottleneck.
- Failing to correctly handle API calls or making to many of them.

useMemo and useCallback performance improvements.

- useMemo hook memoized the results of a computation inside a functional components, The hook will the only recompute the value when one of the dependencies change which helps avoid avoid unnessary recalculations.
- UseMemo hook memoizes a callback functions inside a functional components. It ensures the fucntion isnt't re-created on every render helping to prevent unecessary re-renders of child components that rely on function references.

tools to measure and monitor performance.

- React Devtools profiler: provides details on component rendering, used to help identify performance bottlenects with re-renders.
- Flipper: Provides debugging features and has plugins for monitoring performance with insight into network request and memory usage. Is able to track JS and native performance side by side.
- Sentry: Track errors, crashes and slow performance, will provide insight into both JS and native layers.
- Firebase: Tracks startup times, network requests and screen render speeds. Ideal for ongoing perforamnce checks in production.

Importance of Testing in React Native Development.

- Ensures application reliability and stability.
- Maintains code quality.
- Helps prevent regression.
- Improves user experience.

MockAPI calls in tests.

- To mimic API calls in tests mockAPI's are used which replace real network requestes with fake responses, Doing so ensures that the tests are reliable and independant from external services. In Jest, you can mock a module (jest.mock("axios")) or spy on globals like fetch (jest.spyOn(global, "fetch")), then set outcomes with mockResolvedValue/mockResolvedValueOnce for successes and mockRejectedValue/mockRejectedValueOnce for failures. This lets you test both happy and error paths without connecting to the network.

Integration vs unit tests.

- Unit tests are focused on individual units or components such as single function, methods or classes.
- Integration tests are used to verify the interactions between multiple units or components ensuring they interact and work with each other as expected.
