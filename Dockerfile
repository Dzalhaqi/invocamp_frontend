# Specify the Node.js LTS 18 base image
FROM node:18.15-buster-slim

# Set the working directory
WORKDIR /frontend/

# copy all the files from the current directory to the working directory
COPY . .

# go to frontend/invocamp_frontend in container
WORKDIR /frontend/invocamp_frontend

# Install dependencies
RUN yarn install

# Build the Next.js application
RUN yarn build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application with the 'start' command
CMD ["yarn", "dev"]
