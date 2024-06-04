# Buffer
> nodejs의 내장객체

## Buffer공식문서
> 바이너리 데이터들의 스트림을 읽거나 조작하는 메커니즘
> octet(8bit 형식으로 된 데이터) 스트림과의 상호작용을 가능하게 하기 위해 만들어짐

> Buffer클래스는 바이너리 데이터들의 스트림을 지겆ㅂ다루기 위해 nodejs API에 추가된 것

# 2진수와 비트
> 2진수와 비트는 `용어`
> 2진수의 자릿수는 1다음에 증가
> 2진수의 자릿수 하나당 비트
> 4비트 `바이트 패딩`
> 비트가 8개 모이면 바이트라는 컴퓨터의 가장 기본 단위가 된다.

## Binary data
> 컴퓨터는 기본 0, 1로만 데이터를 표현
> 데이터를 표현할 때 비트나 바이트라는 단위를 많이 사용
> 데이터의 가짓수를 표현할 때 사용하는 방법
> 예를 들면 12라는 숫자를 저장할 때 작성은 12로 작성하지만 컴퓨터는 2진수인 1100로 저장함
> 문자를 저장할 때 `Character Set 문자집합`이라는 것을 사용
> 컴퓨터는 대소문자를 구분함(다르게 인식)
> 문자집합 : 문자를 숫자로 표현할 수 있도록 정의한 규칙

### Character Set문자 집합
1. 아스키코드
> 글자를 표현할 때 8bit만 사용
> 8bit중 1bit는 오류체크용도로 사용, 실제로는 7bit만 사용
> 이 오류체크용 비트를 `패리티비트`라고 한다.
> 2^7인 128가지의 글자를 표현 가능
> 한글을 제외한 키보드 자판에 있는 영어와 특수문자만 표현이 가능
> 한글은 2byte

2. 유니코드
> 전세계의 문자를 일관되게 표현할 수 있도록 설계된 표준
> 아스키 코드와 유니코드의 큰차이점은 용량의 차이
> 글자 하나당 2byte사용


### 16진수
> 2진수와 10진수
> 2진수는 문자의 표현이 길어 비효율적
> 그래서 16진수로 줄여서 표현
> 숫자 0~9, 문자 A~F로 표현
> 10진수를 16으로 더이상 나누어지지 않을때 까지 반복
> ex) 10진수 30=> 16진수 1E


### 인코딩 규칙
> 문자를 숫자로 나태내는 것에 규칙이 있는 것처럼
> 숫자를 바이너리 데이터로 나타내는 데에도 규칙이 있다. 
> A는 숫자 65를 나타내는데 2진수로 표현하면 1000001으로 표현
> 컴퓨터는 어느 부분에서 구분해야할지 몰라 결과가 달라질 수 있음
> 그래서 `문자 인코딩`을 한다.
> 문자 인코딩중 하나인 UTF8=> 뒤의 숫자는 bit
> 더 적은 비트로 표현이 가능한 숫자도 문자 인코딩을 통해 8bit로 변환
> 자릿수만 맞추면됨

## Stream
> nodejs의 스트림
> 한 지점에서 다른지점으로 이동하는 일련의 데이터 
> 방대한 데이터 처리를 할 때 모든 데이터가 전부 다 사용가능할 때까지 기다리지 않아도 된다.
> 기본적으로 큰 데이터는 청크 단위로 세분화되어 전송한다.
> 청크 : 서로 밀접하게 관련된 의미의 덩어리?
> Buffer의 정의로 파일 시스템에서 바이너리 데이터들이 이동한다는 것 
> Streamin하는 동안 buffer는 바이너리 데이터를 어떻게 다루나

## Buffer
> 데이터 스트림이란 이련의 데이터들이 한 지점에서 다른 지점으로 이동하는 것
> 일반적으로 데이터의 이동은 해당 데이터를 가지고 작업 혹은 읽기 등을 하기 위해서 함
> 어떤 작업을 할 때 특정시간동안 데이터를 받을 수 있는 데이터의 최소량과 최대량이 존재
> 이 작업이 데이터를 처리하는 시간보다 데이터가 도착하는 것이 빠르면 
> 초과된 데이터는 어느 공간에서 처리되기를 대기하고 있어야 함
> 데이터를 처리하는 시간보다 데이터가 빠르게 계속 도착하면 
> 먼저 도착한 데이터는 처리되기 전에 어느 정도 데이터가 쌓일 때까지 기다려야함 
> 그 데이터가 대기하는 영역이 버퍼
> 컴퓨터에서 일반적으로 ram의 영역에서 스트리밍 중에 데이터가 일시적으로 모이고 기다리다가
> 데이터를 처리할 때 처리하기 위해 내보내줌
> nodejs는 데이터가 도착하는 시간이나 전송되는 속도를 제어할 수 없다.
> nodejs가 결정할 수 있는건 언제 데이터를 내보낼것인지
> 아직 데이터를 내보낼 때가 아니면 nodejs는 데이터드르이 대기 영역인 ram에 작은 영역인 버퍼에 데이터를 쌓아 놓는다.
> 유튜브 등의 영상을 시청할 때 인터넷이 좋으면 버퍼를 빠르게 채우고 데이터를 빠르게 내보내서 처리하는 것을 반복
> 인터넷이 좋지 않으면 로딩을 띄우면서 버퍼링이 걸림, 데이터가 더 도착할 때까지 기다린다는 의미
> 데이터가 더 쌓이고 처리되면 영상이 보임

## Buffer객체
> nodejs에서는 streamimg을 하는 동안 자동으로 buffer를 만든다.
```js
const buffer1 = Buffer.alloc(10)// size가 10인 버퍼객체를 만든다.(10 byte)
const buffer2 = Buffer.from("Hello Buffer")// Buffer "Hello Buffer" 데이터를 담아준다.

console.log(buffer1.toJSON())
console.log(buffer2.toJSON())


buffer1.write("Heelo Buffer a");//빈 공간에 버퍼에 내용을 삽입

// 버퍼를 디코딩
console.log(buffer1.toString())
```