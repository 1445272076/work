var GirlFriend = function(sex,cup){
    this.sex = sex
    this.height = 165
    this.cup = cup
    this.weight = 100
    this.memeda = function(){
        this.weight -= 0.5
    }
    this.papapa = function(){
        this.weight --
    }
    this.huaqian = function(){}
    this.eat = function(){
        this.weight += 3
    }
}