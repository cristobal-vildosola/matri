const { createApp } = Vue;

const precios = [15, 25, 35, 50, 65, 80, 100, 125, 150, 180, 250];

createApp({
  data() {
    return {
      regalos: [
        { nombre: "Salir a Tomar Cafecito", foto: "cafecito.jpg" },
        { nombre: "un Juego de Mesa", foto: "juego.jpg" },
        { nombre: "Salir a un Bar", foto: "bar2.jpg" },
        { nombre: "un Vinilo", foto: "vinilo.jpg" },
        { nombre: "Poleras a Juego", foto: "poleras2.jpg" },
        { nombre: "Salida en Kayak", foto: "kayak.jpg" },
        { nombre: "Afinar el piano", foto: "piano.jpg" },
        { nombre: "Entradas al Teatro Municipal", foto: "teatro.jpg" },
        { nombre: "una Ida a las Termas", foto: "termas.jpg" },
        { nombre: "Mueble Antiguo para Restaurar", foto: "buffet.jpg" },
        { nombre: "una Noche en Venecia", foto: "venecia.jpg" },
      ].map((x, i) => ({ ...x, precio: precios[i] * 1000, elegido: false })),
    };
  },

  computed: {
    total() {
      return this.regalos.filter((r) => r.elegido).reduce((acc, r) => acc + r.precio, 0);
    },

    mensaje() {
      const elegidos = this.regalos.filter((r) => r.elegido).map((r) => r.nombre);
      if (elegidos.length == 0) return "Elije uno (o más 👀) regalos!";

      let regalos;
      if (elegidos.length == 1) regalos = elegidos[0];
      else regalos = `${elegidos.slice(0, -1).join(", ")} y ${elegidos.at(-1)}`;

      return `Holii!\nles regalamos ${regalos} por su matrimonio ❤️`;
    },
  },

  methods: {
    hora() {
      const d = new Date();
      return d.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    },

    copyToClipboard() {
      navigator.clipboard.writeText(`Cristobal Muñoz
19.243.515-3
Banco de Chile
Cuenta Corriente
008010482507
cristobal.vildosola@gmail.com`);
    },
  },
}).mount("#app");
