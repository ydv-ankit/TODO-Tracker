## => Want to contribute to this repo, follow below steps
---
## Step 1: Fork the repository
- goto [repo](https://github.com/ydv-ankit/TODO-Tracker)
- click on `fork` available upper right side

## Step 2: Clone the forked repository
- goto forked repository in your `github profile`
- click on `<> Code` 
- choose local > SSH > copy the ssh url
- open `terminal` (*cmd/powershell in windows*) and type the following commands
    ```bash
    git clone ssh-url 
    # replace `ssh-url` with the url you copied earlier
    cd <repo-name>
    ```
- add reference to original repository (make sure you are inside cloned repo folder)
    ```bash
    git remote add upstream https://github.com/ydv-ankit/TODO-Tracker.git
    git remote -v
    ```

## Step 3: Create new branch to work upon
- create a branch with name accordingly to the issue you're working upon
  ```bash
  git branch <branch-name>
  git checkout <branch-name>
  ```
- update files and/or sync with upstream repo
  ```bash
  git rebase upstream/<branch-name>
  ```

## Step 4: Work on the issue assigned
- once you're ready to commit changes
  ```bash
  git add . # to add all changes for tracking
  OR
  git add <filename>    # for individual files
  ```

## Step 5: Commit changes
- Commit all the changes you've made
  ```bash
  git commit -m "your message here"
  ```

## Step 6: Push all commits to your repo
- Push all the changes to your forked repo
  ```bash
  git push origin <branch-name>
  ```

## Step 7: Create a Pull Request
- Go to your forked repository in your browser
- Click on `Compare and pull request` option comming up
- Add title and description that best describes your contribution
- Wait for reviewers to review and approve your changes.
- Once pull request is approved, your changes will be merged with the original codebase
- Note: try to add screenshots to help getting better context of your enhancement or implementation.
---
## Feel free to reach out for help
- [Ankit](https://twitter.com/ydvtwts) 
- [Manish](https://twitter.com/techmannih)
