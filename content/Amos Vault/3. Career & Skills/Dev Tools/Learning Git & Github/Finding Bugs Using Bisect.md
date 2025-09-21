
___

## Overview
- We are going to look at a powerful tool for finding bugs quickly. It is called <span style="color:rgb(255, 255, 0)">Bisect</span> .
- Suppose we have created many commits and in our last commit we have a bug in our application.
- We do not know where this bug was introduced. And we do not want to checkout each individual commits, this would take a very long time.
- Using the <span style="color:rgb(255, 255, 0)">bisect</span> command we can quickly find the commit that introduced the issue.

Practical:

i. Swiitch to the bisect state.
```bash
git bisect start

//Outout
status: waiting for both good and bad commits
```

ii. Tell git that we are currently in a <span style="color:rgb(255, 255, 0)">bad commit</span> .
```bash
git bisect bad
//Output
status: waiting for good commit(s), bad commit known

```

iii. Provide git with the good commit. Copy the Id from the git log
```bash
git bisect good <commit id>

ie :
git bisect good ca49180
```
- The head becomes detatched, it is not pointing to master any