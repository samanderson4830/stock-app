DROP SCHEMA IF EXISTS StockApp;
CREATE SCHEMA StockApp;
USE `StockApp`;

# reset tables 
DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS `WatchList`;

CREATE TABLE IF NOT EXISTS `StockApp`.`Users` 
(
  `userID`       INT NOT NULL AUTO_INCREMENT UNIQUE,
	`email`        VARCHAR(100) NOT NULL UNIQUE,
	`phoneNumber`  VARCHAR(40),
	`dateTime`     TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP, 
	PRIMARY KEY (`userID`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `StockApp`.`WatchList` 
(
	`watchID`       INT NOT NULL AUTO_INCREMENT UNIQUE,
	`userID`		    INT,
	`tickerSymbol`  VARCHAR(9) NOT NULL,
	`dateTime`      TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP, 
	PRIMARY KEY (`userID`),
	CONSTRAINT `userFK` FOREIGN KEY (`userID`) REFERENCES Users (`userID`) ON UPDATE CASCADE
) ENGINE = InnoDB;