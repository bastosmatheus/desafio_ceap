import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1745961752061 implements MigrationInterface {
    name = 'FirstMigration1745961752061'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cursos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(100) NOT NULL, \`tipo\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`matriculas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`data_matricula\` date NOT NULL, \`status\` varchar(20) NOT NULL, \`curso_id\` int NOT NULL, \`aluno_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`alunos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`data_nascimento\` date NOT NULL, \`ativo\` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`matriculas\` ADD CONSTRAINT \`FK_de4dc94e001d9d72471c4937c50\` FOREIGN KEY (\`curso_id\`) REFERENCES \`cursos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matriculas\` ADD CONSTRAINT \`FK_e5ef6cd1ffd137626b677735d5d\` FOREIGN KEY (\`aluno_id\`) REFERENCES \`alunos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matriculas\` DROP FOREIGN KEY \`FK_e5ef6cd1ffd137626b677735d5d\``);
        await queryRunner.query(`ALTER TABLE \`matriculas\` DROP FOREIGN KEY \`FK_de4dc94e001d9d72471c4937c50\``);
        await queryRunner.query(`DROP TABLE \`alunos\``);
        await queryRunner.query(`DROP TABLE \`matriculas\``);
        await queryRunner.query(`DROP TABLE \`cursos\``);
    }

}
