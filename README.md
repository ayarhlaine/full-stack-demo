# full-stack-demo

A demo full stack app with NodeJS + React + PostgreSQL.

## Backend
### Development Guide

#### With Docker

Run container

```
docker build -t full-stack-demo:dev .
docker-compose up -d --remove-orphans
```

then run

```
docker exec -it full-stack-demo-dev /bin/sh
npm run dev
```

### Tests
#### Unit Test
Run
```
npm run test:unit
```
