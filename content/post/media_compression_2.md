---
title: "Should you compress media when uploading them online? - Part 2"
description: "Compressing audio and video files."
date: 2022-09-25T16:50:00Z
tags: ["Optimization", "Tool"]
draft: false
ShowTOC: true
---
In this post, I will be going through the compression of Audio and Video files. 
Audio and Video files are fairly used by many but not as much as images. Even if 
the amount of video or audio sent is lower, each file is much bigger than a simple 
image.

## Audio
In the case of websites, audio size reduction doesn't have an impact like images. 
But it is necessary to reduce any media size to the optimal file size to save 
storage space. 

Audio files are categorized as:
1. Uncompressed - WAV, AIFF, and PCM files
2. Compressed Lossless - FLAC, WMA, and ALAC files
3. Compressed Lossy - MP3 and AAC files

But their file size depends on two factors, Bit Rate.

**Bit Rate** is the number of bits conveyed or processed per unit of time. The 
bit rate is expressed in the unit bit per second(bps). It can have SI unit 
prefixes like kilo, Mega, Giga, or more. The number of bits an audio requires 
per second depending on the Bit depth and the Sampling Rate.

Bit depth is the number of bits required to show the value of the audio signal 
at one point in time. As bit depth increases, the audio quality increases, which 
increases the bit rate of the audio file.

The Sampling Rate is the number of divisions of a digital wave signal. As the 
sampling rate increases, the audio quality increases, which increases the bit 
rate of the audio file.

![sampling](https://tomsrayaudiomastering.com/wp-content/uploads/2017/03/bit-depth-OPT.jpg#center)

### Speech and Sound
The average frequency range for human speech varies from 80Hz to 260Hz. This 
range is small when compared to all the sound effects. This way, we can remove 
the unused frequency range of sounds when we send voice messages or audio files 
of speeches to reduce the file size. 64kbps is ideal for sending voice clips 
without any loss in quality.

### 64kbps vs 128/256kbps
As mentioned above, 64 kbps is an idea for sending voice clips without any loss in 
sound quality. But if you have other sound effects, you should probably increase 
the bit rate to 128 or 256kbps for most frequency ranges. It is best for 
preserving the details in a song or a movie.

### Tools
There are tools available to convert or compress audio files online. Out of all 
those, here are two which I use often.
1. [FFMPEG](https://ffmpeg.org/) is more than a converter. It is an all-in-one 
solution for all your basic audio and video processing needs.
2. [mp3smaller](https://mp3smaller.com/) is a free online converter used 
by many. It converts mp3 files to different bit rates.

----

## Video
The last type of media we send is videos. And they are the bulkiest among the 
other two types. It also has more file types for all use cases.

### Commonly used video formats:
- **MP4** - MPEG-4 (.mp4)
    - Can store audio files, video files, still images, and text.
    - Provides high-quality video while maintaining relatively small file sizes.
- **MKV** - Matroska Video (.mkv)
    - Incorporates audio, video, and subtitles in a single file.
    - Highly adaptive and easy to use since it supports almost any video and audio 
    format.
- **WEBM** - (.webm)
    - Intended for use with HTML5. 
    - Require very little computer power to compress and unzip the files.
    - Aimed to enable online video streaming on almost any device.

### Frame-rate and Video Resolution
Knowing about frame rates is the way to improve your video production quality. 
To understand frame rate, you should realize that a video is not a single 
continuous recording. Instead, its a set of images stitched together and flashed 
on a screen to produce motion. These images are called frames of the video.
And the number of frames used per second is called the frame rate of a video.

The standard frame rate is 24fps. But it is increased to 30fps for modern 
televisions and monitors. Most games use 60fps, and slow-motion videos are 
recorded with a 120fps camera.

![frame-rate comparison](https://www.videoproc.com/images/vp-seo/frame-rate.jpg#center)

The resolution of a video is the screen size. Just like an image, a video has a 
constant frame resolution.

### Format H.264 mp4
Advanced Video Coding (AVC), also called H.264, is the most widely used video 
compression standard. It is compatible with all major streaming protocols and 
container formats. It can encode high-quality video at lower bit rates than 
older compression standards. Over 90% of the video industry uses H.264.
H.264 is a lossy compression standard, meaning unnecessary information is removed 
from the video. However, this should not impact the video's quality, since the 
important information for displaying the video is preserved.

### Tools
Due to the boom of streaming platforms, new tools to compress videos are born 
day-by-day. These are the ones that I found to be the best for basic 
needs.
1. [FFMPEG](https://ffmpeg.org/) is capable of reducing the frame rate and also 
transcoding the video to other formats.
2. [Handbrake](https://handbrake.fr/) is another tool with a GUI for transcoding
video files.

