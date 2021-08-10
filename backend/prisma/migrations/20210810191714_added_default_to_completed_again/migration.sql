-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "completed" DROP NOT NULL,
ALTER COLUMN "completed" SET DEFAULT false;
