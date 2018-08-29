-- JOS RIJESITI PHOTO ZBO BASE64
-- ROUTES TABELA 
CREATE TABLE `routes` (
  `routeID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `grade` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gymID` int(11) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- GYMS TABELA 

CREATE TABLE `gyms` (
  `gymID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


