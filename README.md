
**Backend:** Node, Express, MongoDB Atlas

## Features 
 - Save youtube Videos data in mongoDB atlas
 - Fetch videos data according to published time
 - Pagination avalable 


###  Run Locally Clone this Project

[https://github.com/nikhiljangra0954/Hack2skill_Assignment2](https://github.com/SoumyaAdhya007/hack2skill_task_2)

**NPM Package**
```
 {
    "Axioss": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.3.4",
    "nodemon": "^3.0.1"
  }
```

**Schema**
```
{
    title: { type: String },
    description: { type: String },
    publishTime: { type: Date },
    thumbnail: { type: String  },
}
```

  #### Run Locally
```javascript
  step 1- clone the Repo 
  step 2- Install all dependencies npm install
  step 3- npm run server
  step 4- can also clone the image from Docker
```


## API Endpoints

### Pagination 
-- BY default limit is 10 and page 1
```javascript
GET http://localhost:8088/api/videos?page=1&limit=10
```

### Search with title and description
```javascript
GET http://localhost:8088/api/search?q=messi
```
