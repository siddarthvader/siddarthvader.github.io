/*
*  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/


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

    var onefootInPixel = 0;
    var dpi_x = document.getElementById('dpi').offsetWidth;
    var dpi_y = document.getElementById('dpi').offsetHeight;
    var widthInInch;
    var heightInInch;

    function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var img1 = new Image();
            img1.onload = function () {
                // canvas.height = img.width;
                // canvas.width = img.height;
                // img.width=img.width/2;
                var ratio = img1.width / img1.height;
                var screen = window.innerWidth;
                img1.width = screen * .9;
                img1.height = img1.width / ratio;
                widthInInch = img1.width / dpi_x;
                heightInInch = img1.height / dpi_y;
                onefootInPixel = img1.width / 10;

                // img.height=img.height/2;
                document.getElementById('img').appendChild(img1);

                new Darkroom('#image');
            };

            img1.src = event.target.result;
            img1.id = "image";

        };
        reader.readAsDataURL(e[0]);
    }

    new Darkroom('#img', {
        // Canvas initialization size
        minWidth: 400,
        minHeight: 200,
        maxWidth: 10000,
        maxHeight: 10000,

        // Plugins options
        plugins: {
            crop: {
                minHeight: 400,
                minWidth: 200,
                ratio: 1
            },
            save: false
        },
        // Post initialization method
        initialize: function () {
            // Active crop selection
            this.plugins['crop'].requireFocus();

            // Add custom listener
            this.addEventListener('core:transformation', function () { /* ... */
            });
        }

    });


    $(document).on('click', '.darkroom-button', function (event) {
        var kid = event.target;
        var flag = false;
        do {
            if (kid.getAttribute('xlink:href') == '#save') {
                flag = true;
            }
            kid = kid.children[0];
        }
        while (kid);

        if (flag) {
            setTimeout(function () {
                var image = document.getElementById('img').children[0];
                canvas.width = image.width;
                canvas.height = image.height;
                //ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.width = image.width;
                ctx.height = image.height;
                ctx.drawImage(image, 0, 0);
                document.getElementById('img').remove();
                document.getElementsByClassName('button-group')[0].remove();
                document.getElementsByClassName('item')[0].style.display='inline';
                document.getElementsByClassName('side-menu')[0].style.display='flex';

            }, 1000);
        }

    });


    // target elements with the "draggable" class
};


interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        //restrict: {
        //    restriction: "parent",
        //    endOnly: true,
        //    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        //},
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of '
                + (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy)|0) + 'px');
        }
    });

function dragMoveListener (event) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

//

function changeBackground(mode) {
    for(var i=0;i<document.getElementsByClassName('item').length;i++){
        document.getElementsByClassName('item')[i].style.display='none';
    }


    document.getElementsByClassName('item')[mode].style.display='inline';

}

