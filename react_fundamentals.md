Challenges

- By using Vite to create a new react project the setup was quite smooth, Installing tailwind was a new process for me but with the help of https://v3.tailwindcss.com/docs/guides/vite#react i was able to get my configuration template paths and directives setup correctly, if not for that assistance that would have beent he biggest challenge.

Importance of components

- They are the primary way to pass data from parent to child components.
- Using props allows components to be resuable.
- Allow components to render dynmaic content.

Modify state directly instead of setState

- If we modify the state directly it will update the counter variable in memory but wont re-render the component.

Common issues with lists

- Missing or incorrect key props.
- Mutating list state instead of replacing it e.g using push instead of set.
- Inocrrect delete or update logic. using filter can solve this issue.ß

Benfits of Client-side routing.

- Faster more responsive user experience as only new content needs to be fetched not entire page.
- Reduced server load as doesnt have to render entire page.
- supports browsing history.
- Unique URLS.

What are the advantages of using Tailwind CSS?

- Tailwind helps speed up code writing by allowing users to style their components directly on the HTML rather than having seperate CSS files. doing this also helps with keeping consistent design across components and reduces the burden of naming individiaul css classes.

What are some potential pitfalls?

- If tailwind isn't used consistently in a project it can hinder the design.
- There is a learning curve with tailwind as users need to remember the names of utilities, this is something i had trouble with.
- Tailwind requires configuring which can sometimes be tedious to get right.
- Components that have a lot of tailwind code are locked in to it meaning they are less portable to other non-utility CSS stacks.
