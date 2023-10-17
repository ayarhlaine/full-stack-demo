# full-stack-demo

A demo app with NodeJS + React + PostgreSQL.

## Backend Development Guide

#### With Docker

Run container

```
docker build -t full-stack-demo:dev .
docker-compose up -d --remove-orphans
```

then run

```
docker exec -it full-stack-demo-dev /bin/sh
```
