var app = new Vue({
    el:'#app',
    data:{
        yamahai : createYamahai(),
        kawa : [],
        tehai : [],
        agari : false
    },
    created: function() {
        //配牌作成（山牌から14牌取得する）
        for (let i = 0; i<14; i++ ) {
          this.tehai.push(this.yamahai.shift());
        }

        //理牌
        this.tehai.sort(sortHai)

        //あがり判定
        this.agari = judge(this.tehai);
    },
    methods: {
        //牌の交換
        change: function(index) {
            //捨牌
            sutehai = this.tehai[index];
            this.tehai.splice(index, 1);

            //河
            this.kawa.push(sutehai);

            //理牌
            this.tehai.sort(sortHai);

            //自摸
            let tsumo = this.yamahai.shift();
            this.tehai.push(tsumo);

            //あがり判定
            this.agari = judge(this.tehai);
        }
  }
})
