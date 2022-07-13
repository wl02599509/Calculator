
const dot = document.querySelector("#dot")

//數字鍵盤
const numberBtn = document.querySelectorAll(".number-key");
const printNumbers = function(numberKey){
    numberKey.addEventListener("click", function(e){
        if (result.textContent == 0){
            result.textContent = e.target.textContent;
            //讓一開始的0先跟第一個輸入的數字相加，把首位的0先用其他數字代替掉，解決0在首位的問題 ex:051869
        } else {
            result.textContent += e.target.textContent.toString();
        }

        if (result.textContent !== 0) {
            reset.textContent = "C"
        }
    })
}

const operationArr = [];

//AC重置鍵
const result = document.querySelector(".display");
const reset = document.querySelector("#AC")
const acBtn = () => {
    result.textContent = 0;
    operationArr.splice(0, operationArr.length);  //將陣列也清空重置，以免在陣列留下有數字
    if (result.textContent == 0){
        reset.textContent = "AC"
    }
}

// 加法
const plus = document.querySelector("#plus");
const plusFunction = function(){
    const num = Number(result.textContent);
    operationArr.push(num);
    if(operationArr.length >= 2){
        const sum = operationArr.reduce((acc, cv) => acc + cv);
        result.textContent = sum;
    }
}

// 減法
const minus = document.querySelector("#minus");
const minusFunction = function(){
    let num = 0
    // if(Number(result.textContent) < 0){
    //     num += (Number(result.textContent));
    // }
    if(operationArr.length > 0){
        num += (- Number(result.textContent));
    }else if(operationArr.length == 0) {
        num += (Number(result.textContent));
    }
    operationArr.push(num);
    console.log(operationArr)
    if(operationArr.length >= 2){
        const sum = operationArr.reduce((acc, cv) => acc + cv);
        result.textContent = sum;
    }
}



numberBtn.forEach(printNumbers);  //按下數字鍵後，印數字在最上面的result欄位
reset.addEventListener("click", acBtn);
plus.addEventListener("click", plusFunction);
minus.addEventListener("click", minusFunction);