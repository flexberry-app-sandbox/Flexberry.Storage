docker build --no-cache -f SQL\Dockerfile.PostgreSql -t storage/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t storage/app ../..
