let paralaxPhone = document.querySelector('.phone-paralax');
let paralaxItem = document.querySelectorAll('.paralax');
let desctopParalax = true;

paralaxControl();
window.addEventListener('resize', paralaxControl);
window.addEventListener('mousemove', movingElement);

function paralaxControl() {
  if (document.body.clientWidth < 992) {
    desctopParalax = false;
    paralaxItem[1].style.transform = 'translate(0px, 0px)';
  } else {
    desctopParalax = true;
  };
};

function movingElement(event) {
  if (desctopParalax) {
    let left = event.pageX / 50;
    let top = event.pageY / 33;

    for (let i = 0; i < paralaxItem.length; i++) {
      paralaxItem[i].style.transform = 'translate(-' + left + 'px, -' + top + 'px)';
    };
  };
};
