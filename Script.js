function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('search').style.opacity="0.2";
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('search').style.opacity="1";
}