describe('Testing Calculate Bill Factory function', function () {
        it('one call should equal 2.75', function () {
                let billCalculate = calculateBill();

                billCalculate.getBillItem("call");
                assert.equal("R" + 2.75, billCalculate.getBillTotal());

        });

        it('one sms should equal 0.75', function () {
                let billCalculate = calculateBill();

                billCalculate.getBillItem("sms");
                assert.equal("R" + 0.75, billCalculate.getBillTotal());
        });

        it('two calls and three smses should equal a total 7.75', function () {
                let billCalculate = calculateBill();

                billCalculate.getBillItem("call, sms, call, sms, sms");
                assert.equal("R" + 7.75, billCalculate.getBillTotal());
        });


        describe('testing warning level and critical level', function () {
                it('should return warning class if total is greater than or equal to 20',function(){
                let billCalculate = calculateBill();

                billCalculate.getBillItem("call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms");
                assert.equal('warning', billCalculate.totallevel());
                });

                it('should return danger class if total is greater than or equal to 30',function(){
                        let billCalculate = calculateBill();
        
                        billCalculate.getBillItem("call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms,call, sms, call, sms, sms");
                        assert.equal('danger', billCalculate.totallevel());
                        });
        });







});