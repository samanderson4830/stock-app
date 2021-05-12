DROP PROCEDURE IF EXISTS `addTickerSymbol`;

DELIMITER $$
USE `StockApp`$$
CREATE PROCEDURE `addTickerSymbol`(IN tickerSymbol VARCHAR(9), IN userID INT)
BEGIN
	
   INSERT INTO `StockApp`.`Watchlist` (`tickerSymbol`, `userID`) 
   VALUES (tickerSymbol, userID);
      
END $$

DELIMITER ;