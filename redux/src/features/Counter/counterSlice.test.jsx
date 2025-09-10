import reducer, {
  increment,
  decrement,
  incrementByAmount,
  reset,
  selectCountValue,
} from "./counterSlice";

describe("counter reducer", () => {
  it("should return the initial state when passed an unknown action", () => {
    const next = reducer(undefined, { type: "@@INIT" });
    expect(next).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    const prev = { value: 0 };
    const next = reducer(prev, increment());
    expect(next).toEqual({ value: 1 });
  });

  it("should handle decrement", () => {
    const prev = { value: 2 };
    const next = reducer(prev, decrement());
    expect(next).toEqual({ value: 1 });
  });

  it("should handle incrementByAmount with a positive amount", () => {
    const prev = { value: 1 };
    const next = reducer(prev, incrementByAmount(5));
    expect(next).toEqual({ value: 6 });
  });

  it("should handle reset", () => {
    const prev = { value: 42 };
    const next = reducer(prev, reset());
    expect(next).toEqual({ value: 0 });
  });
});

describe("counter actions", () => {
  it("increment action has the correct shape", () => {
    expect(increment()).toEqual({ type: "counter/increment" });
  });

  it("incrementByAmount action carries payload", () => {
    expect(incrementByAmount(3)).toEqual({
      type: "counter/incrementByAmount",
      payload: 3,
    });
  });
});

describe("counter selector", () => {
  it("selectCountValue returns the value from root state", () => {
    const state = { counter: { value: 7 } };
    expect(selectCountValue(state)).toBe(7);
  });
});
