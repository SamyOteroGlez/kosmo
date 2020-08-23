FROM node:12.18.3

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /app
COPY package-lock.json /app/

# install node packages
RUN npm install

# add app
COPY . /app

# expose port
EXPOSE 8089

# start app
CMD ["npm", "start"]
