//매치 미디어를 이용한 페이지 가로 사이즈별 반응 제어

function responsiveControl() {
    if ( window.matchMedia('(min-width: 320px)').matches ) {
        
        // 320px 이상 내용 입력

    } else if ( window.matchMedia('(min-width: 768px)').matches ) {
        
        // 768px이상 내용 입력

    } else {
        //현재 pc 페이지 내용
    }
};

window.addEventListener('resize', responsiveControl, false);
responsiveControl();   
