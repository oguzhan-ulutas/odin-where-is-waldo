# odin-where-is-waldo
A photo tagging game

# [Live Preview](https://odin-where-is-waldo.vercel.app/)

## Setup

### Step 1: Environment File Setup

Create .env file in server folder:

- BaseUrl = "your-client-url" 
- MongoDB = "your-mongodb-connection-string"

Also create .env file inside the frontend folder:

- VITE_BASE_URL = "your-server-url"

After creating those environment variables continue to dependency installation.

### Step 2: Dependency Installation

Execute inside the both client and server folders:

```sh
npm install
```

### Step 3: Launching the Development Server

Execute:

```sh
npm start
```

Or to start the server continuously with nodemon:

```sh
npm run devstart
```

### Step 4: Launching the Client

Inside the frontend folder execute:

```sh
npm run dev
```
