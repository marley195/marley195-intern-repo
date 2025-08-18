Simplicity - Avoid overcomplication, Each line of code should add clear value.
Readability - Code should have meaningful names and logical structure which is simple to follow.
Maintainability - Code should be laid out in a way that makes it easy for other contributors to maintain.
Consistency - Use unified styles that all contributors can understand.
Efficiency - Aim for optimized code by reducing computational usage to maximise performance.

Messy code example:
function calc(a, b) {return a + a \* b}
let x = calc(100, 0.2)

- This code is difficult to read as there is no context to what each of the variables represent and therefore we cannot understand what the function does.

function calc(taxableAmount, taxRate) {
return taxableAmount + taxableAmount \* taxRate}
let x = calc(100, 0.2)

What makes a good variable or function name?

- It should be clear and communicate its meaning and purpose within the context of the code.

What issues can arise from poorly named variables?

- Reduced Readability and understanding.
- Increase debugging time.
- Increases maintenence costs.
- Can hinder collaboration.

How did refactoring improve code readability?

- It aims to enhance code readability and maintainaibility by modifying internal code structure without modifying the external behaviours.
