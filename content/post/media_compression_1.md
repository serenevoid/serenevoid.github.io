---
title: "Should you compress media when uploading them online? - Part 1"
description: "Here is how you can compress your media with CLI tools or websites."
date: 2022-09-11T12:50:00Z
tags: ["Optimization", "Tool"]
draft: false
ShowTOC: true
---
Have you ever thought of doing optimization algorithms on the media that you 
send online to reduce bandwidth usage or cloud storage space? What if I tell you 
that the images you send online can be compressed without losing quality?

No, I am not talking about archiving the media into a zip file. I am talking about 
converting your individual media files into a smaller file size by sacrificing 
almost unnoticeable amount of quality.

There are many advantages to reducing the file size of the media in all 
professions. For game developers, asset compression is crucial to reduce the 
game size. For web developers, asset compression will reduce the load times of 
the websites. For a  user, file compression would mean they can share files 
without much bandwidth.

I will go through the three media categories one by one.

## Images
Most of the media that people use on a website are images. And there are ways 
to send good quality images without much storage space. But before that, we 
should understand the major image formats and which should be where.

### Commonly used image formats
- **JPEG** - Joint Photographic Experts Group (.jpg or .jpeg) 
    - JPEG is a lossy image format which reduce image size by 
    sacrificing image quality.
    - It is well suited for sharing files online.
- **PNG** - Portable Network Graphics (.png)
    - PNG is a lossless image format which preserves image quality when required.
    - It was developed to replace GIF format with 256 colors, unlike PNG with 
    16 million colors.
- **SVG** - Scalable Vector Graphics (.svg)
    - SVG is used to define vector-based graphics for the Web.
    - Uses pure XML format.
    - Can be zoomed to any scale losslessly.
    - The best choice for vector graphics like icons, infographics, and more.
- **WEBP** (.webp)
    - Can display high-quality images with small file sizes. (lower than JPG 
    and PNG)
    - Has option for both lossy and lossless compression.
    - Supports animations which make it an alternative to GIF format.
    - Supports transparency like PNG.
    - Maximum Resolution a webp image can have is 16,383 x 16,383 pixels.

All these formats have many advantages when used correctly in the correct places. 

### PNG-8 and PNG-24
From the [Web Designer???s Guide to PNG Image Format](https://www.webfx.com/blog/web-design/web-designers-guide-to-png-image-format/)
> There are two PNG formats: PNG-8 and PNG-24. The numbers are shorthand for 
saying "8-bit PNG" or "24-bit PNG." Not to get too much into technicalities ??? 
because as a web designer, you probably do not care ??? 8-bit PNGs mean that the 
image is 8 bits per pixel, while 24-bit PNGs is 24 bits per pixel.
>
> To sum up the difference in plain English: Let???s just say PNG-24 can handle a 
lot more color and is good for complex images with lots of color such as 
photographs (just like JPEG), while PNG-8 is more optimized for things with 
simple colors, such as logos and user interface elements like icons and buttons.

![comparison of png formats](https://3.bp.blogspot.com/-hPeh-mgO_Qo/URQZ5h5OYwI/AAAAAAAAAF4/C0UICByhZLE/s1600/color_depth.jpg#center)

With an 8-bit color depth, there are 256 colors. With 24-bit color depth, there 
are 16,777,216 colors. As you can see, there will be a significant reduction in 
file size if you compress the images to 8-bit. If you don't see much difference 
between the two choices, 8-bit is the better option here.

### Tools
There are many tools out there that can compress images to reduce size. Here I 
am listing three of the unique ones I use.
1. [Adobe Photoshop](https://www.photoshop.com/) is one of the most popular and 
well-known photo- and graphics-editing software applications.
2. [Photopea](https://www.photopea.com/) is a free clone of photoshop available
as a web app.
3. [ImageMagick](https://imagemagick.org/) is a free and open-source cross-platform 
software suite for displaying, creating, converting, modifying, and editing 
raster images.
4. [PNGquant](https://pngquant.org/) is a command-line utility and a library for 
lossy compression of PNG images. It turns PNG-24 into PNG-8.
5. [TinyPNG](https://tinypng.com/) is a free online tool that can compress images 
on the fly.
