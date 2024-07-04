create database test2;

use test;

create table student (
    id int auto_increment primary key,
    name varchar(50),
    email varchar(50),
    age int,
    class varchar(10)
);

show global variables like "local_infile";

set global local_infile = ON;

--full scan
select * from student;
--full scan/ name이라는 값을 찾기 위해 전체 확인
select * from student where name = 'kim';

-- 가져올 경로 지정
set global secure_file_priv = "/opt/homebrew/var/mysql/upload";

show global variables like "secure_file_priv";

SHOW VARIABLES;

LIKE 'pid_file';

# 인덱스를 두개 이상
## index의 종류
# index
# 멀티 컬럼 index(unique);

create UNIQUE index student_name_email on student (name, email)
-- 두개 이상의 컬럼을 유니크 인덱스로 생성(두컬럼으 ㄹ가지고 있는 유니크한 인덱스라는 뜻)
-- primary key는 자동으로 인덱스가 생성된다
-- non-unique 유니크인지 아닌지 정보를 알려준다.유니크면 0 아니면 1
-- seq_in_index 멀티컬럼 인덱스이면 1 2 이런식으로 멀티컬럼으로 지정한 컬럼 순서대로 보여줌
## 쿼리문 호출을 할 때 어떤 인덱스를 사용한건지 알아보자
explain
select *
from student
where
    email = ''
    # key가 어떤 index를 사용한건지
    ## 옵티마이저 sql을 가장 효율적으로 실행할 수 있는 방법을 결정
    ## 옵티마이저 오류가 발생할 수 있기 때문에 
    ## 인덱스를 설정했을 때 실수하지 못하게 하기 위해
    --인덱스를 지정해서 테이블 조회
select *
from 테이블명
use index (인덱스명)
where
    조건
    -- 하지만 단순이 요청하는 것이라 사용안할 수 있다.
    -- 인덱스 강제사용
select *
from 테이블명 force index (인덱스명)
where
    조건