#!/bin/bash

# (cd ../../ && yarn deploy --network ropsten)

docker build --tag alpotapov/poly_tools:latest --platform linux/amd64 .

docker tag alpotapov/poly_tools registry.heroku.com/polynom-tools/web

docker push registry.heroku.com/polynom-tools/web