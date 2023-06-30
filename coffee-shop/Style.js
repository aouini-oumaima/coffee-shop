
function getWheel() {
    return $('.wheel');
  }
  
  function getSpinBtn() {
    return $('.spinBtn');
  }
  
  function getRandomValue() {
    return Math.ceil(Math.random() * 3600);
  }
  
  function spinWheel() {
    var wheel = $('.wheel');
    var value = getRandomValue();
    wheel.css('transform', 'rotate(' + value + 'deg)');
    return value;
  }
  
  function setSpinBtnOnClick() {
    var spinBtn = $('.spinBtn');
    spinBtn.on('click', function() {
      spinWheel();
      setSpinBtnOnClick();
    });
  }
  
  setSpinBtnOnClick();
  