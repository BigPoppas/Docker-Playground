# Use node js as a base image
FROM node:14

# Special directory which we work
WORKDIR /app

# Copy the package.json in the working directory
COPY package.json .

# Install all the dependencies for the application
RUN npm install

# Cope the rest of the code
COPY . .

# Expose port 3000 to the outside word (listen from outside the container not only from inside)
EXPOSE 3000

# Execute app.mjs with the node command
CMD ["node", "app.mjs"]