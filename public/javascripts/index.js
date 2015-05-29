$(document).ready(function() {

  $('.panel').addClass('load')
  $('.my_links').load(function(){
    $('.my_links a').first
  })

  $('.education').on("click", function(){
    if($('.panel-body').first().css('display') === 'none') {
      $('.panel-body').first().slideDown()
      $('.panel-body').first().find('dl').addClass('load')
    }else{
      $('.panel-body').first().slideUp()
      $('.panel-body').first().find('dl').removeClass('load')
    }

  })

  $('.skills').on("click", function(){
    if($('.panel-body').eq(1).css('display') === 'none') {
      $('.panel-body').eq(1).slideDown()
      $('.panel-body').eq(1).find('dl').addClass('load')
    }else{
      $('.panel-body').eq(1).slideUp()
      $('.panel-body').eq(1).find('dl').removeClass('load')
    }
  })

  $('.experience').on("click", function(){
    if($('.panel-body').eq(2).css('display') === 'none') {
      $('.panel-body').eq(2).slideDown()
      $('.panel-body').eq(2).find('dl').addClass('load')
    }else{
      $('.panel-body').eq(2).slideUp()
      $('.panel-body').eq(2).find('dl').removeClass('load')
    }
  })

})
