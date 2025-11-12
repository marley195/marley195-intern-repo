What was the issue?

- The issue i implemented in debugging.jsx in my react-fundamentals project was the stale closure bug in which our example problem captures the vairable count = 0 from the render in which it was created, it keeps using this snapshot thinking that counter = 0 every time it uses the callback.

What debugging method did you use?

- To avoid the state closure bug we used the option of useRef hook in which we keep a mutable reference to the count.

How did you resolve the problem?

- To avoid this issue i implemented useRef in which the latest value is kept in and its allowed to be read from in the internval, This ensures that we have a stable intterval that can read the evolvoing values without recreating itself
