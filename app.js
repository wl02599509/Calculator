const result = document.querySelector(".display");
const numberBtn = document.querySelectorAll(".number-key");
const printNumbers = function(numberKey){
    numberKey.addEventListener("click", function(e){
        if ( result.textContent == 0 ){
            result.textContent = e.target.textContent
            //讓一開始的0先跟第一個輸入的數字相加，把首位的0先用其他數字代替掉，解決0在首位的問題 ex:051869
        } else {
            result.textContent += e.target.textContent.toString() 
        }
        if (result.textContent !== 0) {
            reset.textContent = "C"
        }
    })
}

const reset = document.querySelector("#AC")
const acBtn = () => {
    result.textContent = 0
    if (result.textContent == 0){
        reset.textContent = "AC"
    }
}






numberBtn.forEach(printNumbers);  //按下數字鍵後，印數字在最上面的result欄位
reset.addEventListener("click", acBtn);



                        
