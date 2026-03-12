const { createApp } = Vue;

createApp({
  data() {
    return {
      regalos: [
        { nombre: "una Salida a Tomar Cafecito", precio: 15, elegido: false },
        { nombre: "un Juego de Mesa", precio: 25, elegido: false },
        { nombre: "Madera para Muebles", precio: 35, elegido: false },
        { nombre: "un Vinilo", precio: 50, elegido: false },
        { nombre: "una Ida al Teatro Municipal", precio: 65, elegido: false },
        { nombre: "Afinar el piano", precio: 80, elegido: false },
        { nombre: "una Ida a las Termas", precio: 100, elegido: false },
        { nombre: "x", precio: 125, elegido: false },
        { nombre: "x", precio: 150, elegido: false },
        { nombre: "x", precio: 180, elegido: false },
        { nombre: "x", precio: 250, elegido: false },
      ],
    };
  },

  computed: {
    total() {
      return this.regalos.filter((r) => r.elegido).reduce((acc, r) => acc + r.precio, 0);
    },

    hora() {
      const d = new Date();
      return d.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
    },

    mensaje() {
      const elegidos = this.regalos.filter((r) => r.elegido).map((r) => r.nombre);
      if (elegidos.length == 0) return "Elije tus regalos!";

      let regalos;
      if (elegidos.length == 1) regalos = elegidos[0];
      else regalos = `${elegidos.slice(0, -1).join(", ")} y ${elegidos.at(-1)}`;

      return `Holiii!\nles regalamos ${regalos} por su matrimonio ❤️`;
    },
  },

  methods: {
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
