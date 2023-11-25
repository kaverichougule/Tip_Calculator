let tip_percent=document.querySelectorAll('.tips')
let custom_tip=document.querySelector("#custom")
console.log(custom_tip);
tip_percent.forEach(function(val){
    val.addEventListener('click',handleTipClick)
})

let tipValue=0;
function handleTipClick(event){
    tip_percent.forEach(function(val){
        val.classList.remove("active-tip")
        if(event.target.innerHTML==val.innerHTML){
            val.classList.add("active-tip")
            tipValue=parseFloat(val.innerHTML)
        }
    })
    // console.log(tipValue)
}
document.addEventListener('click',calculate_tip)
function calculate_tip(event){
    let amount=parseFloat(document.getElementById('bill').value)
    let people=document.querySelector('.people-input').value
    let error=document.getElementsByClassName("error")
    if(people<1){
        error[0].style.display="block"
    }
    else{
        error[0].style.display="none"

    }
    let tip=(amount*tipValue)/100
    
    let totalBill=amount+tip
    let billPerPerson=totalBill/people
    let tip_charged=document.getElementById('tip-charged')
    tip_charged.innerText=tip
    
    let total_bill=document.getElementById('total-bill')
    total_bill.innerText=totalBill

    let Bill_per_person=document.getElementById('bill-per-person')
    Bill_per_person.innerText=billPerPerson 
}

