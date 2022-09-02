-- phpMyAdmin SQL Dump
-- version 5.0.4deb2+deb11u1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 02.09.2022 klo 10:36
-- Palvelimen versio: 10.5.15-MariaDB-0+deb11u1
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dents`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productcode` varchar(20) NOT NULL,
  `productname` varchar(255) NOT NULL,
  `energy` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vedos taulusta `products`
--

INSERT INTO `products` (`id`, `productcode`, `productname`, `energy`, `weight`) VALUES
(10001, '6420256012918', 'Läkerol Dents Liquorice vanilla 85g', 282, 85),
(10002, '6420256012901', 'Läkerol Dents Strawberry Cream 85g', 280, 85),
(10003, '6420256013830', 'Läkerol Dents Pear Banana 85g', 282, 85),
(10004, '6420256016299', 'Läkerol Dents Sweet Mango 85g', 273, 85),
(10005, '6420256014530', 'Läkerol Dents Rasperry Lemongrass 85g', 268, 85),
(10006, '6420256001547', 'Läkerol Dents Lemon 36g', 276, 36),
(10007, '6420256001523', 'Läkerol Dents Menthol 36g', 277, 36),
(10008, '6420256002131', 'Läkerol Dents Sweetmint 36g', 280, 36),
(10009, '6420256012512', 'Läkerol Dents Apple Fresh White 36g', 276, 36);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10010;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
