const images = [
    {
        id: 1,
        img: './Assets/Photos/20200808_161714.jpg',
        text: 'Me and My significant other.'
    },
    {
        id: 2,
        img: './Assets/Photos/20200903_161724.jpg',
        text: 'My happy pitbull.'
    },
    {
        id: 3,
        img: './Assets/Photos/20210507_141528.jpg',
        text: 'My older dog enjoying the sunshine.'
    }
];

const img = document.getElementById("picture")
const text = document.getElementById('info')
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    const item = images[currentItem];
    img.src = item.img;
    text.textContent = item.text;
});

function showImage(image) {
    const item = images[image];
    img.src = item.img;
    text.textContent = item.text;
};

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > images.length - 1) {
      currentItem = 0;
    }
    showImage(currentItem);
  });

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = images.length - 1;
    }
    showImage(currentItem);
  });