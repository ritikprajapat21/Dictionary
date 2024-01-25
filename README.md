# Dictionary Web React Application

Let's you know the meaning of words that you don't know about.

Visit <a href="https://ritikprajapat21.github.io/Dictionary/">page</a> to check out the web app.

# Library Used

<li>Axios</li>
<br>

# To run on local machine using Docker

First, make sure that you are in same directory as that of the project

```
docker build --tag dictionary:1.0 .
```

After build is done. Run

```
docker run --name dictionary -p 3000:3000 dictionary:1.0
```

To stop container press Ctrl + C OR run

```
docker stop dictionary
```
