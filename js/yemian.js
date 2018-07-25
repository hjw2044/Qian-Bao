$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        //autoplay:{delay:2000},
        direction: 'vertical',
        //effect:'fade',
        //loop: true,
        mousewheel:true,

        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },

        // �����Ҫǰ�����˰�ť
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'

        },



        on:{
            init: function(){
                swiperAnimateCache(this); //���ض���Ԫ��
                swiperAnimate(this); //��ʼ����ɿ�ʼ����
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //ÿ��slide�л�����ʱҲ���е�ǰslide����
            }
        }




        // �����Ҫ������
        //scrollbar: {
        //    el: '.swiper-scrollbar',
        //},
    })




});
