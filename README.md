# Node JS Api Server Boilerplate

### GuideLine without docker

#### clone the repo

- npm install
- npm start


###GuidLine to Build Image with Docker and start it in a container
###### Note: I suppose you are using a linux machine and Docker is installed in your local machine

#### Explanation of `Dockerfile`

The first line tells Docker to use another Docker (Node) image.

We’re using is the official Docker image for Node.js and it’s version 10 image.

The second line, sets a working directory from where the app code will live inside the Docker container.

We are copying the package.json file on third line.

We run `npm install` for dependencies in container on line four.

We are copying/bundling our code working directory into container working directory on line five.

On Line 6, we setup the port that Docker will expose when the container is running. Port 3000 in our case.

On line 7, we tell docker to execute our app inside the container by using node to run npm start.

#### Command to build Docker image

```bash
$ sudo docker build -t node-web-app .
```

OK, now that we have our Docker image built, we can use it to launch a container.

To see the available images in your linux machine 

```bash
$ sudo docker images
```

It will list all the images available in you local machine

Key to remember, in our Dockerfile we exposed port 3000 and also in our code, Node is using port 3000.

Run Command to execute a running instance of an image

```bash
$ docker run -p 3003:3000 -d node-web-app
```

It will start your container in the detached mode(running container on background). If you remove `-d` flag it will up the container and you will see the output.

If you used `-d` flag and you want to insert in your container or want to see the logs, first you have to list all the running(up) containers

```bash
$ docker container ls -a
```

It will show all the running containers

#### Example

```
ID                      IMAGE           COMMAND    ...   PORTS
<your container id>    node-web-app     npm start  ...   3000->3000
```

Now to see the logs of your container just grab the id of that container and run

```bash
$ docker container logs <your container id> 
```

Now the final step is to test your api after satisfying that your container is up and running.
In your local machine run the command.

`curl http://localhost:3000/api`

It will give you the output 

``
{"code":200,"success":true,"message":"Successfully completed"}
``

That's it! Your Node.js app is running in Docker.

:sparkles: 
### Bonus

After all the above process goes well, you build is successfull and your container is up

### Question
Now when I make any changes in code, It doesn't dynamically updates the api. I have to stop the container, remove it, build the image again, remove the earlier image and then restart the container from new image. Do I have to do this every time?

### Answer 

Try not to panic, you don't need to it again and after changing any line of code. There are different ways to do it you can make `docker-compose file`
for this or you can mount your current directory to your container directory where the app is hosted.

I am going with the most easy one, althoug it is not 100% optimal.

You can run the command while  