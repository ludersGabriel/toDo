-- AlterTable
ALTER TABLE "SubTask" ADD COLUMN     "description" TEXT,
ALTER COLUMN "completed" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "description" TEXT,
ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "completed" DROP NOT NULL;
