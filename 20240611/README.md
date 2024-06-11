# 데이터 베이스(DataBase)
> 정보를 저장하는 공간

# DBMS(DataBase Management System)
> 특정 기능을 넣어 데이터를 저장확 조회하는 것
> 데이터를 조작할 수 있는 기능 또는 시스템 프로그램을 DBMS라고 함

# SQL(Structured query language)
> DBMS에서 구현된 기능을 실행시키기 위해 특정한 언어로 실행해서 데이터를 조작
> 데이터를 보관할 공간을 만들거나 데이터를 저장하거나 삭제
> SQL구문을 사용해서 삭제 수정 조회를 한다.
> 데이터를 저장하는 형태가 관계형이냐 아니냐에 따라 RDBMS가 맞냐 아니냐로 나눠짐

## RDBMS
> 관계형 DBMS의 대표적인 플랫폼
> oracle, MySQL, MariaDB, PostgreSQL, MSSQL

## 비관계형 DBMS
> 몽고DB, 

## SQL의 개요
1. 데이터의 정의어(DDL, Data Definition Language)
2. 데이터의 조작어(DML, Data Manuplation Language)
3. 데이터의 제어어(DCL, Data Control Language)

- 데이터 정의어
> 테이블이나 관계의 구조를 생성 및 조작하는 구문
1. create
2. show
3. drop
4. alter

- 데이터 조작어
> 데이터의 데이터 검색, 삽입, 수정, 삭제 등을 하는데 사용
1. select ~ from
2. insert into ~ values
3. update ~set
4. delete ~from

- 데이터 제어어
> 데이터의 사용 권한을 관리하는데 사용
1. grant
2. revoke

## mysql 설치
> 왼도우 기준
> cmd에서 설치된 경로로 이동해서 mysql 접속
> 환경변수를 지정해줘야 함(사용자 변수)
> 경로는 c드라이브>program file> mysql> mysqlserver>bin

```sh
# mysql 접속
 mysql -u root -p
 password 입력

 # 데이터 정의어
 # 스키마 생성
 create DATABASE [이름];

 # 기본값으로 스키마 생성 
 create schema [이름] default;
```