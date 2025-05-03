FROM nginx:alpine

# Remove default nginx static resources
RUN rm -rf /usr/share/nginx/html/*

# Copy static resources to nginx
COPY praktikum-8.html /usr/share/nginx/html/
COPY praktikum-8.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
