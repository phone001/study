# 클라우드란?
> 네트워크를 통해서 컴퓨팅 자원을 쉽게 이용할 수 있는 것
> 다이어그램으로 복잡한 인프라를 추상적으로 표현한 것이 구름의 모양을 사용해서 클라우드라고 부르게 됨
> 클라우드라는 용어는 인터넷을 추상화해서 나타낸 것
> 인터넷이나 서버 인프라를 직접 다루는 것이 아니고 원격으로 접속해서 사용하는 개념을 시작적으로 표현해준 것.

## 서비스의 모델 SaaS,PaaS,IaaS
1. SaaS(Software as Service) : 소프트웨어 기반 서비스 
> 인터넷을 통해 소프트웨어를 사용할 수 있고 직집 소프트웨어를 업데이트는 불가능(Gmail,Microsoft365 등)

2. PaaS(Platform as Service) : 플랫폼 기반의 서비스
> 개발, 실행 , 테스트 배포를 제공해 받아서 사용할 수 있는 플랫폼의 형태를 클라우드로 제공
> 개발자가 소프트웨어를 만들 때 개발에만 신경을 쓰고 개발 환경이나 데이터베이스 미들웨어 등을 플랫폼에서 제공해준다. 개발자는 설정값만 수정하면 된다.(Heroku) 배포를 신경쓰지 않고 빠르게 진행할 수 있는 장점, 서버 관리나 네트워크의 성정은 클라우드에서 제공

3. IaaS(Infrastructure as Service): 인프라 기반의 서비스
> 서버와 저장소 네트워크 등을 제공하는 서비스
> 물리적은 서버 하드웨어를 가지고 있지는 않지만 네트워크 요청을 통해 클라우드 서비스를 이용해 필요한 만큼만 컴퓨팅 자원을 빌려 사용할 수 있다. 쉽게 말해 네트워크를 통해 원격으로 컴퓨팅 자원을 이용할 수 있는 것
> aws 컴퓨텅 자원을 빌려서 이용하고 인프라를 설정해서 운영까지 할 수 있다.

## AWS에서 제공하는 네트워크의 형태
VPC :  네트워크를 분할해서 제공하는 것
서버넷 : 분할한 네트워크에서 더 작은 단위


## 클라우드 서비스를 사용할 때 리전
> 물리적으로 위치한 데이터 센터 그룹
> SaaS, PaaS,IaaS와 같은 서비스 모델에서 리전은 데이터의 저장 위치, 성능, 법적 요구 사항을 관리한다.
> 리전은 클라우드 서비스를 사용하는 사용자와 가까운 곳에 인프라를 제공해준다.

## 인증 권한을 가지고 있는 IAM
> IAM은 사용자나 그룹의 신원확인과 권한을 담당하는 서비스
> 클라우드 인프라 및 자원을 이용할 때 접근 권한이 있는지 제어

- 인증 : 사용자의 신원을 확인
- 인가 : 사용자가 리소스에 접근 권한이 있는지 확인
> 보안과 접근의 제어에 중점을 둔것 

## AWS CLI
> 도커로 이미지를 생성할 때 AWS애 CLI의 형태로 요청을 보내서 사용할 예정

## 이전에는  콘솔 웹을 제공해주는 것을 사용
> CLI의 형태를 웹의 형태로 쉽게 사용할 수 있도록 표현해준것

AWS CLI 사용
```sh
# mac
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /

aws --version
```

AWS에 CLI로 요청을 보낼 때 인증을 처리하기 위해서 IAM계정
서비스 탭에 IAM을 클릭하고 사용자 생성 다음 다음 눌러서 
이후에 계정을 클릭
보안 자격증명 > 엑세스 키 관리에 키생성(commend line interface)

권한이 없는 계정

aws설치 파일에 config 설정 파일의 내용을 읽어서 요청을 보낸다
1. 사용자의 액세스키
2. 액세스키의 비밀키
3. 인스턴스를 생성할 리전
4. 출력의 형태를 정한다. json 형태를 가장 많이 씀

```sh
aws configure

AWS Access Key ID [None]: 액세스키 입력
AWS Secret Access Key [None]: 비밀키 입력
Default region name [None]: 사용하는 리전(위치)코드? 입력(ap-northeast-2는 서울)
Default output format [None]: 출력의 형태(json)
```

정책 권한 추가
AmazonAppFlowFullAccess - 앱에 대한 전체 권한인듯

EC2 인스턴스 생성
1. 키페어
```sh
# 이미 한번 키의 이름이 만들어지면 내용들어가지 않음
# 한번 생성된 이름으로 다시 만들고 싶다면 기존의 키는 삭제 해야됨
# 공식 문서
# https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/delete-key-pair.html
aws ec2 create-key-pair --key-name 키이름 --key-type rsa --key-format pem --query "KeyMaterial" \--output text > 키파일이름

# 키 파일의 권한 변경
chmod +r 카파일

# ec2 인스턴스 생성하기 위한 AMI
aws ec2 describe-images --owners amazon --filters "Name=name,  Values=amzn2-ami-hvm-*-x86_64-gp2" --query "Images[*].[ImageId,Name]" --output table 

# ec2의 보안그룹 생성
aws ec2 create-security-group --group-name myKimGroup --description '설명'
# 보안 그룹 아이디 
# {
#    "GroupId": "sg-0aaa012a872a6d757"
# }

# 보안그룹에 규칙 설정
# 접속 아이피 허용  포트번호 허용
# --group-name 위에서 만든 보안그룹의 이름이여야함
# --protocol 어떤 프로토콜을 허용할 건지
# --port 접속허용할 포트?
# --cidr 접속 허용할 ip, 0.0.0.0은 모든 접속을 허용
aws ec2 authorize-security-group-ingress --group-name myKimGroup --protocol tcp --port 22 --cidr 0.0.0.0/0
#{
#    "Return": true,
#    "SecurityGroupRules": [
#        {
#            "SecurityGroupRuleId": "",
#            "GroupId": "",
#            "GroupOwnerId": "",
#            "IsEgress": false,
#            "IpProtocol": "tcp",
#            "FromPort": 22,
#            "ToPort": 22,
#            "CidrIpv4": "0.0.0.0/0"
#        }
#    ]
# }

# ec2생성
# --image-id : ec2 인스턴스 생성하기 위한 AMI애서 나온 테이블의 
aws ec2 run-instances --image-id 이미지 아이디 --instance-type t2.micro --key-name myKeyKim2 --security-groups myKimGroup
{
    "Groups": [],
    "Instances": [
        {
            "AmiLaunchIndex": 0,
            "ImageId": "",
            "InstanceId": "",
            "InstanceType": "t2.small",
            "LaunchTime": "2024-09-11T06:38:55+00:00",
            "Monitoring": {
                "State": "disabled"
            },
            "Placement": {
                "AvailabilityZone": "",
                "GroupName": "",
                "Tenancy": "default"
            },
            "PrivateDnsName": "",
            "PrivateIpAddress": "",
            "ProductCodes": [],
            "PublicDnsName": "",
            "State": {
                "Code": 0,
                "Name": "pending"
            },
            "StateTransitionReason": "",
            "SubnetId": "",
            "VpcId": "",
            "Architecture": "x86_64",
            "BlockDeviceMappings": [],
            "ClientToken": "",
            "EbsOptimized": false,
            "EnaSupport": true,
            "Hypervisor": "xen",
            "NetworkInterfaces": [
                {
                    "Attachment": {
                        "AttachTime": "2024-09-11T06:38:55+00:00",
                        "AttachmentId": "",
                        "DeleteOnTermination": true,
                        "DeviceIndex": 0,
                        "Status": "attaching",
                        "NetworkCardIndex": 0
                    },
                    "Description": "",
                    "Groups": [
                        {
                            "GroupName": "default",
                            "GroupId": ""
                        }
                    ],
                    "Ipv6Addresses": [],
                    "MacAddress": "",
                    "NetworkInterfaceId": "",
                    "OwnerId": "",
                    "PrivateDnsName": "",
                    "PrivateIpAddress": "",
                    "PrivateIpAddresses": [
                        {
                            "Primary": true,
                            "PrivateDnsName": "",
                            "PrivateIpAddress": ""
                        }
                    ],
                    "SourceDestCheck": true,
                    "Status": "in-use",
                    "SubnetId": "",
                    "VpcId": "",
                    "InterfaceType": "interface"
                }
            ],
            "RootDeviceName": "/dev/xvda",
            "RootDeviceType": "ebs",
            "SecurityGroups": [
                {
                    "GroupName": "default",
                    "GroupId": ""
                }
            ],
            "SourceDestCheck": true,
            "StateReason": {
                "Code": "pending",
                "Message": "pending"
            },
            "VirtualizationType": "hvm",
            "CpuOptions": {
                "CoreCount": 1,
                "ThreadsPerCore": 1
            },
            "CapacityReservationSpecification": {
                "CapacityReservationPreference": "open"
            },
            "MetadataOptions": {
                "State": "pending",
                "HttpTokens": "optional",
                "HttpPutResponseHopLimit": 1,
                "HttpEndpoint": "enabled",
                "HttpProtocolIpv6": "disabled",
                "InstanceMetadataTags": "disabled"
            },
            "EnclaveOptions": {
                "Enabled": false
            },
            "PrivateDnsNameOptions": {
                "HostnameType": "ip-name",
                "EnableResourceNameDnsARecord": false,
                "EnableResourceNameDnsAAAARecord": false
            },
            "MaintenanceOptions": {
                "AutoRecovery": "default"
            },
            "CurrentInstanceBootMode": "legacy-bios"
        }
    ],
    "OwnerId": "",
    "ReservationId": ""
}

# ec2 리스트 확인
aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]" --output table

# ec2에 연결
sudo ssh -i "키파일" ec2-user@ip
```

## ECR Docker 이미지를 저장하고 관리할 수 있는 aws서비스
## EBL 로드벨런서 설정
## S3 버킷
## CloudWatch 모니터링 어플리케이션 성능 추적 오류 발생 징후 알림
## CI/CD