function submitForm() {
    const name = this.name;
    const email = this.email;
    const message = this.message;

    // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
    console.log('تم إرسال النموذج:', { name, email, message });

    // إعادة تعيين النموذج
    this.name = '';
    this.email = '';
    this.message = '';

    // عرض رسالة نجاح
    alert('شكرًا لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
}

// إضافة وظيفة التمرير السلس لجميع الروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
