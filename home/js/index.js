require(['../../libs/js/com'],function (com) {
  $(function($){
    com.swiper();
    // com.loading();

    $(".clothes").on('click',function(){
      layer.msg('hello'); 
    })
  });
});