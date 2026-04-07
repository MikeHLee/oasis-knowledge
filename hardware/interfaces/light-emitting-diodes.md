# Light Emitting Diodes: LEDs.

# Introduction

⁠⁠⁠

A LED, or light-emitting diode, is a component that generates light using direct current. As electrons flow through the device, they cross a ‘band gap’ and fill ‘electron holes’, emitting photons as they do. The nature of the band gap determines the color of the light. LEDs have many advantages over incandescent lightbulbs, including small size, considerable energy efficiency, and lower heat production. This has made them the dominant illuminating technology for most modern electronic devices, and many, many more applications.

# LED Basics

An LED is an electrical component that emits light when current flows through it. They are used in various applications due to their efficiency, color choice, and long lifespan. They improve the quality of light and reduce energy consumption. They are used in lighting panels, emergency lighting systems, buttons, lighting beacons, car headlights, vehicle interiors, and signage.

⁠⁠   ⁠   ⁠⁠

The first LED was reported by Russian inventor Oleg Losev in 1927, but the first visible-light LED was produced by Nick Holonyack in 1962. LEDs are simple devices, requiring only two wires or pins for operation - one positive and one negative, and are typically made from a compound of various semiconductor materials, including indium gallium nitride, aluminum gallium indium phosphide, aluminum gallium arsenide, and gallium phosphide. The light produced depends on the energy required to cross the semiconductor's band-gap.

LEDs offer several benefits over traditional lighting, including longer lifetimes, lower power consumption, directional light emission, affordability, color variety, instant brightness, durability, and no UV emissions. They are roughly 90% more efficient in producing light than traditional fluorescent or incandescent lights.

LEDs come in many different shapes, colors, and sizes, and specifications, the type of which is usually chosen based on intended use and factors such as like space, power supply, and environmental conditions. Common classes of LEDs include

# WS2812B LEDs

⁠⁠  ⁠⁠

The WS2812B LED standard is a smart way to control LED light sources. It's like having a tiny brain inside each LED, allowing you to program and control each one individually. This opens up a world of possibilities for creating dynamic, colorful light displays. Each LED can display 256 levels of brightness for each of the three primary colors (red, green, blue), allowing for a total of 16,777,216 possible colors. This gives you a lot of flexibility when it comes to creating your light display! The WS2812B standard also allows for data to be transmitted at speeds of 800Kbps, and the signal can be transmitted over distances of more than 5 meters without any additional circuitry.

⁠⁠   ⁠⁠

The control circuit and the LED itself share a single power source, which simplifies the wiring and makes the whole setup more efficient. The control circuit and the RGB (red, green, blue) chip are all neatly packed into a tiny 5050 component. This means that each LED is a self-contained unit that can be controlled individually.

One of the key features of the WS2812B standard is its reverse connection protection. This means that even if you accidentally connect the power supply the wrong way round, it won't damage the LED's control circuit. The WS2812B standard also includes a signal reshaping circuit. This ensures that the signal doesn't get distorted as it passes from one LED to the next-important when you're chaining multiple LEDs together, as it ensures that the color and brightness of each LED remains consistent. This makes it a versatile choice for a range of applications, from decorative lighting to LED video screens.

Sources:

- ⁠https://engineerfix.com/electrical/leds/a-complete-guide-to-leds/⁠⁠
- ⁠https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf⁠⁠
- ⁠https://www.diykeyboards.com/images/com_hikashop/upload/rgb_led_strip_01.jpg⁠⁠
- ⁠https://www.circuits-diy.com/interfacing-ws2812b-led-ring-with-esp32/⁠⁠
- ⁠https://tutorials-raspberrypi.com/connect-control-raspberry-pi-ws2812-rgb-led-strips/⁠⁠
