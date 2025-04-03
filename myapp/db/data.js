const data = {
    usuario: {
        email: "usuario@example.com",
        usuario: "UsuarioPrueba",
        contrasena: "123456",
        fechaNacimiento: "2000-05-15",
        nroDocumento: 12345678,
        fotoPerfil: "/images/usuario.jpg"
    },
    productos: [
        {
            id: 1,
            nombre: "Laptop Gamer X1",
            descripcion: "Potente laptop con procesador i7 y tarjeta gráfica RTX 3060.",
            imagen: "/images/laptop.jpg",
            comentarios: [
                { usuario: "Ana", texto: "¡Me encantó esta laptop!", fotoPerfil: "/images/ana.jpg" },
                { usuario: "Carlos", texto: "Rinde muy bien para gaming.", fotoPerfil: "/images/carlos.jpg" },
                { usuario: "Luisa", texto: "Buena calidad-precio.", fotoPerfil: "/images/luisa.jpg" }
            ]
        },
        {
            id: 2,
            nombre: "Smartphone Pro 12",
            descripcion: "Pantalla OLED, cámara de 108MP y batería de 5000mAh.",
            imagen: "/images/smartphone.jpg",
            comentarios: [
                { usuario: "Pedro", texto: "La cámara es increíble.", fotoPerfil: "/images/pedro.jpg" },
                { usuario: "María", texto: "Me dura todo el día la batería.", fotoPerfil: "/images/maria.jpg" },
                { usuario: "Julián", texto: "Buena alternativa a los de gama alta.", fotoPerfil: "/images/julian.jpg" }
            ]
        },
        {
            id: 3,
            nombre: "Auriculares Inalámbricos Z3",
            descripcion: "Cancelación de ruido y sonido envolvente.",
            imagen: "/images/auriculares.jpg",
            comentarios: [
                { usuario: "Dani", texto: "Se escuchan genial.", fotoPerfil: "/images/dani.jpg" },
                { usuario: "Sofía", texto: "Son súper cómodos.", fotoPerfil: "/images/sofia.jpg" },
                { usuario: "Lucas", texto: "Buena autonomía de batería.", fotoPerfil: "/images/lucas.jpg" }
            ]
        }
    ]
};

module.exports = data;
