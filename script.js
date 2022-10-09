const remained = document.querySelector('.remained');
const liters = document.querySelector('#liters');
const percentage = document.getElementById('percentage');
const cups = document.querySelector('.cups');

// 获取鼠标点击小杯子的对象
cups.addEventListener('click', e => {
    if (e.target.classList.contains('cup-small')) {
        const index = e.target.getAttribute('data-index');
        highlightCups(Number(index));
    }
})

// 高亮小杯子
function highlightCups(idx) {
    const smallCups = cups.children;
    if (idx === 7 && smallCups[idx].classList.contains("full")) {
        idx--;
    } else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }
    [...smallCups].forEach((item, index) => {
        if (index <= idx) {
            item.classList.add('full');
        } else {
            item.classList.remove('full');
        }
    })
    updateCups(idx);
}

// 更新大杯子
function updateCups(idx) {
    const fillCups = idx + 1;
    const totalCups = cups.children.length;
    percentage
    if (fillCups > 0) {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fillCups / totalCups * 260}px`;
        percentage.textContent = `${fillCups / totalCups * 100}%`;
    } else {
        percentage.style.visibility = 'hidden';
        percentage.style.height = `0px`;
    }

    // remain
    if (fillCups === totalCups) {
        remained.style.height = '0px';
    } if (fillCups === 7) {
        remained.style.height = '200px';
        liters.textContent = `${2 - fillCups / totalCups * 2}L`;
    } else {
        liters.textContent = `${2 - fillCups / totalCups * 2}L`;
    }
}

updateCups(-1);


