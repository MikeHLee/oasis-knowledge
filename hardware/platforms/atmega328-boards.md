# ATmega328 Boards

# Introduction:

The ATMEGA328PB is a high-performance, low-power microcontroller from Microchip Technology and the latest iteration of the venerated ATmega328 chip series. It is based on the AVR enhanced RISC architecture. The ATMEGA328PB is popular among makers due to its versatility, affordability, and the wide range of applications it can be used for; it is the core processor underlying many popular boards.

These platforms tend to be optimized for simple, dedicated tasks and real-time control, with limited processing power and memory. They are ideal for embedded systems and applications where low power consumption and cost are critical.

# Platforms:

Arduino Uno
​⁠⁠

The Arduino Uno is the most popular board based on the ATMEGA328PB. It is an open-source platform used for building electronics projects. The Uno board has 14 digital input/output pins, 6 analog inputs, a 16 MHz quartz crystal, a USB connection, and a power jack. Unlike a fully-fledged single-board-computer like the raspberry pi, the Uno does not come with built-in wifi capability and must interface with a PC via the serial port. All other interfacing must be done at the pin-level.

⁠Arduino Uno Setup guide⁠⁠

Arduino Nano 
​⁠⁠

The Arduino Nano is a small, complete, and breadboard-friendly board based on the ATmega328PB. It has similar functionalities to the Arduino Uno but in a smaller form factor, making it suitable for projects where space is a concern and a wireless connection is not required.

⁠Arduino Nano Setup Guide⁠⁠

Arduino RF-Nano
​⁠⁠

The Arduino RF-Nano is just like the Arduino Nano. It uses the same ATmega328PB chip, but the module includes a built-in WiFi transceiver. The regular Arduino Nano does not have this capability.

⁠Arduino RF Nano Setup Guide⁠⁠

# Working Principles

Here's a high-level explanation of how ATmega328P microcontrollers work, compared with fully-fledged computer boards like the Raspberry Pi:

1. Hardware Components:

- Processor: The ATmega328P is a microcontroller with an 8-bit AVR processor (aka MPU). It is designed for simple, dedicated tasks that need real-time control. In contrast, fully featured computers feature more powerful, multi-core processors (aka CPUs) capable of running complex applications and multitasking.
- Memory: The ATmega328P has limited onboard memory, with 2KB of SRAM and 32KB of flash memory for storing programs. Complete computers, on the other hand, includes significantly more RAM and uses external storage (microSD card) for the operating system and applications.
- Input/Output Interfaces: The ATmega328P provides a set of GPIO pins for interfacing with sensors and actuators, along with peripherals like timers and ADCs (Analog-to-Digital Converters). Computers provide similar I/O, but typically require additional peripherals for processing analog signals
2. Minimal “Operating System”:

- The ATmega328P does not run a full operating system. Instead, it executes firmware directly, typically written in C or C++, and uploaded via tools like the Arduino IDE. Most personal computers run a full operating system, such as MacOS or the Raspberry Pi OS, which manages hardware resources and provides a platform for running multiple applications.
3. Boot Process:

- Upon power-up, the ATmega328P immediately begins executing its firmware, which is stored in its flash memory. There is no bootloader or operating system involved. In contrast, a PC boot process involves initializing hardware and loading the operating system via the BIOS (Basic Input-Output System).
4. Software Execution:

- The ATmega328P executes a single program loop, designed for real-time control and simple tasks. It is ideal for applications like controlling LEDs, reading sensors, and managing motors. Unlike the Raspberry Pi, which can run multiple applications simultaneously thanks to its operating system and multitasking capabilities, any multitasking functionality on a microcontroller must be implemented in code from scratch
5. Networking and Communication:

- The ATmega328P does not have built-in networking capabilities. Communication with other devices is typically achieved through serial interfaces like UART, SPI, or I2C, or even a wireless adapter to add networking capabilities!
6. Interfacing with External Devices:

- The ATmega328P can interface with external devices through GPIO pins, just like the Raspberry Pi. However, the ATmega328P is often used for low-level hardware control and automation tasks due to its simplicity of operation and execution reliability. The additional processing power and connectivity options of single board computers are make them more suitable for complex projects such as running web servers or processing multimedia at the edge in robotics applications.
- The ATMega328P core can process analog (raw voltage) signals natively and without peripherals, which is still not possible for most PCs and single board computers on the market today.
# Chip Specs:

- - 32KB ISP flash memory, 1KB EEPROM, and 2KB SRAM.
- - 23 general purpose I/O lines.
- - 32 general purpose working registers.
- - Real Time Counter with separate oscillator.
- - Six PWM channels.
- - 8-channel 10-bit ADC.
- - Programmable Serial USART.
- - Master/Slave SPI serial interface.
- - Byte-oriented 2-wire serial interface (I2C).
- - On-chip analog comparator.
- - Interrupt and wake-up on pin change.
# Sources:

- ⁠https://www.mikrotronica.cc/pagina-del-producto/nano⁠⁠
- ⁠https://invize.se/produkt/arduino-uno/⁠⁠
- ⁠https://makerselectronics.com/product/arduino-rf-nano-integrated-with-nrf24l01-wireless-module⁠⁠
