//1. Find the number of digits
const Find_Digits = (N) => 
{
	 if(N==0){
	   return 1;
	 }
	 let count=0;
	 while(N!=0){
	   N=parseInt(N/10);
	   count++;
	 }
	    return count;
 };

 //2. Find the fives.
 const Find_Five = (N) => 
{
	 let count=0;
	 while(N!=0){
	   let currdigit=N%10;
	   if(currdigit==5){
	     count++;
	   }
	   N=parseInt(N/10)
	 }
	 return count;
};
 
//3. find sum.
const findSum = (n) => {
    let sum=0;
      for(let i=0;i<=n;i++){
        if(i%2==0){
        sum=sum+i;
        }
      }
      return sum;
  };

//4. Find the sum of the digits of a given number.
const Number_Sum = (n) => 
    {
        let sum = 0;
        while (n !== 0) {
      sum = sum + n % 10;
      n = parseInt(n / 10);
    }
       return sum;
    };

//5. Print the Odds.
const Print_Odd = (N) => 
    { 
       console.log("2");
      for(i=2; i<=N; i++){
     
      if(i % 2 !== 0){
        console.log(i);
      }
    
      }
    };

//6. Print the pattern.
const Print_pattern = (N) => 
{
for(let i=1;i<=N; i++){
	  let a = "*";
	  console.log(a.repeat(i));
	}
};

//7. Check whether a Number is a prime or not. 
const Prime_Check = (N) => 
{
 let i=N-1,flag=0;
 while(i!=1){
   if(N%i==0){
     flag=1;
     break;
   }
   i--;
  }
  if(flag===0)
   return "YES"
  else
   return "NO"
};

//8. Print Numbers
const printNumbers = (n) => {
	let num;
	for(let i=1; i<=n; i++){
	  num = i;
	  console.log(num);
	}
  };

//9. Print the Table
const Print_Table = (N) => 
{
	for(let i=1;i<=10;i++){
	  console.log(N + " * " + i + " = " + N * i)
	}
};

  