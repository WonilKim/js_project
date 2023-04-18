document.addEventListener("DOMContentLoaded", () => {
    console.log("-- DOMContentLoaded --");

    const divs = document.querySelectorAll(".rows > div");
    console.log(divs);

    //랜덤수 생성
    let r = Math.floor(Math.random() * 9) + 1;
    console.log(r);

    let count = 0;
    let bomb = false;
    let num = 1;
    let clicked = [];
    for (let d of divs) {
        
        d.innerHTML = num++;

        d.addEventListener("click", () => {
            console.log("-- div click --");

            count++;

            if(bomb == true) {
                console.log("폭탄이 터졌습니다. 폭탄을 섞어주세요.");
                return;
            }

            if (d.innerHTML == r) {
                //폭탄
                console.log("폭탄");
                d.innerHTML = `<img src=./images/boom.png>`;
                bomb = true;
            }
            else {
                console.log("하트");
                d.innerHTML = `<img src=./images/hart.png>`;
            }

            if(count == 8) {
                console.log("성공. 모든 폭탄을 피했습니다.");
                divs[r - 1].innerHTML = `<img src=./images/hart.png>`;
            }

        });
        
    }

    const btnMix = document.querySelector("#btnMix");
    console.log(btnMix);

    btnMix.addEventListener("click", () => {
        console.log("-- btnMix click --");

        r = Math.floor(Math.random() * 9) + 1;
        console.log(r);
        count = 0;
        bomb = false;
        num = 1;

        for (let d of divs) {
            d.innerHTML = num++;
        }

    });



});