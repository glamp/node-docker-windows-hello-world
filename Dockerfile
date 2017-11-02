FROM stefanscherer/node-windows:8-nano-1709

EXPOSE 3000

RUN mkdir \app
WORKDIR /app
ADD . c:/app
RUN npm install

CMD ["npm.cmd", "start"]
