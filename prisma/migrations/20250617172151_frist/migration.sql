-- CreateTable
CREATE TABLE "Court" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,

    CONSTRAINT "Court_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "courtId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_courtId_date_time_key" ON "Booking"("courtId", "date", "time");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_courtId_fkey" FOREIGN KEY ("courtId") REFERENCES "Court"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
