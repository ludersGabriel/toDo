
# ToDo

This is a implementation of a simlified task app. Most implementations out there are very convoluted, 
so I decided to make one that does one thing and one thing only: keeping your ToDos in check!


## Deployment

The frontend of this project is deployed at vercel, whilist the backend is at
heroku. You can check it out at the link https://to-do-bay.vercel.app/


## Run Locally

### Requirements
- Node Version Manager (nvm)
- Yarn 
- NodeJS
- Docker and Docker Compose

### Presets

Clone the repo
```bash
  git clone https://github.com/ludersGabriel/toDo.git
```

Go to the project directory
```bash
  cd toDo/
```

Setting up the right node version
```bash
  nvm use
```

### Setting up the Backend

Go to the backend directory
```bash
  cd backend
```

Installing Dependencies
```bash
  yarn
```

Setting up the .env file
```bash
  cp .env.example .env
```

Initializing the docker container for the database
```bash
  yarn dev:init
```

Setting up the test and dev seeds for the database
```bash
  yarn test:setup
```

Running the graphql server at http://localhost:4000/ 
```bash
  yarn dev &
```

### Setting up the Frontend

Go to the frontend directory
```bash
  cd ../frontend
```
Installing Dependencies
```bash
  yarn
```

Running the next server at http://localhost:3000/
```bash
  yarn dev &
```




## Running Tests

The backend has unit tests set up with Jest

Going to the backend directory
```bash
  cd backend
```

Setting up the environment and Running the tests
```bash
  yarn test
```
