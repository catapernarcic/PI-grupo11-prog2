const data = {
    usuario: {
        email: "usuario@example.com",
        usuario: "UsuarioPrueba",
        contrasena: "123456",
        fechaNacimiento: "2000-05-31",
        nroDocumento: 12345678,
        fotoPerfil: ""
    },
    productos: [
        {
            id: 1,
            nombre: "Laptop Gamer X1",
            descripcion: "Potente laptop con procesador i7 y tarjeta gráfica RTX 3060.",
            imagen: "",
            comentarios: [
                { usuario: "Ana", texto: "¡Me encantó esta laptop!", fotoPerfil: "" },
                { usuario: "Carlos", texto: "Rinde muy bien para gaming.", fotoPerfil: "" },
                { usuario: "Luisa", texto: "Buena calidad-precio.", fotoPerfil: "" }
            ]
        },
        {
            id: 2,
            nombre: "Smartphone Pro 12",
            descripcion: "Pantalla OLED, cámara de 108MP y batería de 5000mAh.",
            imagen: "",
            comentarios: [
                { usuario: "Pedro", texto: "La cámara es increíble.", fotoPerfil: "" },
                { usuario: "María", texto: "Me dura todo el día la batería.", fotoPerfil: "" },
                { usuario: "Julián", texto: "Buena alternativa a los de gama alta.", fotoPerfil: "" }
            ]
        },
        {
            id: 3,
            nombre: "Auriculares Inalámbricos Z3",
            descripcion: "Cancelación de ruido y sonido envolvente.",
            imagen: "",
            comentarios: [
                { usuario: "Dani", texto: "Se escuchan genial.", fotoPerfil: "" },
                { usuario: "Sofía", texto: "Son súper cómodos.", fotoPerfil: "" },
                { usuario: "Lucas", texto: "Buena autonomía de batería.", fotoPerfil: "" }
            ]
        },
        {
            id: 4,
            nombre: "Airpods Apple",
            descripcion: "Auriculares inalambricos por bluetooth",
            imagen: "",
            comentarios: [
                { usuario: "Teo", texto: "Muy comods", fotoPerfil: "" },
                { usuario: "Cata", texto: "Faciles de transportar", fotoPerfil: "" },
                { usuario: "Clemen", texto: "Muy lindos.", fotoPerfil: "" }
            ]
        }
    ]
};

module.exports = data;
