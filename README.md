# webgl2-hierarchical-animation

This project demonstrates continuous animation of not only primitive (cube, sphere), but also more complex, imported 3D objects using the [WebGL2 framework](https://webgl2fundamentals.org/). The code is written in JavaScript, except for the shader handling, which is written in GLSL (GL Shader Language, essentially C/C++ code). The objects are set up in a more sophisticated manner than in the other webgl2-repositories, as here they form a hierarchy of 4 levels, where at each level, an independent continuous animation is executed.

In this project, no interaction with the scene is foreseen (e.g., using a keyboard).

If you decide to download and give this project a run, you will need a local server to do so. The easiest way to get and run one, is to use NodeJS's `http-server` module. This module works well and fast regardless of the underlying OS. If you are not familiar with how to install and initialize the http-server, [this short article](https://markheath.net/post/run-local-webserver) may help.

After you've installed the http-server, navigate to this (root) folder of the project, open a cmd terminal and run `http-server`. The IP address and the port where the server is running and accessible will be displayed next. You can then simply access the application in your favorite browser at `http://localhost:8080` (or `http://<someIP>:<somePort>`, based on the output you got after starting the server).

The result should look something like this:
![image](https://user-images.githubusercontent.com/18488581/164989303-9e173ebc-abd3-4d83-a757-ec0a3dc724b7.png)

For more usage details, as well as more information on the project structure and content, please refer to the [details.txt](https://github.com/stela-kucek/webgl2-hierarchical-animation/blob/b81ab567db358aab9096c8d36416589f0a722f1d/details.txt) file.
