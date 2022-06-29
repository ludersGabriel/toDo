/*
  Warnings:

  - A unique constraint covering the columns `[id,ownerId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Project_id_ownerId_key" ON "Project"("id", "ownerId");
