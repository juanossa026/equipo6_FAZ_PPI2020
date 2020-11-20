DROP TABLE IF EXISTS tbl_recordatorio;
DROP TABLE IF EXISTS tbl_control;
DROP TABLE IF EXISTS tbl_identificacion;


CREATE TABLE IF NOT EXISTS tbl_identificacion (
  documento varchar(10) NOT NULL,
  nombre_usuario varchar(50) NOT NULL,
  correo_ele varchar(60) NOT NULL,
  contraseña varchar(20) NOT NULL,
  PRIMARY KEY (documento)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table tbl_identicacion
--

INSERT INTO tbl_identificacion (nombre_usuario, documento, correo_ele, contraseña) VALUES
( 'mrjuanossa26', '2222222222', 'cualquier@gmail.com', 'juan333333'),
( 'mrjuanossa26', '1111111111', 'ossacamilo26@gmail.com', 'camilo12345');



CREATE TABLE IF NOT EXISTS tbl_control (
  cons int(10) NOT NULL AUTO_INCREMENT,
    documento varchar(10) NOT NULL,
  descripcion varchar(80) NOT NULL,
  cantidad_m varchar(60)  NOT NULL,
  medicamento varchar(50) NOT NULL,
  fecha_sys timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (cons),
  FOREIGN KEY (documento) REFERENCES tbl_identificacion (documento)
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `tbl_recordatorio` (
  `id_alarma` int(10) NOT NULL,
  `cons_control` int(10) NOT NULL,
  `alarma_p` varchar(20) NOT NULL,
  `tipo_alarma` varchar(40) NOT NULL,
  `hora` time NOT NULL DEFAULT '00:00:24',
  PRIMARY KEY (id_alarma),
  FOREIGN KEY (cons_control) REFERENCES tbl_control (cons)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


