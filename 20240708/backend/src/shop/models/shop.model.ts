import { Table, Column, Model, DataType, HasMany, BelongsTo, PrimaryKey, ForeignKey, } from "sequelize-typescript";


@Table({ tableName: 'users', timestamps: true })
export class User extends Model {
    @PrimaryKey
    @Column({ type: DataType.STRING, allowNull: false })
    userId: string;

    @Column({ type: DataType.STRING })
    name: string;

    @Column({ type: DataType.INTEGER })
    age: number;

    @HasMany(() => Shop)
    shop: Shop[];
}

// 테이블의 구조
@Table({ tableName: "shops", timestamps: true, paranoid: true })
export class Shop extends Model {
    // @Table : 시퀄라이즈 객체의 매핑할 테이블을 만들어준다.
    // @Column
    // 컬럼 이름 : 데이터 타입
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.INTEGER })
    price: number;
    // 관곟형
    // @HasMany(() => Shop)
    // shop: Shop[];
    // shops: 여러개의 shop의 배열

    @ForeignKey(() => User)
    @Column // targetKey
    userId: string;

    @BelongsTo(() => User)
    users: User;
}

