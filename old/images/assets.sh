#!/bin/bash
for i in 01 02 03 04
do
	image=${i}
	sips --resampleWidth 720 ${image}.png --out ${image}w.png 2>/dev/null
	sips --cropToHeightWidth 370 720 ${image}w.png --out ${image}c.png 2>/dev/null
done