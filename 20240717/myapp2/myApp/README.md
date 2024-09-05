# AWS
## 포트 포워딩
## 프록시 설정 nginx
## CI/CD gitHubActions

## aws ec2 프로젝트 업로드
> git init 초기화하고 
> git remote add origin [주소]
> git pull origin master
> 유저 권한 인증
> 유저 이름 : 깃허브 이름
> 유저 비밀번호는 깃허브 프로필 누르면 설정-> 개발자 세팅 -> personal access token -> classic
> 이름과 유효시간, 권한을 설정
> 해당 토큰은 한번만 보여줌

## nodejs를 가상 서버에 설치 
> sudo apt-get update 
> sudo apt-get install -y build-essential(기본 프로그램 설치)
> sudo apt-get install curl 
> curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash --(노드의 설치파일을 다운 )
> sudo apt-get install -y nodejs

### 포트 포워딩
> 네트워크에서 외부의 포트로 요청을 보내면 재매핑해서 다른 포트로 요청을 받을 수 있도록 
> 공유기나 가상 서버에 적용을 할 수 있다.
> 80번포트로 요청을 보냈지만 3000포트로 재매핑해서 응답을 주는 것
```sh
# 추가
sudo iptables -t nat -A PREROUTING  -p tcp --dport 80 -j REDIRECT --to-port 3000;

# 확인
sudo iptables -t nat -L --line-numbers


#삭제
sudo iptables -t nat -D PREROUTING 1


sudo apt-get install iptables-persistent
sudo netfilter-persistent save
sudo systemctl restart netfilter-persistent
sudo iptables -t nat -A PREROUTING  -p tcp --dport 80 -j REDIRECT --to-port 3000;
sudo iptables -t nat -L --line-numbers
sudo iptables -t nat -D PREROUTING 1

# pm2 설치
npm i -g pm2
# nodejs어플리케이션을 운영할 때 사용하는 프로세스 매니저
# 백그라운드에서 실행을 하고 모니터링할 수 있다.
# 백그라운드는 관리자 권한이 있어야하기 때문에 sudo를 해야한다.

# 목록확인
pm2 list

# 종료
pm2 kill 
```

## 프록시 설정 nginx
> 포트 포워딩은 네트워크 장비 방화벽 특정 포트에서 들어오는 트래픽을 다른 포트나 호스트로 리다이렉트 해주는 것
> 프록시 : 클라이언트와 서버 사이에 트래픽 중개 서버가 하나 있는 것

## nginx를 사용해서 프록시 설정
> 통신을 할 때 중간에서 대신 통신을 해주는 역할을 한다.
> 중계 역할을 해주는 것이 프록시 서버 
> 클라이언트와 서버 사이의 중개 서버
> 클라이언트는 프록시 서버가 백앤드 서버로 알고 
> 백앤드 서버는 프록시 서버가 클라이언트 인줄 안다

### 프록시 서버
1. 포워드 프록시 서버 : 클라이언트와 인터넷 접속
2. 리버스 프록시 서버 : api제어

> 리버스 프록시 서버의 응답을 받아서 처리를 해준다.(서버를 감출수 있다.)


```sh

sudo apt-get install nginx 

sudo service nginx start

sudo service nginx status

sudo service nginx stop

# 설정파일을 수정해야함
/etc/nginx/sites-enabled/default

sudo vi default

# 해당 부분 수정
# 루트 요청이 들어오면
location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                # try_files $uri $uri/ =404;
                proxy_set_header HOST $host; 
                proxy_pass http://127.0.0.1:3000;
                proxy_redirect off;
        }
# $host 브라우저에서 요청받은 헤더의 내용
# proxy_set_header 클라이언트가 브라우저에서 요청을 보낸 헤더의 내용을 넘겨주겠다.
# proxy_pass 요청받은 내용을 로컬환경에 대기상태인 백앤드 서버로 요청을 보내고 응답을 받겠다. 
# proxy_redirect off spa일 경우 리디렉트를 없앤다.


# 수정하고 문법에러가 있는지 확인
sudo nginx -t

# nginx 설정 파일을 수정하면 당연히 재실행
sudo service nginx restart;
```

## 도메인
> 특정 아이피 주소에 접근할 수 있는 검색어


## AWS Route 53
> 도메인 등록, dns라우팅 기능을 제공한다.
> 도메인을 관리할 수 있게 제공한다.

## 
> DNS 레코드 도메인의 이름과 관련된 정보를  나타내는 데이터
> NS 네임 서버 인터넷에서 도메인을 ip 주소로 변환하는 역할을 담당하는 서버

### 탄력적 IP는 고정 아이피를 할당해준다.
> 1개는 무료로 해주는 걸로 알고 있다.
> 인스턴스에 적용을 해놔야하고 
> 인스턴스 지우면 탄력적 아이피 사용안하는게 남는데 비용발생

### SSL 인증서 발급해서 https 붙이기
> 검증된 사이트라는 것
> https 요청을 할 때 인증서를 발급받아서 인증 요청을 보내고
> 지금은 돈이 들지 않는 certbot을 사용해서 인증서를 방급받고 인증까지
> 3개월마다 재발급

> certbot nginx랑도 호환이 좋다.
```sh
# core는 핵심 런타임환경을 제공하는 패키지
# snap 패키지 설치를 위한 패키지 포맷
sudo snap install core
sudo snap refresh core

sudo snap install --classic certbot

# certbot 실행파일에 링크설정
sudo ln -s /snap/bin/certbot /usr/bin/certbot

certbot --version

# nginx certbot 실행
sudo certbot --nginx 

# certbot  3개월 마다 갱신
sudo certbot renew

# 인증서 발급 테스트
sudo certbot renew --dry-run
```

# CI/CD
> Continous Intergration,Continuous Deployment
> 우리가 코드를 git에 push pull 받아 서버대기상태
> 쉽게 말해 테스트 환경(test), 통합(merge), 배포(deploy)

## CI/CD 과정
작업자> 커밋, 푸쉬> 빌트 테스트 > 배포

## 서비스를 운영
> 서비스를 운영 배포 하다보면
> 기능이 번번히 새로운 기능이 추가되는데 업데이트가 되는데
> 우리가 새로 작성하는 코드를 커밋 푸쉬 풀 프랜티에서 병합을 하고 aws가상 서버에
> 코드 내용을 받고 쉘로 다시 실행하고 하면 생각보다 귀찮음

## 자동화
> 위의 과정이 번거롭기 때문에 반복되는 과정을 자동화 시킨것

## github-Actions
> 우리는 CI/CD 환경 구축을 빌드 서버도 제공해주고 무료인 github-actions
- 장점
 1. 빌드용 서버가 따라 필요 없음 (빌드서버 세팅으로 시간과 돈을 쓸 필요가 없다.), 우분투 환경을 제공해줌
 , 인스턴스에서 빌드를 할 때 메모리ㅏㄱ 보족한 문제도 빌드를 해서 빌드파일을 올리게 되면 메모리를 절약할 수 있다, 즉 돈을 절약 
 2. github와 통일된 환경에서 CI가 수행이 가능하다.
 3. yaml 파일을 이용해서 간단하게 로직을 작성할 수있다. runner가상머신
 4. yaml 파일로 간단한 파이프 라인 구성
 > 파이프라인 : 작업들을 순차적으로 수행하는 것
 > 소프트웨어 개발에서 코드를 빌드하고 테스트하고 배포하는 단계를 자동화한 흐름

 CI/CD의 파이프라인은 작업을 자동화하고 개발의 속도 증진 및 품질이 좋다

 1. 코드 커밋 , 푸쉬
 2. 푸쉬 이벤트를 보고 CI 서버 트리거 호출
 3. 코드 빌드 
 4. 자동화 테스트 실행
 5. 배포 준비
 6. 배포
 7. 모니터링

 ## github Actions 의 가강 머신 구조
 > 코드 커밋 , 푸쉬 -> 푸쉬 이벤트를 github actions가 감지하고 CI/CD로직실행 -> 배포(aws)

 > 이런 빌드 테스트 배포 작업을 github actions는 러너라고 부르는 가상머신이 컨테이너에서 실행된다.
 > github actions의 러너는 별도의 서버없이 자동화 작업을 제공한다.
 > 러너는 사용자가 원하는 운영체제를 제공한다. 윈도우 맥 리눅스 우분투 등
 > 자동 스케일링으로 리소르를 효율적으로 사용할 수 있다.
 > nodejs, python,java등의 런타임환경이 설치되어있다. 빠르게 빌드 테스트가 가능하다.
 자동 스케일링은 클라우드 컴퓨팅 환경에서 사용되는 기술 컴퓨팅 자원의 양을 자동으로 조정할 수 있다는 것을 의미

## 폴더 구조
> git에 커밋과 푸쉬를 할 때 
.github
- workflows
-- yml파일을 하나 만들어야한다. 

 ## github Actoins사용
 ```yml
name: GitHub Actions Demo
run-name: ${{ github.actor }} is testing out GitHub Actions 🚀
on: [push]
jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v4
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "🍏 This job's status is ${{ job.status }}."

 ```
 https://docs.github.com/ko/actions/quickstart

 ## AWS ec2 에 쉴 스크립트를 실행
 > ec2에 ssh 커넥션을 맺고 쉘 스크립트 실행
 ```yml
name: CI/CD 구축

on: 
    push:
        branchs:
            - master

jobs:
    deploy:
        runs-on: ubuntu-latest

    steps:
        - name: checkout
            uses: actions/checkout@4 # uses 사용할 라이브러리
            
        - name: ssh key
            uses: webfactory/ssh-agent@v0.5.3
            with: # 작성할 속성을 정의
                ssh-private-key: ${{secrets.AWS_SECRET_KEY}}
        
        - name: ssh ec2 접속
            uses: appleboy/ssh-action@v0.1.2
            with: 
                host: ${{secrets.HOST}}
                username: ${{secrets.USERNAME}}
                key: ${{secrets.AWS_SECRET_KEY}}
                port: ${{secrets.PORT}}
                script: | # 실행할 스크립트
                    cd /home/ubuntu/myapp/myApp
                    npm start
 ```

 ## 찐 최종 nestjs 빌드해서 빌드 파일 올리고 무중단 배포
 ```yml
name: last nest deploy
on:
    push:
        branches:
            - master
jobs:
    build: 
        runs-on: ubuntu-latest
    
    steps:
        - name: checkout
            uses: actions/checkout@v4

        - name: set up node
            uses: actions/setup-node@v4

        - name: create .env
            run: |
                "${{secrets.MY_KEY}}" > .env
        
        - name: npm install # 의존성 설치, npm audit fix || true 보안 취약점을 자동으로 유연하게 수정해서 실패해도 일단 빌드 진행하면서 의존성 유연하게 설치
            run: |
                npm install
                npm audit fix || true
        
        - name: build nestjs
            run: |
                source .env
                npm run build

        - name: build output # ls -al dist dist 폴더 안의 내용을 상세하게 출력 pwd 현재 작업 경로 출력
            run: |
                ls -al dist
                pwd

        - name: upload build artifacts # 빌드 준비단계 업로드 하기 전단계
            uses: actions/upload-artifact@v4
            with: 
                name: build-artifacts
                path: dist/

        - name: install ssh key
            run: |
            mkdir -p ~/.ssh
            echo "${{secrets.AWS_SECRET_KEY}}" > ~/.ssh/aws_key
            chmod 600 ~/.ssh/aws_key
            ssh-keyscan -H ${{secrets.HOST}} >> ~/.ssh/known_hosts
            cat ~/.ssh/known_hosts

        - name: debug artifacts
            run: |
                ls -al .dist

        - name: ec2 deploy
            uses: appleboy/ssh-action@v1.0.3
            with:
                host: ${{secrets.HOST}}
                username: ${{secrets.USERNAME}}
                key: ${{secrets.AWS_SECRET_KEY}}
                port: ${{secrets.PORT}}
                script: | # 실행할 스크립트
                    cd /home/ubuntu
                    rm -rf dist
                    mkdir dist
        
        - name: ec2에 아티펙트 내용 복사
            run: |
                scp -r -i ~/.ssh/aws_key .dist/* ${{secrets.USERNAME}}@${{secrets.HOST}}:/home/ubuntu/dist/

        - name: deploy to ec2
            uses: applyboy/ssh-action@v1.0.3
            with: 
                host: ${{secrets.HOST}}
                username: ${{secrets.USERNAME}}
                key: ${{secrets.AWS_SECRET_KEY}}
                port: ${{secrets.PORT}}
                script: | # 실행할 스크립트
                    cd /home/ubuntu
                    pm2 reload system.config.js --env production
 ```