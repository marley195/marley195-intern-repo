What caused the conflict?

- When two branches have conflicting changes within the smae file you need to resolve the classing of changes by choosing which change you want to keep between the merging of two branches.
- This can be done by choosing your preferred changed.

How did you resolve it?

- Choosing which file change you want to keep when merging.

What did you learn?

- That you can do a merge via GitHub Desktop.
- This opens IDE which allows you to choose which change you would prefer to keep.

What is the difference between staging and committing?

- Stages: is a temporary holding area for changes you intend to add to your next commit. The staging area allows you to choose which changes you want to make apart of the next commit as well.
- Commit: Is a snapshot of your repository at that specific time of making the commit along with a note on what the commit is regarding.

Why does Git separate these two steps?

- Git seperates these to allow users flexibility in what changes they want to commit, all changes may not need to go in the same snapshot.

When would you want to stage changes without committing?

- When you have not completed or unsure if the changes you have made are wanting to be commited.

Why is pushing directly to main problematic?

- Because main is classified as the working branches only features that have been tested should be there, When pushing a change/commit it should go to an alternative/bug testing branch to be thoroughly tested and reviewed before being deployed to the main branch. This avoids these issues breaking the main branch.

How do branches help with reviewing code?

- Seperate branches can be made off the main branch where changes to the code can be made without changing the main branch, these other branches can then be used to review and test code to ensure it works as intended before merging with the main branch.

What happens if two people edit the same file on different branches?

- A conflict will arise if they attempt to merge these branches together.
