function calculateAverage() {
    let totalCost = 0;
    let totalQuantity = 0;
    for (let i = 1; i <= 5; i++) {
        const price = parseFloat(document.getElementById('price' + i).value);
        const quantity = parseInt(document.getElementById('quantity' + i).value);
        if (!isNaN(price) && !isNaN(quantity)) {
            totalCost += price * quantity;
            totalQuantity += quantity;
        }
    }
    const averagePrice = totalCost / totalQuantity;
    if (!isNaN(averagePrice)) {
        document.getElementById('result').innerText = `평균 매수 단가는 ${averagePrice.toFixed(2)}입니다.`;
    } else {
        document.getElementById('result').innerText = `올바른 값을 입력해주세요.`;
    }
}