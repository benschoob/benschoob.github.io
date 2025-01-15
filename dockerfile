FROM node:latest

EXPOSE 8080

CMD ["node", "--watch", "index.js"]