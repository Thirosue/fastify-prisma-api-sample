-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT NOT NULL DEFAULT E'admin',
    "updateAt" TIMESTAMPTZ NOT NULL,
    "updateBy" TEXT NOT NULL DEFAULT E'admin',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resavation" (
    "id" SERIAL NOT NULL,
    "at" BIGINT NOT NULL,
    "stock" INTEGER NOT NULL,
    "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT NOT NULL DEFAULT E'admin',
    "updateAt" TIMESTAMPTZ NOT NULL,
    "updateBy" TEXT NOT NULL DEFAULT E'admin',
    "version" INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResavationRecord" (
    "id" SERIAL NOT NULL,
    "at" BIGINT NOT NULL,
    "userId" INTEGER,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createBy" TEXT NOT NULL DEFAULT E'admin',
    "updateAt" TIMESTAMPTZ NOT NULL,
    "updateBy" TEXT NOT NULL DEFAULT E'admin',
    "version" INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resavation.at_unique" ON "Resavation"("at");

-- CreateIndex
CREATE INDEX "ResavationRecord.at_available_index" ON "ResavationRecord"("at", "available");

-- AddForeignKey
ALTER TABLE "ResavationRecord" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
