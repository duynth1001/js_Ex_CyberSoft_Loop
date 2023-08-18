function exe1Calculation()
{
    var sum=0
    var cnt=1
    while(sum<10000)
    {   
        sum+=cnt
        cnt++
    }
    document.getElementById('ex1Result').innerHTML=`
    Số nguyên dương nhỏ nhất là: ${cnt-=2}
    ` 
}
document.getElementById('exe1Calculation').onclick=exe1Calculation
function exe2Calculation()
{
    var n= +document.getElementById('inputNumbN').value
    var x= +document.getElementById('inputNumbX').value
    var sum=0
    for(let i=1;i<=n;i++)
    {
        sum+=Math.pow(x,i)
    }
    document.getElementById('ex2Result').innerHTML=`
    Kết quả là: ${sum}
    `    
}
document.getElementById('exe2Calculation').onclick=exe2Calculation
function exe3Calculation()
{
    var n = +document.getElementById('inputNumbNEx3').value
    let answer = 1;
  if (n == 0 || n == 1){
    document.getElementById('ex3Result').innerHTML=`
    Kết quả : 1
    `
  }
  else if(n > 1){
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    document.getElementById('ex3Result').innerHTML=`
    Kết quả : ${answer}
    `
  }
  else{
    alert("Vui lòng nhập số dương")
    return
  }  
}
document.getElementById('exe3Calculation').onclick=exe3Calculation
function exe4Calculation()
{
    for (let index = 1; index <= 10; index++) {
        const node = document.createElement('div')
        if (index%2==0) {
            node.innerHTML=`Vị trí: ${index}`
           node.style.backgroundColor='red'
            document.getElementById('ex4Result').appendChild(node)
        }        
        else
        {
            node.innerHTML=`Vị trí: ${index}`
            node.style.backgroundColor='#00FFFF'
            document.getElementById('ex4Result').appendChild(node)
        }
    }
}
document.getElementById('exe4Calculation').onclick=exe4Calculation
function exe5Calculation()
{
    var n = +document.getElementById('inputNumbNEx5').value
    var resStr=''
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
    }
    for (let index = 1; index <= n; index++) {
        if(isPrime(index))
        resStr+=index+' '
    }
    document.getElementById('ex5Result').innerHTML=`
    Kết quả: ${resStr}
    `
}
document.getElementById('exe5Calculation').onclick= exe5Calculation
