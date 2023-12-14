docker build --no-cache -f SQL\Dockerfile.PostgreSql -t storage-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t storage-java/app ../../..
