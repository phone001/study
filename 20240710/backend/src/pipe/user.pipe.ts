import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";
// implements는 형태만 상속
export class UserNamePipe implements PipeTransform {
    // 파이프를 선언하고 호출하면
    // value에 갑싱 입력값이 할당된다. 
    // @Body("index",userNumberPipe) // value
    // body에서 구조분해 할당해서 할당해준 indexrk value
    // metadeta : 데이터를 설명하는 데이터
    // metadata : { metatype:[function:Number],type:"body",data:"index"};
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(metadata);
        console.log(typeof value);
        console.log(isNaN(value));
        if (isNaN(value)) {
            // BadRequestException 에러발생 응답 메시지를 응답할 때 메시지 내용을 추가해서 객체 생성
            throw new BadRequestException("데이터 타입이 문자형으로 params에 전달했어");
        }
        return parseInt(value);
    }
}

// 이름 데이터가 몇자 이상
export class UserNameMinCount implements PipeTransform {
    count: number = null;
    constructor(count: number) {
        this.count = count;
    }
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.length < (this.count || 3)) {
            throw new BadRequestException(`최소 ${this.count}자 이상 이름을 작성해라`)
        }
        return value;
    }
}

export class UserNameMaxCount implements PipeTransform {
    count: number = null;
    constructor(count: number) {
        this.count = count;
    }
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.length > (this.count || 8)) {
            throw new BadRequestException(`최대 ${this.count || 8}자 이하 이름을 작성해라`)
        }
        return value;
    }
}

// 유저의 이름을 받고 파이프 처리를 해서 
// 유저의 이름이 문자형 타입이면 숫자포함X
// 문자형 타입이고 최소 3자 이상 5자 이하

export class StringCheck implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        // const reg = /^[0-9]/g;
        const reg = /\d/g;
        if (reg.test(value)) {
            throw new BadRequestException("문자만 입력해주세요.");
        }
        if (value.length < 3 || value.length > 5) {
            throw new BadRequestException("3자 이상 5자 이하로 입력해주세요");
        }
        return value;
    }
}

export class UserLoginObjectPipe implements PipeTransform {
    // 객체의 형태를 생성자에서 받고
    // zodschema ===z.object로 만든 객체가 맞는지 타입 검증
    constructor(private userDTOBody: ZodSchema) {

    }
    transform(value: any, metadata: ArgumentMetadata) {
        try {
            // parse 전달한 값을 객체로 변환하는 작업
            // 객체로 반환
            const parseValue = this.userDTOBody.parse(value);
            return parseValue;
        } catch (error) {
            throw new BadRequestException("user login DTO error");
        }
    }
}