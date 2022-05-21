# fetchapi

** Try out all fetch api functions

** Git Commands **

added PR template #

git add .
git commit -m "comment here"
git push

adding garbage which needs to revert back

If you are on another branch and you made changes on it and then realize you don't have to make changes on that branch but new
then stash your change and execute below steps.

lets say you are on test branch
git stash
git checkout dev (make sure you have latest from your base branch against which you are about to create PR)
git pull
git checkout -b feature_branch
git stash pop
git status
git add .
git commit -m ""
git push
// end here
