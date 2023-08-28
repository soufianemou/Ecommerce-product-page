$(document).ready(()=>{

    function showNavbarMobile(){
        $('#menu').click(()=>{
            $('#nav2').css('left','0px')
        })
        $('#close').click(()=>{
            $('#nav2').css('left','-450px')
        })
    }
    showNavbarMobile()



    function previewImgs(){
        $('#thubnails').children().each((item,elem)=>{
            $(elem).click(()=>{
                $(elem).addClass('opacity-50')
                $(elem).children().addClass('border-2 border-[#ff7d1a]')
                $(elem).siblings().children().removeClass('border-2 border-[#ff7d1a]')
                $(elem).siblings().removeClass('opacity-50')
                if($(elem).children().hasClass('one')){
                    $('#mainImg').attr('src','./images/image-product-1.jpg')
                };
                if($(elem).children().hasClass('two')){
                    $('#mainImg').attr('src','./images/image-product-2.jpg')
                };
                if($(elem).children().hasClass('three')){
                    $('#mainImg').attr('src','./images/image-product-3.jpg')
                };
                if($(elem).children().hasClass('four')){
                    $('#mainImg').attr('src','./images/image-product-4.jpg')
                };            
            })
        })
    
        $('#thubnailsTwo').children().each((item,elem)=>{
            $(elem).click(()=>{
                $(elem).addClass('opacity-50')
                $(elem).children().addClass('border-2 border-[#ff7d1a]')
                $(elem).siblings().children().removeClass('border-2 border-[#ff7d1a]')
                $(elem).siblings().removeClass('opacity-50')
                if($(elem).children().hasClass('one')){
                    $('#mainImgTwo').attr('src','./images/image-product-1.jpg')
                };
                if($(elem).children().hasClass('two')){
                    $('#mainImgTwo').attr('src','./images/image-product-2.jpg')
                };
                if($(elem).children().hasClass('three')){
                    $('#mainImgTwo').attr('src','./images/image-product-3.jpg')
                };
                if($(elem).children().hasClass('four')){
                    $('#mainImgTwo').attr('src','./images/image-product-4.jpg')
                };            
            })
        })
    }
    previewImgs()



    function calcule(){
        $('#add').click(()=>{
            $('#qt').html(+$('#qt').html() +1)
            $('#result').html(`$${(+$('#qt').html() * 125.00).toFixed(2) } <span class="text-[#ff7d1a] bg-[#ffb784] px-2 rounded-lg text-sm ms-1 ">50%</span>`)
            $('#prResult').html(`$${(+$('#qt').html() * 250.00).toFixed(2) }`)
        })
        $('#mins').click(()=>{
            $('#qt').html(+$('#qt').html() -1)
            $('#result').html(`$${(+$('#qt').html() * 125.00).toFixed(2) } <span class="text-[#ff7d1a] bg-[#ffb784] px-2 rounded-lg text-sm ms-1 ">50%</span>`)
            $('#prResult').html(`$${(+$('#qt').html() * 250.00).toFixed(2) }`)
            if(+$('#qt').html()<0 ){
                $('#qt').html(0)            
            }
            if(+$('#qt').html()==0 ){
                $('#card').find('#cardInfo, #check').remove()
            }  
        })
    }
    calcule()



    function  cardUpdate(){
        $('#addCart').click(()=>{
            $('#card').find('#empty').remove()
        if(!$('#card').children('div').length > 0){
            $('#card').append(`
            <div id='cardInfo' class="flex gap-3 mt-4">
                <img src="./images/image-product-1-thumbnail.jpg" class="rounded-md" alt="" width="60px" height="30px">
                <div>
                    <h3 class="text-[#b6bcc8] font-bold">fall limited edition sneakers</h3>
                    <h3 id='cash' class="text-[#b6bcc8]">$125 x <span>${$('#qt').html()} </span><span class="font-extrabold text-black">$${(+$('#qt').html() * 125).toFixed(2) }</span></h3>
                </div>
                <button onclick="remove(this)" ><i class="fa-solid fa-trash fa-2x" style="color: #b6bcc8;"></i></button>
            </div>
            <button id='check' class="bg-[#ff7d1a] text-[#f2f2f2] rounded-md font-bold text-center w-full mt-3 p-2">Checkout</button>
            `)
            $('#iconCard').html(1)
            $('#iconCard').removeClass('hidden')
            
        }else{
            // alert('You have already added this product to your cart')
            $('#card').find('#cash').html(`$125 x <span>${$('#qt').html()} </span><span class="font-extrabold text-black">$${(+$('#qt').html() * 125).toFixed(2) }</span>`)
        }  
        if(+$('#qt').html()==0 ){
            $(`<div id='empty' class="h-20 flex justify-center items-center">
                <h3>Your card is empty</h3>
                </div>`).insertAfter('#hrCard')  
            $('#card').find('#cardInfo, #check').remove()
        }
    })

    }
    cardUpdate()



    function showCardInfo(){
        $('#card').hide()
        $("#icon-Card").on('click',()=>{
            if($('#card').hasClass('show')){
                $('#card').fadeIn()
                $('#card').removeClass('show')
            }else{
                $('#card').fadeOut()
                $('#card').addClass('show')
            }           
        })
        // Hide the card when clicking anywhere else on the page (except #icon-Card and #card)
        $(document).on('click', (event) => {
            if (!$(event.target).is('#icon-Card') && !$(event.target).is('#card') && !$(event.target).is('#addCart') && !$(event.target).is('#qt') && !$(event.target).is('#add') && !$(event.target).is('#mins')) {
                $('#card').fadeOut();
                $('#card').addClass('show');
            }
        });

    }
    showCardInfo()

})