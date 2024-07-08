// 데코레이터는 함수가 정의되어 있고 런타임 환경에서 메타데이터로 가져와서 호출
import 'reflect-metadata';
const decorator = (target: any, property: string) => {
    console.log(property);
    Reflect.defineMetadata("metadataKey", "metadataValue", target, property);
    console.log(target)
}

class App {
    @decorator
    start() {
        console.log("app");
    }
}
const tmp = new App();
const metadata = Reflect.getMetadata("metadataKey", tmp, "start");
console.log(metadata);

// 런타임에서 데코레이터 함수와 같이 작성한 함수가 같이 호출된다.
