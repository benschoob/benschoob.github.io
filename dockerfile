FROM node:latest

EXPOSE 8080

CMD ["node", "--watch", "/app/server.js"]