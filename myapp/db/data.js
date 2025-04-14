const data = {
    usuario: {
        email: "usuario@example.com",
        usuario: "UsuarioPrueba",
        contrasena: "123456",
        fechaNacimiento: "2000-05-31",
        nroDocumento: 12345678,
        fotoPerfil: "/images/users/fotoperfil.png"
    },
    productos: [
        {
            id: 1,
            nombre: "Laptop Gamer X1",
            descripcion: "Potente laptop con procesador i7 y tarjeta gráfica RTX 3060.",
            imagen: "/images/products/05dhzg0lrtq4i0d3wxqyjjakwmbmzr331426.png.avif",
            comentarios: [
                { usuario: "Ana", texto: "¡Me encantó esta laptop!", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Carlos", texto: "Rinde muy bien para gaming.", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Luisa", texto: "Buena calidad-precio.", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 2,
            nombre: "Smartphone Pro 12",
            descripcion: "Pantalla OLED, cámara de 108MP y batería de 5000mAh.",
            imagen: "/images/products/img-samsung-galaxy-s10.jpg",
            comentarios: [
                { usuario: "Pedro", texto: "La cámara es increíble.", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "María", texto: "Me dura todo el día la batería.", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Julián", texto: "Buena alternativa a los de gama alta.", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 3,
            nombre: "Auriculares Inalámbricos Z3",
            descripcion: "Cancelación de ruido y sonido envolvente.",
            imagen: "/images/products/auricularesinalambricos.webp",
            comentarios: [
                { usuario: "Dani", texto: "Se escuchan genial.", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Sofía", texto: "Son súper cómodos.", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Lucas", texto: "Buena autonomía de batería.", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 4,
            nombre: "Airpods Apple",
            descripcion: "Auriculares inalambricos por bluetooth",
            imagen: "/images/products/airpods.jpg",
            comentarios: [
                { usuario: "Teo", texto: "Muy comods", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Cata", texto: "Faciles de transportar", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Clemen", texto: "Muy lindos.", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 5,
            nombre: "Smartwatch Galaxy Watch Active2",
            descripcion: "Un reloj inteligente con monitoreo de actividad y notificaciones.",
            imagen: "/images/products/smartwatchgalaxy.webp",
            comentarios: [
                { usuario: "Mar", texto: "Me encanta su diseño, aunque a veces se congela", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Lucia", texto: "Es practico, pero la bateria no dura tanto", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Valen", texto: "Es lindo y funcional, me re gusta", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 6,
            nombre: "Tablet iPad Air 2020",
            descripcion: "Tablet ligera y potente",
            imagen: "/images/products/ipadair.jpg",
            comentarios: [
                { usuario: "Ana", texto: "La pantalla es nítida, me encanta", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Cata", texto: "La bateria anda bien, pero se siente algo lenta en algunas apps", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Lola", texto: "Es buena para la facu y para divertirte, me gusta", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 7,
            nombre: "Auriculares inalámbricos Sony WF-1000XM4",
            descripcion: "Auriculares con cancelación de ruido, ideales para escuchar música sin distracciones.",
            imagen: "/images/products/auricularesinalambricosSony.jpg",
            comentarios: [
                { usuario: "Sofi", texto: "La calidad de sonido es increíble, aunque a veces se desconectan", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Rosa", texto: "Muy cómodos", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Ale", texto: "Buen producto", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 8,
            nombre: "Mouse Gamer Logitech G502",
            descripcion: "Un mouse personalizable para gamers, con alta precisión y botones programables.",
            imagen: "/images/products/mousegamer.jpg",
            comentarios: [
                { usuario: "Juan", texto: "Lo uso y me encanta la respuesta", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Mica", texto: "Buen mouse", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Julieta", texto: "Es practico y se siente muy bien en la mano, lo recomiendo", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 9,
            nombre: "Teclado mecánico Razer BlackWidow",
            descripcion: "Teclado con switches mecánicos veloces, excelente para escribir y jugar.",
            imagen: "/images/products/teclado.webp",
            comentarios: [
                { usuario: "Paula", texto: "Me encanta el sonido de las teclas", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Isa", texto: "Buen teclado, aunque a veces es medio ruidoso", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Leo", texto: "super rápido y facil de usar, xD", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        },
        {
            id: 10,
            nombre: "Monitor LED LG UltraWide 27\"",
            descripcion: "Monitor ultra ancho ideal para multitarea y diseño.",
            imagen: "/images/products/medium01.jpg.avif",
            comentarios: [
                { usuario: "Mateo", texto: "La calidad de imagen es buena, me encanta como amplía la pantalla", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Tomas", texto: "Es genial para editar fotos y videos", fotoPerfil: "/images/users/fotoperfil.png" },
                { usuario: "Sol", texto: "Buen monitor, pero ojalá tuviera más puertos", fotoPerfil: "/images/users/fotoperfil.png" }
            ]
        }
    ]
};

module.exports = data;
