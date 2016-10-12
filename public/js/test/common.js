$(function() {
  $('.bar-item').hover(function() {
    var $this = $(this),
        tooltip = $this.find('.bar-item-tip')

    $this.find('.icon-font').addClass('icon-focus')
    tooltip.removeClass('hide')
    if(!tooltip.hasClass('disabled-animate')) {
      tooltip.animate({
        right: '35px',
        opacity: 1
      }, 300)
    }
  }, function() {
    var $this = $(this),
        tooltip = $this.find('.bar-item-tip')

    $this.find('.icon-font').removeClass('icon-focus')
    $this.find('.bar-item-tip').addClass('hide')
    if(!tooltip.hasClass('disabled-animate')) {
      tooltip.css({'right': '60px','opacity': 0})
    }
  })

  $('#barQqItem').on('click', function() {
    window.open('http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDA4MTE4NF8yNTc0NzdfODAwMDgxMTg0XzJf')
  })

  $('#backTopItem').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'fast');
  })
})