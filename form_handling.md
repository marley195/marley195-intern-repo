How does Formik simplify form management compared to handling state manually?

- Formik provides a few features to add simpicity to creating forms the first including state management, it allows you to declare the initial values which are managed as a single state object, this aleviates each value from having its own useState().

What are the benefits of using Formik’s validation instead of writing validation logic manually?

- Formik allows for automation of validation at the field level, form level and Schema level, it does this by wiring events automatically such as validate where as with manual logic you would need to specify when you want your fields and/or form to be validated. on top of this it also assist with updating errors and touched.
