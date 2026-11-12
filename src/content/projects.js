// Project registry. Add an object here and it appears on /projects
// and gets its own detail page at /projects/<slug>.

export const projects = [
  {
    slug: "bms-rsud-ciawi",
    index: "01",
    title: "Building Management System",
    subtitle: "RSUD Ciawi",
    status: "In Development",
    stack: ["ESP32", "MQTT", "EMQX", "Node-RED", "Grafana"],
    summary:
      "Monitoring dan integrasi data perangkat untuk kebutuhan Building Management System di RSUD Ciawi.",
    sections: {
      overview:
        "Sistem monitoring terdistribusi yang mengumpulkan data perangkat melalui ESP32, meneruskannya lewat broker MQTT, lalu memvisualisasikannya pada dashboard Grafana. Node-RED dipakai sebagai lapisan orkestrasi dan transformasi data.",
      problem:
        "Data perangkat tersebar pada banyak titik tanpa satu sumber kebenaran, sehingga pemantauan kondisi ruang dan peralatan bergantung pada pengecekan manual.",
      architecture: [
        "ESP32 sebagai node sensor/aktuator pada tiap titik",
        "MQTT publish ke broker EMQX",
        "Node-RED menormalkan payload dan mengarahkan aliran data",
        "Grafana menyajikan dashboard historis dan near-real-time",
      ],
      hardware: ["ESP32", "Sensor modul (menyesuaikan titik ukur)", "Jaringan lokal RS"],
      software: ["EMQX", "Node-RED", "Grafana", "MQTT protocol"],
      process: [
        "Identifikasi titik ukur dan kebutuhan data",
        "Setup broker EMQX dan topik MQTT",
        "Firmware ESP32: pembacaan sensor dan publikasi periodik",
        "Node-RED: parsing, normalisasi, routing",
        "Grafana: panel, alerting, dan histori",
      ],
      results: [
        "Aliran data end-to-end dari node ke dashboard berjalan",
        "Payload ternormalisasi sehingga menambah titik baru tidak mengubah dashboard",
        "Masih tahap pengembangan: penambahan titik ukur dan pengujian lapangan",
      ],
      repo: "",
    },
  },
  {
    slug: "arduino-openplc",
    index: "02",
    title: "Arduino & OpenPLC Integration",
    subtitle: "Microcontroller meets PLC runtime",
    status: "Experimentation",
    stack: ["Arduino", "OpenPLC Runtime", "OPC UA"],
    summary:
      "Eksperimen integrasi digital input/output mikrokontroler dengan lingkungan PLC.",
    sections: {
      overview:
        "Menguji sejauh mana mikrokontroler kelas Arduino dapat dipakai sebagai I/O remote pada runtime OpenPLC, dengan OPC UA sebagai jalur pertukaran data.",
      problem:
        "Perangkat PLC komersial mahal dan tertutup; alternatif open-source membutuhkan pemahaman bagaimana I/O fisik dipetakan ke logika ladder.",
      architecture: [
        "Arduino membaca digital input dan menggerakkan output",
        "OpenPLC Runtime menjalankan program ladder",
        "OPC UA menjadi jembatan antara runtime dan node I/O",
      ],
      hardware: ["Arduino board", "Push button / switch", "LED & relay indikator"],
      software: ["OpenPLC Runtime", "Ladder Logic", "OPC UA"],
      process: [
        "Wiring I/O dasar pada board",
        "Konfigurasi pin mapping pada runtime",
        "Menulis program ladder uji (logika AND/OR, latch)",
        "Verifikasi state I/O terhadap kondisi fisik",
      ],
      results: [
        "Logika ladder berhasil mengendalikan output fisik",
        "Pemetaan pin terdokumentasi untuk eksperimen lanjutan",
        "Eksperimen masih berjalan: target berikutnya modbus/OPC UA end-to-end",
      ],
      repo: "",
    },
  },
  {
    slug: "embedded-sensor-monitoring",
    index: "03",
    title: "Embedded Systems & Sensor Monitoring",
    subtitle: "Acquisition and data pipeline",
    status: "Project Archive",
    stack: ["ESP32", "Arduino", "Sensors", "MQTT"],
    summary:
      "Eksperimen pembacaan sensor, pengolahan data, dan komunikasi perangkat.",
    sections: {
      overview:
        "Kumpulan eksperimen akuisisi data sensor: dari pembacaan mentah, kalibrasi sederhana, hingga pengiriman data ke subscriber melalui MQTT.",
      problem:
        "Sensor mentah sering noisy dan tidak siap dipakai; dibutuhkan pipeline yang jelas dari sampling sampai data layak tampil.",
      architecture: [
        "Sensor membaca besaran fisik",
        "Mikrokontroler melakukan sampling dan filtering",
        "Payload JSON dikirim lewat MQTT",
        "Subscriber melakukan logging dan visualisasi",
      ],
      hardware: ["ESP32", "HC-SR04 ultrasonic range sensor", "Sensor suhu/kelembapan"],
      software: ["Arduino IDE", "MQTT client", "Node-RED subscriber"],
      process: [
        "Kalibrasi sensor dan penentuan interval sampling",
        "Implementasi moving average untuk meredam noise",
        "Format payload JSON dan penentuan topik",
        "Uji keandalan pengiriman pada koneksi tidak stabil",
      ],
      results: [
        "Data sensor terbaca konsisten setelah filtering",
        "Payload JSON terstruktur dan mudah dikonsumsi dashboard",
        "Arsip eksperimen menjadi dasar proyek BMS",
      ],
      repo: "",
    },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export default projects;
