# Git Conventions and Common Operations

## Branch and Commit Naming Conventions

**Answer:** Naming conventions help maintain a clean and organized Git history. Some common conventions include:

- Branches: Use descriptive names (e.g., feature/add-login-page) and avoid special characters or spaces.
- Commits: Write meaningful commit messages that summarize the change and use present tense (e.g., "Add user authentication feature").

## How to Rename a Commit

**Answer:** Git does not provide a direct way to rename a commit. However, you can use `git commit --amend` to modify the most recent commit's message. If you want to rename an older commit, you'll need to perform an interactive rebase.

## How to Rename a Branch

### Rename a local Git branch

1. In the command line, select the Git branch you want to rename. The command for this is “git checkout old-name”.
2. You will get a confirmation that you have selected the correct branch. This will read “Switched to branch 'old-name'”.
3. Now perform the actual rename for the local Git branch. The appropriate command for this is: “git branch -m new-name”.

### Renaming a remote Git branch we have two options

#### Option 1

1. First, make sure the local branch has the correct, new name. The appropriate command is “git branch -a”.
2. Now delete the branch with the old, incorrect name from the remote repository. To do this, use the following command: “git push origin --delete old-name”.
3. Verify that the old branch has been deleted properly.
4. Now add the branch with the correct name. For this, use the command “git push origin -u new-name”.
5. Lastly, perform a reset of the upstream branch to ensure that the changes are effective.

#### Option 2

1. Enter the following command: “git push origin :old-name new-name”.
2. Then also perform a reset of the upstream branch as described above.

## Deleting a Branch and Pushing Changes

**Answer:** To delete a branch and push changes:

1. Delete the local branch: `git branch -d branch-name`
2. Delete the remote branch: `git push origin --delete branch-name`
3. Push your changes: `git push origin main` (or the target branch)

## Renaming a Commit Before Pushing

1. Use `git commit --amend` to modify the commit message.
2. Force push the branch to update the commit on the remote: `git push -f origin branch-name`

## How to Pull New Code and Post-Pull Actions

1. Use `git pull origin branch-name` to fetch and merge changes.
2. Resolve any conflicts if they occur.
3. After pulling, run tests and ensure your code still works.

## Difference between git rebase and git merge

- `git merge` integrates changes from one branch into another and creates a new merge commit, preserving the branch's commit history.
- `git rebase` moves or combines a sequence of commits to a new base commit, creating a linear commit history. It's useful for keeping a clean history but should be used cautiously in shared branches.

## How to Fix Conflict

1. Identify the conflicting files and open them in your text editor.
2. Manually resolve the conflicts, keeping the desired changes and removing conflict markers.
3. Add the resolved files: `git add <resolved-files>`.
4. Commit the changes: `git commit`.

## What's "git commit --amend" and When to Use It?

**Answer:** `git commit --amend` allows you to modify the most recent commit's message or add changes to it. Use it to make small adjustments to the last commit, such as fixing typos in the commit message.

## Command to Set Up Personal Authentication

**Answer:** To set up personal authentication, you can use SSH keys or personal access tokens (PATs) on services like GitHub or GitLab. The commands usually involve generating keys or tokens and configuring Git to use them.

## View the Commit History

- `git log`: Shows a chronological list of commits.
- `git log --oneline`: Displays a concise one-line commit history.
- GUI tools like GitKraken or GitHub's commit history web page.
