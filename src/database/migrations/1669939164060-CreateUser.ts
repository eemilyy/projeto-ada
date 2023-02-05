import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1669939164060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "phone_number",
                        type: "varchar"
                    },
                    {
                        name: "cpf_cnpj",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar" 
                    },
                    {
                        name: "user_type",
                        type: "varchar"
                    },
                    {
                        name: "imageURL",
                        type: "varchar",
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}