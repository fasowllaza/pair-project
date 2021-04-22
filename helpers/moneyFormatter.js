function moneyFormatter(money) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(money);
} 