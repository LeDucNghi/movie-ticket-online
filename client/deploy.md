## Nginx (confix /etc/nginx/sites-enables/default):

    reverse to /:
        location / {
                proxy_pass             http://127.0.0.1:3000;
                proxy_read_timeout     60;
                proxy_connect_timeout  60;
                proxy_redirect         off;

    ufw:
        ufw app list
        sudo apt install ufw

## Nodejs:

    npm run build

## PM2:

    pm2 status
    pm2 start npm --name "my-next-app" -- start
    pm2 restart my-next-app
    pm2 stop my-next-app

## github ssh:

    Conquydem1
