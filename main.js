function productChangeHandeler(isIncrease,product){
    const productCount = document.getElementById(product + "-count").value;
    var productNewCount = 0
    if(isIncrease == true){
        productNewCount = parseInt(productCount) + 1;
    }
    else if(productCount > 0){
        productNewCount = parseInt(productCount) - 1;
    }
    document.getElementById(product + "-count").value = productNewCount;

    
    if(product == 'phone'){
        const newProductPrice = parseInt(productNewCount) * 1219;
        document.getElementById(product + "-price").innerText = "$"+ newProductPrice;
    }
    else if(product == 'case'){
        const newProductPrice = parseInt(productNewCount) * 59;
        document.getElementById(product + "-price").innerText = "$"+ newProductPrice;
    }
    totalCalculation();
}

function totalCalculation(){
    const phonePrice = document.getElementById("phone-count").value;
    const casePrice = document.getElementById("case-count").value;

    const subTotal = parseInt(phonePrice) * 1219 + parseInt(casePrice) *59;

    document.getElementById("sub-total").innerText = "$"+subTotal;

    const taxCalculation = Math.round(subTotal * 0.1);
    document.getElementById("tax").innerText = "$" + taxCalculation;

    const grandTotal = subTotal + taxCalculation;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}
