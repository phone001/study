USE soon;

CREATE TABLE student (
    id INT,
    name VARCHAR(20),
    class VARCHAR(20)
);

CREATE TABLE student_class (
    class_id INT,
    class VARCHAR(20),
    study VARCHAR(20)
);

INSERT INTO
    student
VALUES (1, "soon", "devops"),
    (2, "soon2", "story"),
    (3, "soon3", "game");

INSERT INTO
    student_class
VALUES (1, "devops", "full"),
    (2, "story", "story1"),
    (3, "game", "game1");

SELECT * FROM student;

SELECT * FROM student_class;

SELECT *
FROM student
    INNER JOIN student_class ON student.id = student_class.class_id;

SELECT student.class, student.name, student_class.study
FROM student
    INNER JOIN student_class ON student.class = student_class.class
WHERE
    student.class = "devops";

# story 수업을 듣고 있는 사람의 수업명과 수업 내용이 필요하다.

SELECT student.class, student_class.class
FROM student
    INNER JOIN student_class ON student.class = student_class.class
WHERE
    student.class = "story";

## 사용자 (id, name)
## 주문 테이블 (id, name, order_id)
## 사용자 테이블이 있고 주문을 받는 테이블이있다.
## 사용자 테이블에 값을 넣고
## 주문 테이블에 값을 넣고
## 모든 사용자의 주문 내용을 조회
## 해당 사용자의 주문 내용을 조회

CREATE TABLE user ( id VARCHAR(20) PRIMARY KEY, name VARCHAR(20) );

CREATE Table user_order (
    id INT,
    name VARCHAR(20),
    order_id VARCHAR(20),
    constraint fk_order_id FOREIGN KEY (order_id) REFERENCES user (id)
);

# 아이디가 없는 주문이 들어올수 없도록

INSERT INTO user VALUES ("soon", "이순현");

select * FROM user;

INSERT INTO user_order VALUES (5, "맥북", "soon");

SELECT * FROM user_order;

SELECT *
FROM user
    INNER JOIN user_order on user.id = user_order.order_id;

SELECT *
FROM user
    INNER JOIN user_order on user.id = user_order.order_id
WHERE
    user.id = "sc";

## 사용자 테이블(uid, name, phoen)
## 비디오가게 테이블(name, order_id)
## 사용자 값 추가
## 비디오 빌리는 사람 값 추가(제약 조건 외래키 사용해서 사용자가 있는 경우에만 데이터 추가)
## 전체 사용자 비디오 조회
## 해당 사용자 비디오 조회

## as 별칭을 정해주는것.
select user.id as name
from user
    left join user_order on user.id = user_order.order_id;

CREATE TABLE test (
    name VARCHAR(20),
    name2 VARCHAR(20),
    name3 VARCHAR(20)
);

CREATE TABLE test2 (
    name VARCHAR(20),
    name2 VARCHAR(20),
    name3 VARCHAR(20)
);

INSERT INTO
    test
VALUES ("1", "2", "안녕1"),
    ("2", "2", "안녕2"),
    ("3", "2", "안녕4"),
    ("4", "2", "안녕3");

INSERT INTO
    test2
VALUES ("2", "1", "바이1"),
    ("2", "2", "바이2"),
    ("2", "3", "바이4"),
    ("2", "4", "바이3");

select * FROM test RIGHT join test2 ON test.name2 = test2.name2;

### full join

UNION (합집합)

(
    select *
    FROM test
        LEFT join test2 ON test.name2 = test2.name2
)
UNION
(
    select *
    FROM test
        RIGHT join test2 ON test.name2 = test2.name2
)
### cross join(카타잔 곱)
# 두 테이블의 곱을 나타낸다.
select *
from test
    CROSS JOIN test2;

### self join
> 테이블이 본인을 참조 하는것.
##  as testname 실제로 사용 하는게 아니고 조회 용도로만 별칭을 정해준것.
select *
FROM test
    CROSS JOIN test as testname;
## 댓글 대댓글 만들때

### 회사 테이블
### 직원 테이블

### 회사의 값을 추가
### 직원의 값을 추가
### 회사의 소속 컬럼이 있을때
### 직원이 뽑힐수 있다.

### 모든 직원의 부서를 조회
### 해당 직원이 속해있는 부서 조회
### 모든 직원을 조회하면서 속하지 않은 부서도 조회