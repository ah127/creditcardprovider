//custom creditcard number Validator function using Luhn 10 algorith
exports.checkCardValidity=(num)=>{
    //convert the given number value into string and split to store in array
      var creditcardnum_str=num.toString().split('');
    
      let totalsum=0;
      let isValid=false;
       
      //store alternate element of array from right to left in two different arrays
      //array of elements with odd index
      let odd_index_arr = creditcardnum_str.filter((element, index) => {
        return index % 2 !== 0;
      })  
      
      //array of elements with even index
      let even_index_arr = creditcardnum_str.filter((element, index) => {
        return index % 2 == 0;
      })  
    
      function sum_even_index_arr(arr){
        let onedigitarr=[]
        let moredigitarr=[]
        let finalsum=0
        let arrdouble=[]
      
      //double each element of array
      function doubleArr(arr){
         var dArr = [];
         return arr.forEach(function(x){ dArr.push(x*2); }), dArr;
      }
       arrdouble=doubleArr(arr)
      
      //separate one digit and two digit array
      arrdouble.map(ele=>{
        if(ele < 9){
        onedigitarr.push(ele);
        }
        else{
        moredigitarr.push(ele)
        }
      })    
      //sum of all digits of one digits array
        let sum_onedigit_arr = onedigitarr.map(Number).reduce(function (a, b) { return a + b; }, 0)
          //sum of all separate digits of more than one digits array
        let sum_moredigit_arr = moredigitarr.join('').toString().split('').map(Number).reduce(function (a, b) { return a + b; }, 0)
        finalsum=sum_onedigit_arr + sum_moredigit_arr;
        return finalsum;
      }
      
      //sum of elements of even index array
      let even_index_arr_sum=sum_even_index_arr(even_index_arr)
      
      //sum of elements of odd index array
      
       let odd_index_arr_sum = odd_index_arr.map(Number).reduce(function (a, b) { return a + b; }, 0)
       
      //total sum of even index array elements and odd index array elements
      totalsum=even_index_arr_sum+odd_index_arr_sum;
      
      //check if the total sum mod 10 is 0 or not
        if((totalsum%10)===0){
          isValid=true;
        }
        else{
          isValid=false;
        }
        return isValid;
      }
      
    //   console.log(checkCardValidity(4624748233249780));
