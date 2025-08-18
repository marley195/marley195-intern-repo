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

What does each command do?

- git checkout <branch> -- <file>: Will retrieve the file from the specified branch and updates your current working directory with the content.
- git cherry-pick <commit>: Will take a specific commitment and apply it to the working directory.
- git log: Shows the log history for a repository, shows details of all changes and includes information of each commit
- git blame: Shows you the history of a specific file, including details about the last commit

When would you use it in a real project?

- I could see this the checkout/cherry-pick command being useful when im working in my own sperate branch, if i remove or change a file that results in an error i could look at retrieving the file from the main branch.
- Both git log and git blame are going investigation tools to check previous history of files or repositories. I could see myself using this if mutiple changes had been made to a file/repo and i wanted to identify which potential change may have introduced a bug.

What surprised you while testing these commands?

- I hadn't used either of these commands before when working with github as usually our team has a single branch so it was suprising to see how beneifical creating seperate branches could be when testing particular issues.

Understand git bisect

- Git bisect is a tool that helps find commits in a repository that have introduced a bug or issue. The user identifies the last bad commit and the most recent good commit, bisect then uses a search algorithm to show the user commits in which the user can check if the issue is still present.

- A good place to use this tool would when multiple people are working on a single repository and several commits had been made in recent succession, if a bug is now present its hard to determine which commit pushed the bad code.

- maunaully review commits can be tedious and time consuming, on top of that errors can occur as we can miss sutle changes.
