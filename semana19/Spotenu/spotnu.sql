use sagan_dennis_db;
CREATE TABLE `user_spotnu` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `descripition` varchar(255),
  `approbation` boolean NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
CREATE TABLE `genre_spotnu` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);