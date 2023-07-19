
**Backend:** Node, Express, MongoDB Atlas

## Features 
 - Save YouTube video data in MongoDB Atlas.
 - Check for new videos and add them to MongoDB. (Ensure only new videos are added)
 - Check if API key quota is exhausted, then use a new API key.
 - Fetch videos data according to published time
 - Pagination avalable 


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
GET /api/videos?page=1&limit=10
```

### Search with title and description
```javascript
GET /api/search?q=messi
```
