const { createApp } = Vue;

createApp({
  data() {
    return {
      regalos: [
        { nombre: "Salida a Tomar Cafecito", precio: 15 },
        { nombre: "Un Juego de Mesa", precio: 25 },
        { nombre: "Madera para Muebles", precio: 35 },
        { nombre: "Un Vinilo", precio: 50 },
        { nombre: "Ida al Teatro Municipal", precio: 65 },
        { nombre: "Afinar el piano", precio: 80 },
        { nombre: "Ida a las Termas", precio: 100 },
        { nombre: "", precio: 125 },
        { nombre: "", precio: 150 },
        { nombre: "", precio: 180 },
        { nombre: "", precio: 250 },
      ],
    };
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
