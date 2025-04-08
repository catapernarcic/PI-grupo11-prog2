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
        },
        {
            id: 5,
            nombre: "Smartwatch Galaxy Watch Active2",
            descripcion: "Un reloj inteligente con monitoreo de actividad y notificaciones.",
            imagen: "",
            comentarios: [
                { usuario: "Mar", texto: "Me encanta su diseño, aunque a veces se congela", fotoPerfil: "" },
                { usuario: "Lucia", texto: "Es practico, pero la bateria no dura tanto", fotoPerfil: "" },
                { usuario: "Valen", texto: "Es lindo y funcional, me re gusta", fotoPerfil: "" }
            ]
        },
        {
            id: 6,
            nombre: "Tablet iPad Air 2020",
            descripcion: "Tablet ligera y potente",
            imagen: "",
            comentarios: [
                { usuario: "Ana", texto: "La pantalla es nítida, me encanta", fotoPerfil: "" },
                { usuario: "Cata", texto: "La bateria anda bien, pero se siente algo lenta en algunas apps", fotoPerfil: "" },
                { usuario: "Lola", texto: "Es buena para la facu y para divertirte, me gusta", fotoPerfil: "" }
            ]
        },
        {
            id: 7,
            nombre: "Auriculares inalámbricos Sony WF-1000XM4",
            descripcion: "Auriculares con cancelación de ruido, ideales para escuchar música sin distracciones.",
            imagen: "",
            comentarios: [
                { usuario: "Sofi", texto: "La calidad de sonido es increíble, aunque a veces se desconectan", fotoPerfil: "" },
                { usuario: "Rosa", texto: "Muy cómodos", fotoPerfil: "" },
                { usuario: "Ale", texto: "Buen producto", fotoPerfil: "" }
            ]
        },
        {
            id: 8,
            nombre: "Mouse Gamer Logitech G502",
            descripcion: "Un mouse personalizable para gamers, con alta precisión y botones programables.",
            imagen: "",
            comentarios: [
                { usuario: "Juan", texto: "Lo uso y me encanta la respuesta", fotoPerfil: "" },
                { usuario: "Mica", texto: "Buen mouse", fotoPerfil: "" },
                { usuario: "Julieta", texto: "Es practico y se siente muy bien en la mano, lo recomiendo", fotoPerfil: "" }
            ]
        },
        {
            id: 9,
            nombre: "Teclado mecánico Razer BlackWidow",
            descripcion: "Teclado con switches mecánicos veloces, excelente para escribir y jugar.",
            imagen: "",
            comentarios: [
                { usuario: "Paula", texto: "Me encanta el sonido de las teclas", fotoPerfil: "" },
                { usuario: "Isa", texto: "Buen teclado, aunque a veces es medio ruidoso", fotoPerfil: "" },
                { usuario: "Leo", texto: "super rápido y facil de usar, xD", fotoPerfil: "" }
            ]
        },
        {
            id: 10,
            nombre: "Monitor LED LG UltraWide 27\"",
            descripcion: "Monitor ultra ancho ideal para multitarea y diseño.",
            imagen: "",
            comentarios: [
                { usuario: "Mateo", texto: "La calidad de imagen es buena, me encanta como amplía la pantalla", fotoPerfil: "" },
                { usuario: "Tomas", texto: "Es genial para editar fotos y videos", fotoPerfil: "" },
                { usuario: "Sol", texto: "Buen monitor, pero ojalá tuviera más puertos", fotoPerfil: "" }
            ]
        }
    ]
};

module.exports = data;
