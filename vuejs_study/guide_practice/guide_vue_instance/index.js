var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})
vm.$watch('a', function (newVal, oldVal) {
    console.log(`value has changed. from ${oldVal} to ${newVal}`);
})