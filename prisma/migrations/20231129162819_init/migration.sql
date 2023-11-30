-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `openid` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `remainRollCount` INTEGER NOT NULL DEFAULT 0,
    `lastLoginTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalRollCount` INTEGER NOT NULL DEFAULT 0,
    `totalLikeCount` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `User_openid_key`(`openid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
