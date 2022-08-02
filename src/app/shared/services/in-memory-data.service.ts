import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const pages = [
      {
        id: 1,
        name: "intro",
        tagline: "SUCCESS",
        title: "Te ayudamos a vender tu producto",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      },
      {
        id: 2,
        name: "clients",
        tagline: "TRUST",
        title: "Compañías que usan nuestros servicios",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      },
      {
        id: 3,
        name: "services",
        tagline: "CREYENDO",
        title: "Centrándonos en lo importante",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      },
      {
        id: 4,
        name: "testimonials",
        tagline: "FEEDBACK",
        title: "Lo que dicen nuestros clientes",
        description: "",
      },
      {
        id: 5,
        name: "pricing",
        tagline: "Tu elección",
        title: "Tenemos una oferta para ti",
        description: "",
      },
      {
        id: 6,
        name: "footer",
        tagline: "Hecho con ❤ por",
        developer: "Txema Serrano",
        developerlink: "andrewbateman.org",
      },
      {
        id: 7,
        name: "header",
        tagline: "Una página de inicio sencilla y gratutita",
        title:
          "Namari te proprociona soluciones gratuitas para el desarollo de tu web",
        buttontext: "Empieza el desarrollo",
        buttonlink: "/home",
        image: "banner-image-1.jpg",
      },
    ];
    const features = [
      {
        id: 1,
        icon: "html5",
        title: "HTML5 & CSS3",
        description:
          "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico",
      },
      {
        id: 2,
        icon: "bolt",
        title: "Easy to Use",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
      },
      {
        id: 3,
        icon: "tablet",
        title: "Fully Responsive",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
      },
      {
        id: 4,
        icon: "rocket",
        title: "Parallax Effect",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
      },
    ];
    const images = [
      { id: 1, name: "gallery-image-1.jpg" },
      { id: 2, name: "gallery-image-2.jpg" },
      { id: 3, name: "gallery-image-3.jpg" },
      { id: 4, name: "gallery-image-4.jpg" },
      { id: 5, name: "gallery-image-5.jpg" },
      { id: 6, name: "gallery-image-6.jpg" },
    ];
    const menu = [
      { id: 1, title: "Inicio", link: "/home"},
      { id: 2, title: "Acerca de", link: "/about"},
      { id: 3, title: "Servicios", link: "/services"},
      { id: 4, title: "Galería", link: "/gallery"},
      { id: 5, title: "Testimonios", link: "/testimonials"},
      { id: 6, title: "Clientes", link: "/clients"},
      { id: 7, title: "Precios", link: "/pricing"},
    ];
    const companies = [
      {
        id: 1,
        name: "Arbol",
        weblink: "company-logo1.png",
        logo: "company-logo1.png",
      },
      {
        id: 2,
        name: "Huella dactilar",
        weblink: "company-logo2.png",
        logo: "company-logo2.png",
      },
      {
        id: 3,
        name: "Comecocos",
        weblink: "company-logo3.png",
        logo: "company-logo3.png",
      },
      {
        id: 4,
        name: "Bigote",
        weblink: "company-logo4.png",
        logo: "company-logo4.png",
      },
      {
        id: 5,
        name: "Cabra",
        weblink: "company-logo5.png",
        logo: "company-logo5.png",
      },
      {
        id: 6,
        name: "Justicia",
        weblink: "company-logo6.png",
        logo: "company-logo6.png",
      },
      {
        id: 7,
        name: "Pelota",
        weblink: "company-logo7.png",
        logo: "company-logo7.png",
      },
      {
        id: 8,
        name: "Gafas",
        weblink: "company-logo8.png",
        logo: "company-logo8.png",
      },
      {
        id: 9,
        name: "Manzana",
        weblink: "company-logo9.png",
        logo: "company-logo9.png",
      },
    ];
    const feedback = [
      {
        id: 1,
        name: "John Doe",
        userimage: "user-1.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "ABC",
      },
      {
        id: 2,
        name: "Roslyn Doe",
        userimage: "user-2.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
      {
        id: 3,
        name: "Thomas Doe",
        userimage: "user-3.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
    ];
    const plans = [
      {
        id: 1,
        title: "PERSONAL",
        subtitle: "Plan estándar",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "19",
        currency: "$",
        downloads: "5 Descargas",
        extensions: "2 Extensiones",
        tutorials: "Tutoriales",
        support: "Foro de Consultas",
        updates: "Actualizaciones gratuitas un año",
        buttontext: "COMPRAR",
        buttonlink: "#",
        featured: false,
      },
      {
        id: 2,
        title: "ESTUDIANTE",
        subtitle: "Elección más popular",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "29",
        currency: "$",
        downloads: "15 Descargas",
        extensions: "5 Extensiones",
        tutorials: "Tutoriales con ficheros",
        support: "Foro de Consultas",
        updates: "Actualizaciones gratuitas dos años",
        buttontext: "COMPRAR",
        buttonlink: "#",
        featured: true,
      },
      {
        id: 3,
        title: "PROFESIONAL",
        subtitle: "La opción más completa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "49",
        currency: "$",
        downloads: "Descargas ilimitadas",
        extensions: "Descargas ilimitadas",
        tutorials: "Tutoriales en vídeos HD",
        support: "Chat para resolver dudas",
        updates: "Actualizaciones pra siempre",
        buttontext: "COMPRAR",
        buttonlink: "#",
        featured: false,
      },
    ];
    const websites = [
      {
        id: 1,
        link: "https://facebook.com/",
        title: "Facebook",
        target: "_blank",
        username: "Thor",
        icon: "facebook",
      },
      // {
      //   id: 2,
      //   link: "https://googleplus.com/",
      //   title: "Google+",
      //   target: "_blank",
      //   username: "+jagmohan",
      //   icon: "google-plus",
      // },
      {
        id: 3,
        link: "https://twitter.com/",
        title: "Twitter",
        target: "_blank",
        username: "joker",
        icon: "twitter",
      },
      {
        id: 4,
        link: "https://instagram.com/",
        title: "Instagram",
        target: "_blank",
        username: "superman",
        icon: "instagram",
      },
      // {
      //   id: 5,
      //   link: "https://behance.com/",
      //   title: "Behance",
      //   target: "_blank",
      //   username: "jagmohan",
      //   icon: "behance",
      // },
    ];

    return {
      menu,
      pages,
      features,
      images,
      companies,
      feedback,
      plans,
      websites,
    };
  }
}
