
export default {

  data() {
    return {
      name: "page",
      maxNum:100,
      minNum:1,
      maxList:20,
      list:[],
      showAnswer:false,
      ysf:["1","2","3","4"]
    }
  },
  mounted() {
    this.init()
    // geolocation().then(res => {
    //   console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // });
  },
  methods: {

    init() {
      this.subFn()
    },
    randomNum(minNum,maxNum){ 
        switch(arguments.length){ 
            case 1: 
                return parseInt(Math.random()*minNum+1,10); 
            break; 
            case 2: 
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            break; 
                default: 
                    return 0; 
                break; 
        } 
    },
    subFn(){
      if(this.maxList<1){
        alert("生成题目条数不能小于1")
        return;
      }

      let arr = []
      for (var i = 0; i < this.maxList; i++) {
        let obj = {}
        obj.num1 = this.randomNum(this.minNum,this.maxNum)
        obj.num2 = this.randomNum(this.minNum,this.maxNum)
        obj.ysf = this.ysf[this.randomNum(0,3)]
        if(obj.ysf == "1"){
          obj.answer = obj.num1 + obj.num2
        }else if(obj.ysf == "2"){
          let n = obj.num1
          if(obj.num1 - obj.num2<0){
            obj.num1 = obj.num2
            obj.num2 = n
          }
          obj.answer = obj.num1 - obj.num2
        }else if(obj.ysf == "3"){
          obj.answer = obj.num1 * obj.num2
        }else if(obj.ysf == "4"){
            if((obj.num1 / obj.num2)%1 === 0){
              obj.answer = obj.num1 / obj.num2
            }else{
              obj.ysf = "1"
              obj.answer = obj.num1 + obj.num2
            }
        }
        
        arr.push(obj)
      }
      this.list = arr
    }
  }
}
