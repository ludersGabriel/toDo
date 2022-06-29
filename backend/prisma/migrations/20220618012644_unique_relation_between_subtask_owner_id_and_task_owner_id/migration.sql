/*
  Warnings:

  - A unique constraint covering the columns `[id,ownerId]` on the table `SubTask` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,ownerId]` on the table `Task` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SubTask_id_ownerId_key" ON "SubTask"("id", "ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_ownerId_key" ON "Task"("id", "ownerId");
