// 시퀄라이즈에 매핑할 유저 객체의 내용
// 객체의 형태가 정해져 있음
const Sequelize = require("sequelize");

// sequelize.model === class
// sequelize.model 상속받아 매핑할 객체를 생성해라

// user 클래스 생성
class User extends Sequelize.Model {
    // 초기화 함수
    static init(sequelize) {
        // super 상속받은 부모의 생성자 호출
        // Sequelize.model.init() 매개변수 2개
        // 첫번째 매개변수(객체) : 매핑할 테이블의 내용, entity 데이터의 내용
        // 두번째 매개변수(객체) : 매핑할 테이블의 설정(이름, 인코딩 방식) 
        // super.init : 테이블이 없으면 만들고 있으면 매핑(entiry가 다르면 에러발생)
        return super.init({
            //컬럼의 내용
            /* 
                create table user(
                    id int auto_increment primary key,
                    name varchar(20),
                    age int,
                    msg text,
                    data datetime default now()
                )
            */
            //컬럼의 이름 
            name: {
                // 컬럼의 속성 내용
                // 시퀄라이즈 타입, VARCAHR대신 STRING을 사용함
                type: Sequelize.STRING(20),
                unique: true
            },
            age: {
                type: Sequelize.INTEGER
            },
            msg: {
                type: Sequelize.TEXT
            }


        }, {
            // 매핑할 테이블의 속성 내용
            // sequelize 키값으로 시퀄라이즈객체를 추가
            // swquelize 키를 맞춰서 작성을 해야한다.
            sequelize: sequelize,
            // 생성시간 속성을 추가, 컬럼을 추가할지 말지
            // created_at 컬럼을 추가할지 말지
            // updated_at 컬럼을 추가할지 말지
            timestamps: true,
            // 컬럼으로 created_at, updated_at 두 컬럼을 추가해준다

            // underscored: 표기법을 바꿔주는 속성
            // 기본적으로 스테이크 표기법을 사용하는데
            // 스네이크 표기법을 카멜표기법으로 변경
            underscored: false,
            // model의 이름을 설정, join관계 조회시에 사용
            modelName: "Users",
            // 매핑할 테이블의 이름, 없으면 이 이름으로 테이블 생성
            tableName: "users",
            // 해당 속성은 삭제 했지만 삭제된 시간은 남겨두고 싶을 때, 조회는 안됨
            paranoid: false,
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }
    // 테이블의 관계성을 만들 함수
    // 테이블들 내용을 매개 변수로 받고
    // 그 중에서 어떤 테이블과 관계를 맺을지 
    static associate(db) {
        // 1:1로 사용자와 게시글의 테이블의 관계를 설정
        // hasMany : 테이블의 관계를 정의한다. 1:n
        // Users가 부모 테이블이 된다.
        // sourceKey : foreignkey가 연결할 키, 부모테이블에서 제공할 키
        // foreignkey : 생성할 외래키 이름, 외래키를 가질 테이블에 줄 컬럼명
        // 고유성 : 
        db.Users.hasMany(db.Posts, { foreignKey: "user_name", sourceKey: "name" });
    }

}
module.exports = User;