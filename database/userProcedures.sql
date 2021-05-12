DROP PROCEDURE IF EXISTS `addUser`;

DELIMITER $$
USE `StockApp`$$
CREATE PROCEDURE `addUser`(IN email VARCHAR(100), IN phoneNumber VARCHAR(40))
BEGIN
	
   INSERT INTO `StockApp`.`Users` (`email`,  `phoneNumber`) 
   VALUES (email, phoneNumber);
      
END $$

DELIMITER ;