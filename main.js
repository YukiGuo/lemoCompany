window.onload = function () {
    carousel();
    teamAction();
    toggle()
}

//轮播

function carousel() {
    let wrapper = document.querySelector('.home');
    let pic = document.querySelectorAll('.home .pic li');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let num = document.querySelectorAll('.home .num li');
    window.b = right.classList
    let index = 0;
    let timer = null;
    change(index)
    timer = setInterval(run, 2000);

    function run() {
        index++
        if (index >= pic.length) {
            index = 0
        }
        change(index)
    }

    for (let i = 0; i < num.length; i++) {
        num[i].index = i; //把索引值存起来
        num[i].onmouseover = function () {
            change(this.index);
        }
    }

    function change(curindex) { //用于切换图片的函数
        for (let i = 0; i < pic.length; i++) {
            pic[i].style.display = "none";
            num[i].className = "";
        }

        pic[curindex].style.display = "block";
        num[curindex].className = "active";
        index = curindex;
    }

    right.addEventListener('click', function () {
        index++
        if (index >= pic.length) {
            index = 0
        }
        change(index)
    })
    left.addEventListener('click', function () {
        index--
        if (index < 0) {
            index = pic.length - 1
        }
        change(index)
    })

    wrapper.onmouseover = function () {
        clearInterval(timer)
    }
    wrapper.onmouseout = function () {
        clearInterval(run, 4000)
    }
}

function teamAction() {
    let teamItem = document.querySelectorAll('.team .item')
    for (let i = 0; i < teamItem.length; i++) {
        teamItem[i].onmouseover = function () {
            teamItem[i].style.animation = "in 1s linear  forwards";
        }
        teamItem[i].onmouseout = function () {
            teamItem[i].style.animation = "out 1s linear  forwards";
        }
    }
}

function toggle() {
    let navItem = document.querySelectorAll('nav ul li a')
    let selectedTab = [navItem[0]]
    selectedTab[0].classList.add('selected')
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].onclick = function () {
            if (selectedTab.indexOf(navItem[i]) >= 0) {
                selectedTab[0].classList.remove('selected')
                selectedTab = []
            } else {
                selectedTab[0].classList.remove('selected')
                navItem[i].classList.add('selected')
                selectedTab = [navItem[i]]
            }

        }

    }


}
