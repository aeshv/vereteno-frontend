FROM node:18.12.1

RUN mkdir /vereteno-frontend
COPY . /vereteno-frontend
COPY package.json /vereteno-frontend/package.json
WORKDIR /vereteno-frontend
RUN apt update
RUN apt install -y dos2unix

RUN npm install

COPY ./entrypoint.sh /vereteno-frontend
RUN sed -i 's/\r$//g' /vereteno-frontend/entrypoint.sh
RUN chmod +x /vereteno-frontend/entrypoint.sh
RUN dos2unix /vereteno-frontend/entrypoint.sh
ENTRYPOINT ["sh", "/vereteno-frontend/entrypoint.sh"]