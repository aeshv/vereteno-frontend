FROM node:18.12.1

RUN mkdir /frontend
COPY . /frontend
COPY package.json /frontend/package.json
WORKDIR /frontend
RUN apt update
RUN apt install -y dos2unix

RUN npm install

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /frontend/entrypoint.sh
RUN chmod +x /frontend/entrypoint.sh
RUN dos2unix /frontend/entrypoint.sh
ENTRYPOINT ["sh", "/frontend/entrypoint.sh"]
