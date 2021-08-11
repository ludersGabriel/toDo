/*
  Warnings:

  - Made the column `userId` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `taskId` on table `SubTask` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Task` required. This step will fail if there are existing NULL values in that column.
  - Made the column `projectId` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "SubTask" ALTER COLUMN "taskId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "projectId" SET NOT NULL;
