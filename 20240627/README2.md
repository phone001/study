# index
> 데이터베이스의 인덱스는 중요한 개념중 하나
> 데이터의 겁색 성능을 잘 사용하면 성능을 향상시킬 수 있다.
> 데이터의 빠른 접근을 할 수 있게 만들어주는 자료 구조

# DBMS index
> b-tree기반의 동작을 할 수 있다. 
> b-tree기반의 인덱스를 생성한다.
> 안덱스가 조회에는 좋지만 잘못사용하면 성능이 더 떨어질 수 있다. 
> 추가ㅡ 수정, 삭제가 오래걸린다
> 인덱스의 데이터도 생성이 되기때문에 데이터의 저장공간도 늘어난다.
> 데이터베이스 오버헤드 :  너무 많은 인덱스가 있으면 DBMS성능이 떨어진다.
> 꼭 필요한 곳인지 확인, 조회가 빈번히 일어나고 데이터가 많은 경우

> 인덱스로 지정한 데이터가 전체 테이블의 데이터중에 상당 수를 차지하는 경우에는 full scan을 하는게 더 빠르다.

## b-tree
> 이진 트리는 자식을 두개 갖지만 b-tree는 여러개 가질 수 있다.
> 이진 트리보다 검색 속도가 빠르다.

### index동작과정
> 인덱스는 id를 기준으로 정렬하고 그에 대한 포인터(주소)를 생성한다.
> 숫자는 오름차순, 영문은 a,b,c 한글은 초성 중성 종성(가,각,간,갇...).
> 포인터는 원본데이터의 위치값을 가지고 있다. 
> 데이터의 가운데 값을 조회하고 해당 값이 조건에 맞는지 확인하는 것을 반복
> 조건에 맞으면 인접한 값들을 확인하고 인접한 값들이 조건에 맞지 않으면 index에서 검색은 끝.
> 조건이 맞는 데이터들을 포인터를 통해 테이블에서 위치 값을 통해 조회가 들어간다.

> 두번째 조건이 index값이 아니면 full scan과 다를바 없다.
> 그래서 두번째도 index를 주는것이 좋다(멀티 컬럼 인덱스)

## index 구조
```sql
create database test2;
use test2;

create table student(
    id int auto_increment primary key,
    name varchar(50),
    email varchar(50),
    age int,
    class varchar(10)
);

--full scan
select * from student;
--full scan/ name이라는 값을 찾기 위해 전체 확인
select * from student where name = 'kim';
```

## 테이블의 값을 csv를 가져와서 추가해보자
> mysql 로컬 파일을 읽을 수 있는 상태인지 속성을 확인해봐야한다.
```sql
 show global variables like "local_infile"

 
 set global local_infile=ON;

 -- 파일을 가져올 경로
 show variables like "secure_file_priv";

 
```

