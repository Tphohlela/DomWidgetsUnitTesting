function calculateBill(){
    var call=0;
    var sms =0;
    var totalBill=0;
    var warningLevel =20;
    var criticalLevel= 30;


    function getBillItem(list){
      var  data  = list.split(",");
       for (var i=0;i<data.length;i++){
            var item = data[i].trim();
        if(item =='call'){
            call += 2.75;
            totalBill += 2.75;
        }
        else if (item == 'sms'){
         sms += 0.75;
         totalBill += 0.75;
        }
    }
}
    function getBillTotal(){
        return 'R' + totalBill;
    }


    function totallevel(){
        if( totalBill >= warningLevel && totalBill < criticalLevel){
            return 'warning';
        }
        else if( totalBill >= criticalLevel) {
            return 'danger';
        }
    }


    return{
        getBillItem,
        getBillTotal,
        totallevel
    }
}


