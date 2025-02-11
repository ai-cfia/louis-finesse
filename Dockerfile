FROM node:20.18.3-alpine AS build

WORKDIR /code

# Environment variables
ARG ARG_VITE_BACKEND_URL
ARG ARG_VITE_DEBUG_MODE
ARG ARG_VITE_GITHUB_API_URL
ARG ARG_VITE_SEARCH_SOURCE

ENV VITE_BACKEND_URL=${ARG_VITE_BACKEND_URL:-/api}
ENV VITE_DEBUG_MODE=${ARG_VITE_DEBUG_MODE:-True}
ENV VITE_GITHUB_API_URL=${ARG_VITE_GITHUB_API_URL:-https://api.github.com/repos/ai-cfia/finesse-data/contents}
ENV VITE_SEARCH_SOURCE=${ARG_VITE_SEARCH_SOURCE:-azure}
ENV PORT=3000

# Copy files
COPY ./src ./src
COPY ./public ./public
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .
COPY index.html .

# Install npm at a specific version, dependencies, build, and run tests
RUN npm install --include=dev
RUN npm run build
RUN CI=1 npm run test

# Setup for production
FROM node:20.18.3-alpine AS runtime

# Install serve globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy build artifacts from the build stage
COPY --from=build /code/dist /app

# Serve your app
ENTRYPOINT ["serve", "-s", "/app"]
