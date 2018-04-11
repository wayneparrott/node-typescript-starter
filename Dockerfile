FROM risingstack/alpine:3.7-v8.10.0-4.8.0

ENV PORT 3000

EXPOSE 3000

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/index.js"]
