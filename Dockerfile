# Use an official Node.js runtime as a parent image
FROM node:14 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/dist /app

# Install serve to run the application
RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", ".", "-l", "5000"]
