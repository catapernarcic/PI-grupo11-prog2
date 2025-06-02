CREATE SCHEMA maquitec; 
USE maquitec;

-- crear tabla usuarios 

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY auto_increment,
  email VARCHAR(500) NOT NULL,
  contrasena VARCHAR(500) NOT NULL,
  fechaNacimiento DATE NOT NULL,
  dni INT NOT NULL,
  fotoPerfil VARCHAR(500),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

-- crear tabla de productos 

CREATE TABLE productos (
  id INT unsigned PRIMARY KEY,
  usuarioId INT UNSIGNED NOT NULL,
  imagen VARCHAR(500),
  nombre VARCHAR(500),
  descripcion TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
); 

-- modificacion porque me olvide de poner auto increment en productos 

ALTER TABLE productos MODIFY id INT UNSIGNED AUTO_INCREMENT;

-- crear tabla comentarios
CREATE TABLE comentarios (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  productoId INT UNSIGNED  NOT NULL,
  usuarioId INT UNSIGNED  NOT NULL,
  texto TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (productoId) REFERENCES productos(id),
  FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);


-- insertar mis datos en las tablas

INSERT INTO usuarios (email, contrasena, fechaNacimiento, dni, fotoPerfil) VALUES
('ana@gmail.com', '12354', '2000-01-01', 12345678, 'fotoperfil.png'),
('carlos@hotmail.com', '23456', '1995-06-15', 23456789, 'fotoperfil.png'),
('luisa@gmail.com', '34567', '1990-10-30', 34567890, 'fotoperfil.png'),
('teo@udesa.edu.ar', '45678', '1998-12-12', 45678901, 'fotoperfil.png'),
('cata@udesa.edu.ar', '56789', '1997-04-25', 56789012, 'fotoperfil.png');

INSERT INTO productos (usuarioId, imagen, nombre, descripcion) VALUES
(1, 'laptop.jpg', 'Laptop Gamer X1', 'Potente laptop con procesador i7 y tarjeta gráfica RTX 3060.'),
(2, 'smartphone.jpg', 'Smartphone Pro 12', 'Pantalla OLED, cámara de 108MP y batería de 5000mAh.'),
(3, 'auriculares.jpg', 'Auriculares Inalámbricos Z3', 'Cancelación de ruido y sonido envolvente.'),
(4, 'airpods.jpg', 'Airpods Apple', 'Auriculares inalambricos por bluetooth'),
(5, 'reloj.jpg', 'Smartwatch Galaxy Watch Active2', 'Reloj con monitoreo de actividad.'),
(1, 'tablet.jpg', 'Tablet iPad Air 2020', 'Tablet ligera y potente.'),
(2, 'sony.jpg', 'Auriculares Sony WF-1000XM4', 'Calidad de sonido profesional.'),
(3, 'mouse.jpg', 'Mouse Logitech G502', 'Alta precisión, botones programables.'),
(4, 'teclado.jpg', 'Teclado Razer BlackWidow', 'Switches mecánicos veloces.'),
(5, 'monitor.jpg', 'Monitor LG UltraWide', 'Ideal para diseño y multitarea.');

INSERT INTO comentarios (productoId, usuarioId, texto) VALUES
(1, 2, '¡Me encantó esta laptop!'),
(1, 3, 'Rinde muy bien para gaming.'),
(1, 4, 'Buena calidad-precio.');