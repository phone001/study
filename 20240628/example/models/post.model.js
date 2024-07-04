const Sequelize = require("sequelize");

// 컬럼 중에 primary key가 없으면 id가 자동으로 생성

class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: Sequelize.STRING(100),
                allowNull: false, // null을 허용할건지
                // primaryKey: false // 기본키
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: "post",
            tableName: "posts",
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci"
        });
    }
    static associate(db) {
        // 자식 테이블
        // belongsTo : 자식 테이블이 부모의 테이블에서 외래키를 foreignKey로 사용을 하고
        // target : 참조할 부모의 테이블의 키
        db.Posts.belongsTo(db.Users, { foreignKey: "user_name", target: "name" });
    }
}

module.exports = Post;