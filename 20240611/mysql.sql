create DATABASE test default CHARACTER set utf8mb4 COLLATE utf8mb4_general_ci;
-- 데이터베이스를 만드는데 기본 인코딩 방식은 utf8md4
-- utf8md4 : most byte의 약자로 4byte씩 사용하는 utf8 문자집합으로 유니코드문자를 지원
-- general : 비교 정렬 규칙을 정의하는데 단순한 규칙으로 정의하겠다
-- ci : 대소문자 구분안함

-- utf8md4 : 한글포함 전세계 문자 + 이모티콘 사용가능
-- utf8mb4_general_ci : 간단한 정렬과 비교를 사용해서 정렬속도를 빠르게 사용

-- 데이터베이스 삭제
drop database DB이름
-- 사용할 데이터베이스 결정
use DB명
-- 현재 DB확인
select database()
    -- 현재 데이터베이스의 테이블 확인
show tables
-- 테이블 생성
create table 테이블명 (속성명 속성타입 옵션)
-- PRIMARY key : 고유한 값으로 설정
-- auto_increment : 데이터가 추가되는 것에 따라 자동으로 증가하는 값
-- varchar : 256byte의 가변 데이터(다 사용하지 않으면 알아서 맞춤)
create table store (
    id int auto_increment PRIMARY key, tel varchar(20)
);