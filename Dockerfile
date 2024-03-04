FROM node:14 as build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21-alpine

# Copy the NGINX configuration file 
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built assets 
COPY --from=build-stage /app/dist /usr/share/nginx/html

# NGINX listens on port 8080 by default in Cloud Run
EXPOSE 8080
