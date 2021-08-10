/*
  Warnings:

  - Made the column `completed` on table `SubTask` required. This step will fail if there are existing NULL values in that column.
  - Made the column `taskId` on table `SubTask` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `SubTask` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `Task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `completed` on table `Task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "SubTask" ALTER COLUMN "completed" SET NOT NULL,
ALTER COLUMN "taskId" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "completed" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
