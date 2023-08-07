// เรียกใช้Hamnavbar******
function toggleHam(x) {
    // x.classList.toggle("change");

    let myMenu = document.getElementById('myMenu');
    if (myMenu.className === 'menu') {
        myMenu.className += ' menu-active'
    } else {
        myMenu.className = 'menu';
    }

}
// จบnavbar******


// xส่วนของโชว์รูปภาพ*******
let slideIdex = 1 
function plusSlide(n) {
    showSlide(slideIdex += n);
}

// เรียกใช้งาน ตัวdot
function currentSlide(n) {
    showSlide(slideIdex = n);
}

function showSlide(n) {
    let slide = document.getElementsByClassName("mySlideshow-img ");
    let dots = document.getElementsByClassName("dot");
    
    // ทำการวนลูปรูปภาพซ่ำ*
    if (n > slide.length) {
        slideIdex = 1;
    } 

    if (n < 1) {
        slideIdex = slide.length;
    }
    // จบ*

    for(let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // showslideขึ้นมาโดยการกำหนด ตัวที่จะแสดง -1=0=รูปแรก 1=รูปสอง
    slide[slideIdex-1].style.display = 'block';
   
    // ให้ตัว dot แสดงรูปภาพ ให้active เลือกรูปภาพ
    dots[slideIdex-1].className +=" active";

}
 
// เพิ่มส่วนการแสดงผลอัตโนมัติ
setInterval(() => {
    plusSlide(1);
}, 8000); // เปลี่ยนสไลด์ทุก ๆ 8 วินาที


showSlide();
// จบส่วนโชว์รูปภาพ******
