/*
*  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/

'use strict';

// var videoElement = document.querySelector('video');
// var videoSelect = document.querySelector('select#videoSource');
// var selectors = [videoSelect];



// function gotDevices(deviceInfos) {
//   // Handles being called several times to update labels. Preserve values.
//   var values = selectors.map(function(select) {
//     return select.value;
//   });
//   selectors.forEach(function(select) {
//     while (select.firstChild) {
//       select.removeChild(select.firstChild);
//     }
//   });
//   for (var i = 0; i !== deviceInfos.length; ++i) {
//     var deviceInfo = deviceInfos[i];
//     var option = document.createElement('option');
//     option.value = deviceInfo.deviceId;
//     if (deviceInfo.kind === 'videoinput') {
//       option.text = deviceInfo.label || 'camera ' + (videoSelect.length + 1);
//       videoSelect.appendChild(option);
//     } else {
//       console.log('Some other kind of source/device: ', deviceInfo);
//     }
//   }
//   selectors.forEach(function(select, selectorIndex) {
//     if (Array.prototype.slice.call(select.childNodes).some(function(n) {
//       return n.value === values[selectorIndex];
//     })) {
//       select.value = values[selectorIndex];
//     }
//   });
// }

// navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);


// function gotStream(stream) {
//   window.stream = stream; // make stream available to console
//   videoElement.srcObject = stream;
//   // Refresh button list in case labels have become available


//   return navigator.mediaDevices.enumerateDevices();
// }

// function start() {
//   if (window.stream) {
//     window.stream.getTracks().forEach(function(track) {
//       track.stop();
//     });
//   }
//   var videoSource = videoSelect.value;
//   var constraints = {
//     video: {deviceId: videoSource ? {exact: videoSource} : undefined}
//   };
//   navigator.mediaDevices.getUserMedia(constraints).
//       then(gotStream).then(gotDevices).catch(handleError);
// }

// videoSelect.onchange = start;

// start();

// function handleError(error) {
//   console.log('navigator.getUserMedia error: ', error);
// }

// setInterval(function(){
//         context.drawImage(video, 0, 0, 640, 480);

// },1)





// Grab elements, create settings, etc.
// var video = document.getElementById('video');


// // Get access to the camera!
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     // Not adding `{ audio: true }` since we only want video now
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//         video.src = window.URL.createObjectURL(stream);
//         video.play()
//         // context.drawImage(video, 0, 0, 640, 480);
//         console.info(video,"video--->");        
        
//     });
// }


// Trigger photo take
// document.getElementById("snap").addEventListener("click", function() {
//         console.info(video,"video");
	
// });

  window.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var input = document.getElementById('capture');

    input.addEventListener('change', capture, false);

    function capture() {
        var x = document.getElementById("capture");
        console.log(x);
        if ('files' in x) {
            console.log(x.files);
            handleImage(x.files);
        }
    }

    function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e[0]);
    }


}