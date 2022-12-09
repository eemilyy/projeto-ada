import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProject1670546051404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: "projects",
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
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "user_id",
                    type: "uuid"
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
               ],
               foreignKeys: [
                {
                    name: "user_project", // nome da referencia
                    columnNames: ["user_id"], // qual a coluna dentro da tabela que estamos
                    referencedTableName: "users", // qual a tabela
                    referencedColumnNames: ["id"] // qual a coluna da tabela
                    
                }
               ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("projects");
    }

}
