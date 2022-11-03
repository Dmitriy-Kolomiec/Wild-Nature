let offset = 410;

const sliderLine = document.querySelector('.slider_line_js');
document.querySelector('.slider_next').addEventListener('click', function() {
offset += 410;
if (offset > 1270 ) {
    offset = 410;
}
sliderLine.style.left = -offset +'px';
}); 

document.querySelector('.slider_prew').addEventListener('click', function() {
    offset -= 410;
    if (offset < 410 ) {
        offset = 1270;
    }
    sliderLine.style.left = -offset + 'px';
    }); 