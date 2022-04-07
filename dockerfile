FROM node:16-alpine3.12 AS builder
WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
COPY . ./
RUN yarn install
# RUN npm install --global yarn
RUN yarn build

FROM node:16-alpine3.12 AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
# FROM nginx:1.20.0-alpine
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static resources
# RUN rm -rf ./*
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80

# CMD ["npm", "start",";","nginx", "-g", "daemon off;"]
