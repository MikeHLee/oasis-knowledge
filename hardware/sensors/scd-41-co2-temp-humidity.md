# SCD-41: Atmospheric CO2, Temp & Humidity

# Introduction

CO2 is essential for life on Earth - we and plants use and emit CO2 in turn. But it's important to keep that CO2 balanced - too much is not good for humans and the planet.

The SCD-41 is a photo-acoustic 'true' CO2 sensor that will tell you the CO2 PPM (parts-per-million) composition of ambient air. Unlike the SGP30, this sensor isn't approximating it from VOC gas concentration - it really is measuring the CO2 concentration! While bigger and more expensive, it’s the real thing. Perfect for environmental sensing, scientific experiments, air quality and ventilation studies, and more.

Compared to the illustrious SCD-30, this sensor uses a different measurement technique that makes it much smaller without sacrificing data quality. There's both Arduino and Python/CircuitPython code so you can get started in a jiffy, and simple data reading options over I2C.

There are two variants of this sensor - the SCD-40 and SCD-41

- The SCD-40 is lower cost and is perfect for indoor/outdoor air quality and CO2 measurements. It has a range of 400~2000 ppm with an accuracy of ±(50 ppm + 5% of reading)
- The SCD-41 very wide range means it's best used for industrial or scientific CO2 measurements where the ppm can get very high. It has a range of 400~5000 ppm with an accuracy of ±(40 ppm + 5% of reading)
This sensor can run from 3.3 to 5V, but it's more important for it to have a quiet power supply with low ripple. For that reason, we've added a 3.3V regulator and level shifters: when connecting to a 5V microcontroller like an Arduino UNO the 5V supply is often shared with other components that add noise. The onboard regulator will keep the voltage nice and quiet. For advanced builds, you can cut/solder the backtraces to change whether the regulator is enabled and what I2C logic level is desired.

Tutorials:

- Getting started with Arduino⁠⁠
- Getting started with Raspberry Pi⁠⁠
- Getting started with Python⁠⁠
​Sources:

- ⁠https://www.adafruit.com/product/5190⁠⁠
- ⁠https://developer.sensirion.com/products-support/scd4x-co2-sensor⁠⁠
