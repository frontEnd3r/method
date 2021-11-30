const animItems = document.querySelectorAll('.anim');
const planSection = document.querySelector('.lfp-plan');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    planSection.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            // Коэфициент на который делится высота экрана, чтобы выбирался момент запуска
            const animStart = 2;

            let animItemPoint = window.innerHeight - window.innerHeight / animStart;


            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
                animItem.previousElementSibling.classList.add('lfp-plan-wrap-item-num--orange');
            } else {
                // animItem.classList.remove('active');
                // animItem.previousElementSibling.classList.remove('lfp-plan-wrap-item-num--orange');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}


// FURMAN
// const reviewsCards = document.querySelectorAll('.lfp-reviews-wrap-container-card');
// const eventHandler = document.querySelector('.lfp-reviews-wrap-container');

// if (reviewsCards.length > 0) {
//     for (let count = 0; count < reviewsCards.length; count++) {
//         const reviewsCard = reviewsCards[count];
//         if (reviewsCard.addEventListener) {
//             if ('onwheel' in document) {

//                 reviewsCard.addEventListener("wheel", onWheel);
//             } else if ('onmousewheel' in document) {

//                 reviewsCard.addEventListener("mousewheel", onWheel);
//             } else {

//                 reviewsCard.addEventListener("MozMousePixelScroll", onWheel);
//             }
//         } else {
//             reviewsCard.attachEvent("onmousewheel", onWheel);
//         }


//         function onWheel(e) {
//             e.preventDefault ? e.preventDefault() : (e.returnValue = false);
//             let delta = e.deltaY || e.detail || e.wheelDelta;
//             let thisCard = (reviewsCard, this);
//             if (delta > 0) {
//                 if (thisCard.previousElementSibling != null) {
//                     thisCard.classList.add('lfp-reviews-wrap-container-card--fadeout');
//                 } else {
//                     return false;
//                 }

//             } else {
//                 if (thisCard.nextElementSibling != null) {
//                     thisCard.nextElementSibling.classList.remove('lfp-reviews-wrap-container-card--fadeout');
//                 }

//             }

//         }



//         // Свайп
//         reviewsCard.addEventListener('touchstart', handleTouchStart, false);
//         reviewsCard.addEventListener('touchmove', handleTouchMove, false);
//         let x1 = null;
//         let y1 = null;

//         function handleTouchStart(event) {
//             const firstTouch = event.touches[0];
//             x1 = firstTouch.clientX;
//             x2 = firstTouch.clientY;

//         }

//         function handleTouchMove(event) {
//             if (!x1 || !y1) {
//                 return false;
//             }
//             let thisCard = (reviewsCard, this);
//             let x2 = event.touches[0].clientX;
//             let y2 = event.touches[0].clientY;
//             let xDiff = x2 - x1;
//             let yDiff = y2 - y1;

//             if (Math.abs(xDiff) > Math.abs(yDiff)) {
//                 // right - left
//                 if (xDiff > 0) {
//                     // Событие при свайпе вправо
//                     console.log('право');
//                     thisCard.nextElementSibling.classList.remove('lfp-reviews-wrap-container-card--fadeout');
//                 } else {
//                     // Событие при свайпе влево
//                     thisCard.classList.add('lfp-reviews-wrap-container-card--fadeout');
//                 }
//             } else {
//                 // top - bottom
//                 if (yDiff > 0) {
//                     // Событие свайпа вниз
//                 } else {
//                     // Событие свайпа вверх
//                 }
//             }
//             x1 = null;
//             y1 = null;
//         }
//     }


// }