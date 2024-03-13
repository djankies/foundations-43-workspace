# API Lab

The base URL of your requests is: https://practiceapi.devmountain.com/api (make sure to have the “s” in “https”)

### Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?  

It accepts a body, and it is expecting a JSON object with a text property.


### What data type does the GET request return?


Returns an array of all posts

### What would the URL look like for **deleting** the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )


https://practiceapi.devmountain.com/api/delete/?id=555

### List the possible response codes from the GET request at ‘/posts/filter’

* 200
* 409

### Create a post whose text is your name, record the URL and body here:

https://practiceapi.devmountain.com/api/posts

```
{  
    "text": "The text used here will appear in the new post object"
}

```
### What would the URL and body object be to update the post you just made to contain your favorite color instead of your name?

https://practiceapi.devmountain.com/api/posts?id=1942

```
{  
    "text": "The text used here will appear in the new post object"
}
```

### What is the URL to get posts that contain the text “blue”?

https://practiceapi.devmountain.com/api/posts/filter?text=blue

### Make a request to GET all the posts. 

### What are the content type and charset of the response? (Hint: look on the Headers)

application/json; charset=utf-8

### What would cause a PUT request to return a 409 status?


Request was missing req.query.id or req.body.text

### What happens if you try to send a query in the GET request URL? Why do you get that response?**

It provides a list of all posts.

The middleware has access to the query data but isn't set up to do anything with the query, so it just ignores it and returns all posts -its default function.