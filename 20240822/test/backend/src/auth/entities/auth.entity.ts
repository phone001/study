import { Table, DataType, Model, Column, AllowNull } from 'sequelize-typescript'

@Table({
    modelName: "Auth",
    tableName: "auth",
    timestamps: true
})
export class Auth extends Model {
    @Column({
        type: DataType.STRING(),
        allowNull: false,
        unique: true
    })
    userID: string

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    userPW: string

    @Column({
        type: DataType.STRING()
    })
    name: string
}