
var isIsomorphic = function(s, t) {

if (s.length !== t.length) return  'length !='
let lookupS = new Map();
let lookupT = new Map();
   for(let i = 0; i< s.length; i++){
    if(!lookupS[s[i]] && !lookupT[t[i]]){
      //foo {f: b , o:a }
       lookupS[s[i]] = t[i]; //bar
       //bar {b: f ,a : o }
      lookupT[t[i]] = s[i]; //foo
    }else{
      if(lookupS[s[i]] !== t[i]){
     //foo {f: b , o:a } 

        console.log(lookupS)
        console.log(lookupT)
     
        return false
      }
    }
   }
   console.log(lookupS)
   console.log(lookupT)

    return true
  }


    console.log(isIsomorphic('foo' , 'bar'))