#!/bin/sh

wget https://rospatent.gov.ru/opendata/7730176088-tz/data-20220401-structure-20180828.csv -P ./static 

exec "$@"