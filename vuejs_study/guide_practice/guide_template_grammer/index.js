var app1 = new Vue({
    el: '#app1',
    data: {
        msg: '문자열입니다.'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        rawHtml: '<span style="color:red">This should be red.</span>'
    }
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: '질문을 하기 전까지는 대답할 수 없습니다.'
    },
    watch: {
        // 질문이 변경될 때 마다 이 기능이 실행됩니다.
        question: function (newQuestion) {
            this.answer = '입력을 기다리는 중...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        // _.debounce는 lodash가 제공하는 기능으로
        // 특히 시간이 많이 소요되는 작업을 실행할 수 있는 빈도를 제한합니다.
        // 이 경우, 우리는 yesno.wtf/api 에 액세스 하는 빈도를 제한하고,
        // 사용자가 ajax요청을 하기 전에 타이핑을 완전히 마칠 때까지 기다리길 바랍니다.
        // _.debounce 함수(또는 이와 유사한 _.throttle)에 대한
        // 자세한 내용을 보려면 https://lodash.com/docs#debounce 를 방문하세요.
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = '질문에는 일반적으로 물음표가 포함 됩니다. ;-)'
                return
            }
            this.answer = '생각중...'
            var vm = this
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
                vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
            })
        }
    }
  })