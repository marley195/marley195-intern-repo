Unit Tests

How do unit tests help keep code clean?

- provides detection of bugs and code smells.
- supports safe refactoring by ensuring the refactor doesnt introduce new bugs.
- Encourgaes modular code.

What issues did you find while testing?

- Choosing what code to test.
- Not testing all edge/corner cases.
- Didnt have enough test data.

Handling Errors & Edge Cases

Issues with original code

- Doesnt check or validate inputs.
- No exception handling to ensure errors are caught.
- No feedback logging is provided when erorr does occur to assist with debugging.

How does handling errors improve reliability?

- Prevents system crashes by catching eorrors early.
- Ensure better availability as system doesnt crash from errors.
- Assists with debugging and maintaince as detailed logs are published making it easier for developers to diagnoses issues.

Commenting & Documentation

When to add comments

- Clarify complex logic.
- Explain the reason behind a piece of code if it isnt obvious.
- documentation for things like APIs or pulbic interfaces.
- Highlighting assumptions and constraints.

When to avoid comments

- Stating what the code does if its already clear.
- As a substitute for clean code.
- Outdated or redundant comments
- documation with no new information

Refactoring Code for Simplicity

What made the original code complex?

- non-obvious variables names.
- Everything was in a single block of code.
- Mutiple responsibilities in a single function.
- Long conditionals

How did refactoring improve it?

- Clear function names show what each part does.
- Logic split into reusable units.
- Easier for testing.
- Code is easier to read.

Avoiding Code Duplication

issues with duplicate code

- Slows down software performance.
- Causes codebase to be harder to understand and read.
- Decrease maintainability of codebase.
- Introduces more bugs and makes it more difficult to debug.

maintainability improvement from refactoring

- Reduced bug risk: bugs are less likely to be introduced as code only needs to be changed in one spot instead of many.
- Simpler testing, only needs to be done on one function instead of several.
- Cleaner and smaller codebase makes it easier to read and develop from

Writing Small, Focused Functions

Benefits of breaking down functions

- Improves readabukuty of each function.
- Makes it easier for testing/debugging when a function only has one role.
- Smaller functions can be reused in mulitple places.
- Encourages the single repsonibiity principle.

Code structure improvements from refactoring

- Made each function easier to read.
- Reduced clutter in each function as their purpose was clear.
- Improved reusablility, now each small function can be resued as needed.
- Helped with testing and debugging.

Understanding Clean code Principles

- Simplicity:Avoid overcomplication, Each line of code should add clear value.
- Readability: Code should have meaningful names and logical structure which is simple to follow.
- Maintainability: Code should be laid out in a way that makes it easy for other contributors to maintain.
- Consistency: Use unified styles that all contributors can understand.
- Efficiency:Aim for optimized code by reducing computational usage to maximise performance.

Messy code example.

function calc(a, b) {return a + a \* b}
let x = calc(100, 0.2)

- This code is difficult to read as there is no context to what each of the variables represent and therefore we cannot understand what the function does.

Clean code example.

function calc(taxableAmount, taxRate) {
return taxableAmount + taxableAmount \* taxRate}
let x = calc(100, 0.2)

Naming Variables & Functions

- A good variable name should encapsulate it's meaning and purpose within the context of the code in a clear and concise manner.

Issues from poorly named variables.

- Reduced Readability and understanding.
- Increase debugging time.
- Increases maintenence costs.
- Can hinder collaboration.

- Refactoring aims to improve code readability by modifying internal code structure making them cleaner and easier to understand without modifying the external behaviours.

Code Formatting & Style Guides

Importance of code formating

- Code formating helps improve readability, maintainability and professionalism in the codebase. It won't necessarily change what the program does but it does help with how people interact with the code.

Issue detected from linter

- Formatting issues: missing or extra spaces, inconsistent indentation.
- Unused code such as dead variable.
- inconsistent naming conventions.

Is the formationed code easier to read?

- Yes using a linter helped improve readability by ensuring consistent rules where followed throughout the entire codebase.
