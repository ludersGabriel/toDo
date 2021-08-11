-- AlterTable
ALTER TABLE "SubTask" ADD COLUMN     "date" DATE,
ALTER COLUMN "completed" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "date" SET DATA TYPE DATE;
