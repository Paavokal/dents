--
-- Database: `dents`
--

-- --------------------------------------------------------

--
-- Rakenne taululle `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `productcode` varchar(20) NOT NULL,
  `productname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci NOT NULL,
  `energy` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vedos taulusta `product`
--

INSERT INTO `product` (`id`, `productcode`, `productname`, `energy`, `weight`) VALUES
(10001, '6420256012918', 'Läkerol Dents Liquorice vanilla 85g', 282, 85),
(10002, '6420256012901', 'Läkerol Dents Strawberry Cream 85g', 280, 85),
(10003, '6420256013830', 'Läkerol Dents Pear Banana 85g', 282, 85),
(10004, '6420256016299', 'Läkerol Dents Sweet Mango 85g', 273, 85),
(10005, '6420256014530', 'Läkerol Dents Rasperry Lemongrass 85g', 268, 85),
(10006, '6420256001547', 'Läkerol Dents Lemon 36g', 276, 36),
(10007, '6420256001523', 'Läkerol Dents Menthol 36g', 277, 36),
(10008, '6420256002131', 'Läkerol Dents Sweetmint 36g', 280, 36),
(10009, '6420256012512', 'Läkerol Dents Apple Fresh White 36g', 276, 36);

-- --------------------------------------------------------

--
-- Rakenne taululle `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Vedos taulusta `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'demo', 'demo'),
(2, 'paavo', 'paavo'),
(9999, 'admin', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `productcode` (`productcode`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10020;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10002;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
