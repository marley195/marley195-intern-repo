Using UseCallback

What problem does useCallback solve?

- Solves the problem of referential equality by providing a stable, memoized function instance across re-renders, this ensure that the function only rebuilds if the things it depends on actually change rather than every re-render.

How does useCallback work differently from useMemo?

- useCallBack returns a memoized version of a callback function that will only change if one of its dependencies in the dependency array change whereas useMemo returns a memoized value that is the result of a function execution, the function only re-executes to re-calcalucate the value if one of its dependencies in the dependency array has changed. This is useful when computerations or operations should not be recalcuated every render.

When would useCallback not be useful?

- Simple functons not passed as props.
- Functions used only in event handlers: as these often have minimal performance impact adding useCallBack outweights the benefits.
- Initial render.
- If the dependencies wont change.

Optimize performance with use Memo

How does use Memo improve performance?

- By memoizing the results of expensive calculations to ensure re-execution only happens if its dependencies change.

When should you avoid using useMemo?

- Cheap computations as the cost of useMemo will outweigh the benefits.
- Working with primitive values as return typres.
- If the memoized value is not often used

What happens if you remove useMemo from your implementation?

- Without useMemo for my implemetation if you toggled the unrelated state it would re-calcuate out double increment even though it didnt change.

useEffect

When should you use useEffect instead of handling logic inside event handlers?

- useEffect runs logic in reaction to component lifecycle or when dependencies change so it is ideal for side effects that need need to respond to changes in component state or props rather than user interaction like handling logic does.

What happens if you don’t provide a dependency array?

- the effect will run after every render.

How can improper use of useEffect cause performance issues?

- A missing or wrong dependency array can cause it to run after every render.
- render loops: if the effect upates the state thats in the dependency array it can cause an infinite loop.
- Not Cleaning up subscriptions or event listeners can cause memory leaks or multiple listeners.
