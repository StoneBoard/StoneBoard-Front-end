# Deploy

## Pré-requisito
Git, NodeJS, NPM, Heroku CLI


## Windows cmd

```
git clone <repo>
cd front
heroku login
heroku apps:create stone-board
git push heroku master
heroku open
heroku logs --tail
```

## Referência
[Heroku NodeJS](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)  
