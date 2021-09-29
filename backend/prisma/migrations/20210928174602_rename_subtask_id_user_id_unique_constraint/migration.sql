/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `SubTask` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "subTaskId_taskId";

-- CreateIndex
CREATE UNIQUE INDEX "subTaskId_userId" ON "SubTask"("id", "userId");
