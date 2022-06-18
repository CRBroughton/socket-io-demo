FROM node:16.10.0

LABEL author="Craig Broughton"
LABEL author.email="CRBroughton@posteo.uk"

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm i --legacy-peer-deps

CMD ["npm", "run", "dev"]