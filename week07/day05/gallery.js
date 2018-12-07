let myPics = [
    'https://www.farmersalmanac.com/wp-content/uploads/2012/07/Supercell-i811649298-600x319.jpg',
    'https://i.pinimg.com/originals/be/45/9d/be459dfa70d75f8103ebeaae11e05010.jpg',
    'https://www.desktopbackground.org/download/o/2012/12/05/494526_supercell-clouds-wallpaper_1920x1080_h.jpg',
    'https://fournews-assets-prod-s3b-ew1-aws-c4-pml.s3.amazonaws.com/media/2017/12/snow_london_g_hd.jpg',
    'https://www.autonavigator.hu/wp-content/uploads/2018/01/223532_source.jpg',
    'http://openwalls.com/image/31592/cloudy_wheather_1920x1080.jpg',
    'http://www.spinus.net/nature/mammals-ungulates/guanaco-01/2015-02-n027269-guanaco-spinus-s.jpg',
    'http://www.cartoonswallpapers.net/wallpapers/lion-king-wallpaper-macbook.jpg'
]

let footerImgs = document.querySelectorAll('img.footerimage');
console.log(footerImgs);

for (let i = 0; i < footerImgs.length; i++) {
    footerImgs[i].setAttribute('src', `${myPics[i]}`);
}

let mainPic = document.querySelector('img.mainPic');
mainPic.setAttribute('src', `${myPics[0]}`);

let goRight = document.querySelector('button.right');
let imgCounter = 0;
goRight.onclick = () => {

    if (imgCounter <= myPics.length - 1) {
        if (imgCounter === myPics.length - 1) {
            imgCounter = 0;
            mainPic.setAttribute('src', `${myPics[imgCounter]}`);
        } else {
            imgCounter++;
            mainPic.setAttribute('src', `${myPics[imgCounter]}`);
        };
    }
};
let goLeft = document.querySelector('button.left');
goLeft.onclick = () => {
    if (imgCounter >= 0) {
        if (imgCounter === 0) {
            imgCounter = myPics.length - 1;
            mainPic.setAttribute('src', `${myPics[imgCounter]}`);
        } else {
            imgCounter--;
            mainPic.setAttribute('src', `${myPics[imgCounter]}`);
        };
    }
};