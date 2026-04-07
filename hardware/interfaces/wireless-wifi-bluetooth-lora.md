# Wireless (WiFi, Bluetooth, LoRa)

Our world is built around commonly developed wireless standards that have been developed from the bottom up. These are support by commonly adopted standards support by the Institute of Electrical and Electronics Engineers, or I.E.E.E., and the International Telecommunications Union, I.TU. Each of these standards is licensed and maintained by a specific working group (Bluetooth Special Interests Group, Wi-Fi Alliance).

Bluetooth

Bluetooth is a communications protocol for devices that are close together and require low levels of power. The protocol was completed by 1994, and the first device using Bluetooth was released in 1999. Bluetooth’s name was inspired by the legacy of the Danish king Harald Bluetooth, and the symbol for the system became Harald’s rune signature. This wire-replacement protocol has fully lived up to Bluetooth’s legacy; it is the dominant means of device to device communication today. It has been codified under IEEE 802.15, but the standard is no longer actively maintained. Instead, devices must meet the SIG qualification standards. The most current protocol is Bluetooth 6.0.

Bluetooth operates around 2.40 GHz, and uses a technique called frequency hopping spread spectrum to minimize interference. In FHSS, the transmitter and receiver each switch the radio frequency that they are using in a preset pattern. Since the frequency is changing, interference will not block the entire signal. Each system uses a conventional master/slave setup and exchanges packets in turn to share information. A device must be able to use a ‘profile’ for a specific application in order to use Bluetooth. Network sizes can be expanded by combining multiple Bluetooth transceivers together.

There is also a specialized, highly efficient format: Bluetooth Low Energy. This format uses fewer immediate FHSS channels, and a simpler switching method. Some devices using this technique can operate for years on a button cell battery, and power consumption can range down to one watt. Low Power debuted in 2014, and been in use for 10 years in specialized applications such as medical monitors and security systems. Without Bluetooth, the world would still anchored to dongles.

Wifi

WiFi isn’t one protocol, it’s several coexisting protocols all under IEEE 802.11. The WiFi Alliance issues ‘WiFi Certification’ verifications to devices that pass it’s interoperability testing-and interoperability is what WiFi is all about. WiFi networks typically are ad-hoc systems, limited by line of sight obstacles. Wifi routers operate in the 2.4 and 5 GHz bands, and they often include an external ‘subscriber line’ to provide full internet access. Where Bluetooth connects individual devices to each other, Wifi connects devices to the wider internet, although WiFi also has local inafrstructure mode to directly connect devices.

At it’s core, WiFi protocols are centered on moving packets around local networks. Stations use multiple channels to move packets, dedicating specific channels to be send only or receive only-a half-duplex setup. WiFi stations come with their own unique MAC address, allowing packets to be quickly routed to their destination. Multiple processes have been developed to enable these devices to work easily together, including carrier-sense multiple access with collision avoidance-CSMA/CA. This process has the stations coordinate their idle periods to not slam their transmissions into each other. WiFi as a standard went public in 1999, and multiple iterations followed. Just as Bluetooth links devices to each other over the air, WiFi nodes tie devices to the internet.

LoRa Communication

LoRa, or ‘Long Range’ is a protocol with a more blurred history. While it was originally developed by Cycleo in 2014, and was kept proprietary by Semtech, who bought Cycleo. However, an open source protocol, LoRaWAN-Long Range Wide Area Network-now exists, maintained by LoRa Alliance. This protocol, ITU-T Y.4480, is an official communications standard of the ITU. Semtech was one of the founding members of this alliance, and it actively support a wide open source community today.

LoRa is not meant for continual use, but for continual coverage. While it has much lower data speeds compared to WiFi, it has much lower power consumption. This is often used in Internet of Things applications, where the devices involved must stay active for a long period of time over a wide area. Typically LoRa operates between 870-930 MHz in bands that do not require licensure. The protocol is based on a proprietary frequency hopping spread spectrum method that itself originated from chirp spread spectrum techniques. This makes it fairly interference resistant while still saving power use. LoRa is the newest protocol of these three, and it still has the most adoption ahead-applications will only increase in the years to come!

## References:

- ⁠https://www.bluetooth.com/learn-about-bluetooth/tech-overview/⁠⁠
- ⁠https://blog.nordicsemi.com/getconnected/the-difference-between-classic-bluetooth-and-bluetooth-low-energy⁠⁠
