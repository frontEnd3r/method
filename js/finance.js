$( document ).ready(function() {
    /* открыть все теги */
    let blogTagsLength = $('.blog-search-tags__tag').length;
    $('.blog-search-tags__more').text(`показать все теги (${blogTagsLength})`);
    $('.blog-search-tags__more').click(function(){
        $('.blog-search-tags__tag:nth-child(n+15)').slideDown(200);
        $(this).fadeOut(200);
    });
    /* посимвольный поиск */
    let blogTagsAll = document.querySelectorAll('.blog-search-tags__tag');
    document.querySelector('.blog-search-form__input').oninput = function (){
        let val = this.value.trim();
        if(val != '') {
            blogTagsAll.forEach(item => {
                if(item.textContent.search(RegExp(val,'gi'))){
                    item.classList.add('hide');
                    setTimeout(()=>{item.style.position = 'absolute';},200);
                }else{
                    item.classList.remove('hide');
                    item.style.position = 'static';
                }
                if(!item.textContent.search(RegExp(val,'gi'))){
                    item.classList.add('show');
                }else{
                    item.classList.remove('show');
                }
            });
        }else{
            blogTagsAll.forEach(item => {
                item.classList.remove('hide', 'show');
                item.style.position = 'static';
            });
        } 
    }
    /* открытие списков */
    $('.articles-head-select').click(function(){
        $(this).toggleClass('articles-head-select--active');
        if($(this).hasClass('articles-head-select--active')){
            $(this).find('.articles-head-select__list').slideDown(300);
        }else{
            $(this).find('.articles-head-select__list').slideUp(300);
        }
        $(this).find('.articles-head-select__list li').click(function(){
            let thisItem = $(this).text();
            $(this).parents('.articles-head-select').find('.articles-head-select__btn span').text(thisItem);
        });
    });
});