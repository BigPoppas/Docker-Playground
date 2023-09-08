FROM nginx:alpine-slim

WORKDIR /etc/nginx/conf.d

COPY nginx/nginx.conf

# Rename the file to what nginx expects
RUN mv nginx.conf default.conf

WORKDIR /var/www/html

# Instead of relying on bind mounts to fetch the code is good to have the code there
# and once updated then with bind mounts the changes will take effect
COPY src .