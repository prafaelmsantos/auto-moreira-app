@echo off
echo Docker build started...
docker build -t prafaelmsantos/auto-moreira-app:latest -f Dockerfile .
echo Docker build ended...
echo Docker push started...
docker push prafaelmsantos/auto-moreira-app:latest
echo Docker push ended...