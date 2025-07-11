-- CreateTable
CREATE TABLE "EducationalInstitution" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EducationalInstitution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EducationalInstitution" ADD CONSTRAINT "EducationalInstitution_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
