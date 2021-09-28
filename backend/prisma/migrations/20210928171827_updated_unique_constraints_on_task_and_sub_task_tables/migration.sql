/*
  Warnings:

  - A unique constraint covering the columns `[id,taskId]` on the table `SubTask` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,taskId,userId]` on the table `SubTask` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId,projectId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `SubTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubTask" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "subTaskId_taskId" ON "SubTask"("id", "taskId");

-- CreateIndex
CREATE UNIQUE INDEX "subTaskId_taskId_userId" ON "SubTask"("id", "taskId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "taskId_userId" ON "Task"("id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "taskId_userId_projectId" ON "Task"("id", "userId", "projectId");

-- AddForeignKey
ALTER TABLE "SubTask" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
