FROM node:14.17 as node
FROM golang:1.17

# node
COPY --from=node /usr/local/bin /usr/local/bin
COPY --from=node /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/npm
COPY --from=node /opt/yarn* /opt/yarn
RUN ln -fs /opt/yarn/bin/yarn /usr/local/bin/yarn && \
    ln -fs /opt/yarn/bin/yarnpkg /usr/local/bin/yarnpkg

COPY . /general
WORKDIR /general

ENV PORT 3000
ENV GITHUB_USER_NAME ""
ENV GITHUB_TOKEN ""
ENV GITHUB_EMAIL ""
ENV AWS_ACCESS_KEY_ID dammy
ENV AWS_SECRET_ACCESS_KEY dammy
ENV AWS_REGION us-east-1
ENV DB_ENDPOINT http://db-with-gui:8000
ENV FCM_CREDENTIALS_JSON_BASE64 ""
ENV ELASTICSEARCH_ADDRESS_1 ""
ENV ELASTICSEARCH_ADDRESS_2 ""
ENV ELASTICSEARCH_USERNAME ""
ENV ELASTICSEARCH_PASSWORD ""
ENV DATASTORE_PROJECT_ID ""
ENV DATASTORE_ENDPOINT ""

RUN go install github.com/golang/mock/mockgen@v1.4.4
RUN go install github.com/99designs/gqlgen@v0.12.2
RUN go install github.com/matryer/moq@latest
RUN curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b /go/bin v1.31.0

WORKDIR /general/api
RUN go get

WORKDIR /general/spa
RUN yarn
