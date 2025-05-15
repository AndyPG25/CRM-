-- CreateTable
CREATE TABLE "InfoInicio" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "vision" TEXT NOT NULL,
    "mision" TEXT NOT NULL,
    "valores" TEXT NOT NULL,
    "nosotros" TEXT NOT NULL,
    "organigrama" TEXT NOT NULL,

    CONSTRAINT "InfoInicio_pkey" PRIMARY KEY ("id")
);
