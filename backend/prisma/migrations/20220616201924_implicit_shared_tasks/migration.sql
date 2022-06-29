/*
  Warnings:

  - You are about to drop the column `userId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `SubTask` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "SubTask" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "userId";
