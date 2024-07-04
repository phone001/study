# 데이터베이스 관계형
- 1:1
- 1:N
- N:1
- M:N

# index
> 데이터를 조회화는데 죄적화

# 데이터베이스 테이블 
> 관계형의 용어 `entity`(데이터베이스에 저장할 데이터의 집합)
> 사용자, 물건, 행위, 장소 이러한 명사를 데이터로 집합화 한것
> table === entity
> table에 저장되는 데이터의 내용이 엔티티

# 관계성
> 비디오가게 -> 사용자===비디오를 빌리는 테이블에 값을 추가할 수 있다. 
> 관계성을 시각화해주는 프로그램이나 등등의 ERD
> entity간의 관계성을 시각화 그림으로 표현해서 확인할 수 있다. 

## 관계의 종류
1. 1:1
2. 1:N
3. N:1
4. M:N

## 1:1 
> 두 개 이상의 entity데이터 집합을 하나씩만 관게를 주는 것
> 유저가 회원가입을 진행했을 때 name, age, city
> 유저 테이블과 유저의 주소를 저장하는 테이블
> 사용자가 있어야 주소 테이블에 값을 저장할 수 있다.

## 1:N
> 한 entity에 다른 컬럼 들이 여러개의 entity에 관계를 주는 것.
> 유저가 계시판에 댓글을 여러개 달 수 있는 것

## M:N
> entity에 여러가지의 데이터를 한 entity에 데이터를 고나계를 주는 것.
> 유저가 상품을 구매하고 상품의 상세페이지에 여러명의 유저가 리뷰를 달 수 있다.
> 여러명의 유저도 구매 요청을 할 수 있는 구조

## 관계형의 구조
> 사용자가 있고 여권을 발급받을 것. 
> 여권에는 사용자의데이터가 포함되어야 저장이 가능하다.

```sql
create table user(
    user_id int primary key,
    name varchar(50)
);
create table passport(
    passport_id int primary ket,
    user_id int unique,
    passport_number varchar(100),
    foreign key (user_id) references user(user_id)
);
```

```sql
create table address(
    address_id int primary key,
    user_id int unique,
    address varchar(255),
    foreign key (user_id) references user(user_id)
)
```

## M:N

```sql
create table student(
    studect_id int primary key,
    name varchar(30)
);
create table cousress(
    cousress_id int primary key,
    title varchar(50)
)

create table linkCouress(
    student_id int ,
    couress_id int,
    primary key(student_id,couress_id),
    foreign key(student_id) references student(student_id)
    foreign key(couress_id) references cousress(couress_id)
);