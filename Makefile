SHELL=bash

HAS_DOCKER := $(shell\
	if type "docker" > /dev/null 2>&1; then\
			echo true;\
		else\
			echo false;\
	fi\
)

# commands for host with docker command
ifeq ($(HAS_DOCKER),true)
init:
	docker-compose pull
	docker-compose build --no-cache

clean:
	docker-compose down --rmi all --volumes --remove-orphans

up:
	docker-compose up -d
	docker-compose exec general sh git.sh

down:
	docker-compose down

start:
	docker-compose start

stop:
	docker-compose stop

serve:
	docker-compose exec general go run ./api/testsrv

serve-with-auth:
	docker-compose exec general go run ./api/testsrv -teamID $(TEAM_ID) -userID $(USER_ID)

table:
	docker-compose exec general go run ./api/tools/dbtool/ create
	docker-compose exec general go run ./api/tools/elsch/ create

destroy-table:
	docker-compose exec general go run ./api/tools/dbtool/ destroy
	docker-compose exec general go run ./api/tools/elsch/ delete

status:
	@echo "--elasticsearch--"
	curl -X GET "localhost:9200/_cat/health?v&pretty"
	@echo "--elasticsearch indices--"
	@curl -X GET "localhost:9200/_cat/indices?v&pretty"
endif

# commands for container shell or host without docker command
ifeq ($(HAS_DOCKER),false)
status:
	@echo "--elasticsearch--"
	@curl -X GET "http://elasticsearch:9200/_cat/health?v&pretty"
	@echo "--elasticsearch indices--"
	@curl -X GET "http://elasticsearch:9200/_cat/indices?v&pretty"

es-threads:
	@curl -X GET "elasticsearch:9200/thread/_search?pretty" -H 'Content-Type: application/json' -d' { "query": {"match_all": {}} }'
endif
