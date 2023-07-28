# Set the base image
FROM node

# Set the working directory
WORKDIR /app

# Copy all the files in the same directory as the Dockerfile to the /app instead of root (.)
COPY . /app

# RUN -> Executes commands during the building of the image
RUN npm install

# Expose port 80 - this comand we can ignore but its good to use
EXPOSE 80

# CMD -> Executes commandas once the image is finished and the container is starting
CMD ["node", "server.js"]