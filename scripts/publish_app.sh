#! /bin/sh

# get the latest code
git pull
# kill port
fuser -k 3001/tcp
# start app
npm run start
# make the app run in the background
kill -CONT
bg %1
# see app running
fuser 3001/tcp