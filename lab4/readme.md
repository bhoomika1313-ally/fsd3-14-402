# npm project

1. create project folder 
2. right click on project folder and select open in integrated terminal 
3. type `npm init -y` in terminal and press enter
4. oprn pacakge.json file from project folder 
5. update `type:module` in package.json
6. type in terminal `npm i nodemon -D` to install nodemon, which restarts server while file changes
-D flag indicates install in dev dependency 
7. it creates node_modules folder and package-lock.json 
8. update .gitignore file and write project-folder/node_modules
9. update package.json to run the project 
```
 "scripts": {
    "start" : "node app.js",
    "dev" : "nodemon app.js"},

```
10. now you can start the server writing `npm run dev` in the terminal of project folder  