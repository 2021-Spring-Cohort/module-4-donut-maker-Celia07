
class DonutMaker {

    constructor(){
        this.clickCount = 0;
        this.AutoClickCount=0;
        this.AutoClickCost=-100;
        this.multiplierCount=1;
        this.multiplierCost=10;

    }
    recordClick(){
        this.clickCount++;
    }
    addAutoClick(){
        this.AutoClickCount++;
        this.clickCount=this.clickCount-this.AutoClickCount;
        this.AutoClickCost=this.AutoClickCost*1.1;
        this.AutoClickCost=Math.floor(this.AutoClickerCost)
        }
        buyMultiplier(){
            if (this.donutCount >= this.multiplierCost){
                this.donutCount -= this.multiplierCost;
                this.multiplierCost = Math.round(this.multiplierCost * 1.1);
                this.multiplierCount += 1;
}
        }

    }
