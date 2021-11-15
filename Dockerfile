# Build frontend assets
FROM node:14 as BUILDER

WORKDIR /app

COPY . .

RUN yarn install && yarn build

# Copy compiled assets to nginx container
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]