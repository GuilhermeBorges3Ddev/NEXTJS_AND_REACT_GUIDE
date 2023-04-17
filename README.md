# NEXTJS_AND_REACT_GUIDE

## v0.1.0

## I recommend you to create your own SSH key to be used on Github, using the following command:

ssh-keygen -t rsa -C 'your-mail-address@provider.com'

# After the command above, reopen the terminal and execute the lines bellow:

eval "$(ssh-agent -s)"
ssh-add /c/Users/your-user/.ssh/key-name

# Initializing your Git user configs:

git init
git config --global user.name "YOUR USERNAME"
git config --global user.email "mail@provider.com"
git remote add origin git@github.com:YOUR-PATH-FOR-GITHUB-SSH

# When you edit firstly:

git add .
git commit -m 'SOME MESSAGE'
git push origin master

# To configure Prettier with ESLint as dev dependencies:

npm i -D prettier eslint-config-prettier eslint-plugin-prettier
