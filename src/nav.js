export const NAV = [
  {
    label: 'Hardware',
    sections: [
      {
        label: 'Platforms',
        articles: [
          { label: 'ESP-32 Boards',    path: '/hardware/platforms/esp-32-boards.md' },
          { label: 'ESP-8266 Boards',  path: '/hardware/platforms/esp-8266-boards.md' },
          { label: 'Pi Zero Boards',   path: '/hardware/platforms/pi-zero-boards.md' },
          { label: 'ATmega328 Boards', path: '/hardware/platforms/atmega328-boards.md' },
        ],
      },
      {
        label: 'Interfaces',
        articles: [
          { label: 'Signal Types: Analog & Digital', path: '/hardware/interfaces/signal-types-analog-and-digital.md' },
          { label: 'Serial Communications',          path: '/hardware/interfaces/serial-communications.md' },
          { label: 'Wireless (WiFi, BT, LoRa)',      path: '/hardware/interfaces/wireless-wifi-bluetooth-lora.md' },
          { label: 'Pin Connectors',                 path: '/hardware/interfaces/pin-connectors.md' },
          { label: 'Wire Connections',               path: '/hardware/interfaces/wire-connections.md' },
          { label: 'Media Interfaces',               path: '/hardware/interfaces/media-interfaces.md' },
          { label: 'Light Emitting Diodes',          path: '/hardware/interfaces/light-emitting-diodes.md' },
        ],
      },
      {
        label: 'Sensors',
        articles: [
          { label: 'SCD-41: CO₂, Temp & Humidity',  path: '/hardware/sensors/scd-41-co2-temp-humidity.md' },
          { label: 'BMP-280: Atmospheric Pressure',  path: '/hardware/sensors/bmp-280-atmospheric-pressure.md' },
          { label: 'TCS-34725: RGB Color',           path: '/hardware/sensors/tcs-34725-rgb-color.md' },
          { label: 'VEML-7700: Visible Light',       path: '/hardware/sensors/veml-7700-visible-light.md' },
          { label: 'GUVA-S12SD: UV Light',           path: '/hardware/sensors/guva-s12sd-uv-light.md' },
          { label: 'SPS-30: Particulate Matter',     path: '/hardware/sensors/sps-30-particulate-matter.md' },
          { label: 'MQ-135: Volatile Gases',         path: '/hardware/sensors/mq-135-volatile-gasses.md' },
          { label: 'OV-5647: Pi Camera',             path: '/hardware/sensors/ov-5647-pi-camera.md' },
          { label: 'OV-2640: ESP32 Camera',          path: '/hardware/sensors/ov-2640-esp32-camera.md' },
        ],
      },
    ],
  },
  {
    label: 'Concepts',
    sections: [
      {
        label: 'Computer Science',
        articles: [
          { label: 'Checksums',        path: '/concepts/computer-science/checksums.md' },
          { label: 'Operating Systems',path: '/concepts/computer-science/operating-systems.md' },
          { label: 'UART & USART',     path: '/concepts/computer-science/uart-usart.md' },
          { label: 'Surveillance',     path: '/concepts/computer-science/surveillance.md' },
        ],
      },
      {
        label: 'Physics & Chemistry',
        articles: [
          { label: 'Volatility', path: '/concepts/physics-chemistry/volatility.md' },
        ],
      },
    ],
  },
];

export const DEFAULT_ARTICLE = NAV[0].sections[0].articles[0];
