import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1691989790815 implements MigrationInterface {
    name = 'Init1691989790815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies" ("id" SERIAL NOT NULL, "tmdbId" integer NOT NULL, "title" character varying NOT NULL, "releaseDate" character varying NOT NULL, "poster" character varying NOT NULL, "overview" character varying NOT NULL, CONSTRAINT "UQ_e9d4a90d2d6a56fd9f9300c9370" UNIQUE ("tmdbId"), CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "userName" character varying NOT NULL, "userNameUnique" character varying NOT NULL, CONSTRAINT "UQ_0433865d209f449954c62fdaf32" UNIQUE ("userNameUnique"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" SERIAL NOT NULL, "tmdbId" integer NOT NULL, "rating" integer NOT NULL, "userIdId" integer, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_39f50bcaf46fb3261cefd434c5a" FOREIGN KEY ("userIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_39f50bcaf46fb3261cefd434c5a"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "movies"`);
    }

}
