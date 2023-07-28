# Because image building runs in layers, and if a layer is not changed when rebuilding it gets
# cached, if something, changes then the layers bellow this must run again.

# With that in mind, we can make a minor optimization because if something changes in the frontend
# there is no need to run npm install, we only need to run this if we have changes in packages.json

# The old code was
# COPY . /app
# RUN npm install

# Set the base image
FROM node

# Set the working directory
WORKDIR /app

# Copy the packages.json to make the optimization (if no changes are here, then npm install will get cached as opposed from before)
COPY package.json /app

# RUN -> Executes commands during the building of the image
RUN npm install

# Copy the remaining files the same directory as the Dockerfile to the /app instead of root (.)
COPY . /app

# Expose port 80 - this comand we can ignore but its good to use
EXPOSE 80

# CMD -> Executes commandas once the image is finished and the container is starting
CMD ["node", "server.js"]