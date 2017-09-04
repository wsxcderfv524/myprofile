require.config({
  paths: {
    "swiper":"../../libs/js/swiper.jquery.min",
  },
  shim: {
    // swiper:{exports:'swiper'},
    layer :{deps: [],exports:'layer'},
  }
});
define([],function () {
  var COM;
  COM = {
    loading:function(){
      alert("loading")
    },
    swiper:function(){
      require(['swiper'],function(Swiper){
        var mySwiper = new Swiper ('.swiper-container', {
          // direction: 'vertical',
          loop: true,
          
          // 如果需要分页器
          pagination: '.swiper-pagination',
          
          // 如果需要前进后退按钮
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          
          // 如果需要滚动条
          // scrollbar: '.swiper-scrollbar',
        });      
      })
    },
    msg:function(){
      layer.msg('玩命提示中');
    }
  };
  return COM;
})