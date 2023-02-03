import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm"

export class AddStudentsToProject1675274843121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" ADD "students_id" uuid`);

        await queryRunner.createForeignKey(
            'projects',
            new TableForeignKey({
              columnNames: ['students_id'],
              referencedTableName: 'users',
              referencedColumnNames: ['id']
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "students_id"`);
    }

}
