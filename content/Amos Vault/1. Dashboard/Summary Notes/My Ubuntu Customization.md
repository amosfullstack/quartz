_____

###### 1. The terminal
i. Black on green set on preferences.
ii. Use parrot terminal setup.
 -  Download parrot bashrc  raw code from github.
 - Paste the code in baschrc file
 ```bash
 $sudo nano .bashrc
 
 //Paste code and save
 
 $source ~/.bashrc  //Reload the file
 
 ```

iii. Directory colors: purple
```bash
nano ~/.bashrc

//Add this at the  bottom of the bashrc file
# Force directories to purple
export LS_COLORS="di=01;35:$(dircolors -b)"
alias ls='ls --color=auto'

```