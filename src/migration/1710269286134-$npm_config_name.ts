import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1710269286134 implements MigrationInterface {
    name = ' $npmConfigName1710269286134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`age\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`member\` (\`id\` int NOT NULL AUTO_INCREMENT, \`forename\` varchar(255) NOT NULL, \`surname\` varchar(255) NOT NULL, \`birth_date\` datetime NOT NULL, \`type\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`award\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`review\` (\`id\` int NOT NULL AUTO_INCREMENT, \`comment\` varchar(255) NOT NULL, \`rating\` int NOT NULL, \`showId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`show\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`release_date\` datetime NOT NULL, \`type\` varchar(255) NOT NULL, \`rating\` int NOT NULL, \`popularity\` int NOT NULL, \`top250\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`genre\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`member_shows_show\` (\`memberId\` int NOT NULL, \`showId\` int NOT NULL, INDEX \`IDX_b57500a401d3c3e548995df9fb\` (\`memberId\`), INDEX \`IDX_2132301deba114315e8d37339e\` (\`showId\`), PRIMARY KEY (\`memberId\`, \`showId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`award_awarded_shows_show\` (\`awardId\` int NOT NULL, \`showId\` int NOT NULL, INDEX \`IDX_599ce90ff5e1fbc75ed1ab1e4a\` (\`awardId\`), INDEX \`IDX_e5c13f7e874bf7e8cf3dcd2f8f\` (\`showId\`), PRIMARY KEY (\`awardId\`, \`showId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`show_members_member\` (\`showId\` int NOT NULL, \`memberId\` int NOT NULL, INDEX \`IDX_5f0d99f7e89ac6b3ed9923e204\` (\`showId\`), INDEX \`IDX_a5689346181d3afa9c8f5211a6\` (\`memberId\`), PRIMARY KEY (\`showId\`, \`memberId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`show_award_award\` (\`showId\` int NOT NULL, \`awardId\` int NOT NULL, INDEX \`IDX_0fc9af46b88562ac004930c61e\` (\`showId\`), INDEX \`IDX_6e2528f60e894263d308c086e2\` (\`awardId\`), PRIMARY KEY (\`showId\`, \`awardId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`review\` ADD CONSTRAINT \`FK_e855ed5d657fcdc4f51adc65527\` FOREIGN KEY (\`showId\`) REFERENCES \`show\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`member_shows_show\` ADD CONSTRAINT \`FK_b57500a401d3c3e548995df9fba\` FOREIGN KEY (\`memberId\`) REFERENCES \`member\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`member_shows_show\` ADD CONSTRAINT \`FK_2132301deba114315e8d37339ea\` FOREIGN KEY (\`showId\`) REFERENCES \`show\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`award_awarded_shows_show\` ADD CONSTRAINT \`FK_599ce90ff5e1fbc75ed1ab1e4ae\` FOREIGN KEY (\`awardId\`) REFERENCES \`award\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`award_awarded_shows_show\` ADD CONSTRAINT \`FK_e5c13f7e874bf7e8cf3dcd2f8fe\` FOREIGN KEY (\`showId\`) REFERENCES \`show\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`show_members_member\` ADD CONSTRAINT \`FK_5f0d99f7e89ac6b3ed9923e2048\` FOREIGN KEY (\`showId\`) REFERENCES \`show\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`show_members_member\` ADD CONSTRAINT \`FK_a5689346181d3afa9c8f5211a6a\` FOREIGN KEY (\`memberId\`) REFERENCES \`member\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`show_award_award\` ADD CONSTRAINT \`FK_0fc9af46b88562ac004930c61e6\` FOREIGN KEY (\`showId\`) REFERENCES \`show\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`show_award_award\` ADD CONSTRAINT \`FK_6e2528f60e894263d308c086e21\` FOREIGN KEY (\`awardId\`) REFERENCES \`award\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`show_award_award\` DROP FOREIGN KEY \`FK_6e2528f60e894263d308c086e21\``);
        await queryRunner.query(`ALTER TABLE \`show_award_award\` DROP FOREIGN KEY \`FK_0fc9af46b88562ac004930c61e6\``);
        await queryRunner.query(`ALTER TABLE \`show_members_member\` DROP FOREIGN KEY \`FK_a5689346181d3afa9c8f5211a6a\``);
        await queryRunner.query(`ALTER TABLE \`show_members_member\` DROP FOREIGN KEY \`FK_5f0d99f7e89ac6b3ed9923e2048\``);
        await queryRunner.query(`ALTER TABLE \`award_awarded_shows_show\` DROP FOREIGN KEY \`FK_e5c13f7e874bf7e8cf3dcd2f8fe\``);
        await queryRunner.query(`ALTER TABLE \`award_awarded_shows_show\` DROP FOREIGN KEY \`FK_599ce90ff5e1fbc75ed1ab1e4ae\``);
        await queryRunner.query(`ALTER TABLE \`member_shows_show\` DROP FOREIGN KEY \`FK_2132301deba114315e8d37339ea\``);
        await queryRunner.query(`ALTER TABLE \`member_shows_show\` DROP FOREIGN KEY \`FK_b57500a401d3c3e548995df9fba\``);
        await queryRunner.query(`ALTER TABLE \`review\` DROP FOREIGN KEY \`FK_e855ed5d657fcdc4f51adc65527\``);
        await queryRunner.query(`DROP INDEX \`IDX_6e2528f60e894263d308c086e2\` ON \`show_award_award\``);
        await queryRunner.query(`DROP INDEX \`IDX_0fc9af46b88562ac004930c61e\` ON \`show_award_award\``);
        await queryRunner.query(`DROP TABLE \`show_award_award\``);
        await queryRunner.query(`DROP INDEX \`IDX_a5689346181d3afa9c8f5211a6\` ON \`show_members_member\``);
        await queryRunner.query(`DROP INDEX \`IDX_5f0d99f7e89ac6b3ed9923e204\` ON \`show_members_member\``);
        await queryRunner.query(`DROP TABLE \`show_members_member\``);
        await queryRunner.query(`DROP INDEX \`IDX_e5c13f7e874bf7e8cf3dcd2f8f\` ON \`award_awarded_shows_show\``);
        await queryRunner.query(`DROP INDEX \`IDX_599ce90ff5e1fbc75ed1ab1e4a\` ON \`award_awarded_shows_show\``);
        await queryRunner.query(`DROP TABLE \`award_awarded_shows_show\``);
        await queryRunner.query(`DROP INDEX \`IDX_2132301deba114315e8d37339e\` ON \`member_shows_show\``);
        await queryRunner.query(`DROP INDEX \`IDX_b57500a401d3c3e548995df9fb\` ON \`member_shows_show\``);
        await queryRunner.query(`DROP TABLE \`member_shows_show\``);
        await queryRunner.query(`DROP TABLE \`genre\``);
        await queryRunner.query(`DROP TABLE \`show\``);
        await queryRunner.query(`DROP TABLE \`review\``);
        await queryRunner.query(`DROP TABLE \`award\``);
        await queryRunner.query(`DROP TABLE \`member\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
