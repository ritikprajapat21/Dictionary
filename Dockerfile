FROM node:20-alpine3.18
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 3000