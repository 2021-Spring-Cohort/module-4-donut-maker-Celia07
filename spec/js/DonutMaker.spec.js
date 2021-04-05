describe('FEATURE 1 : Have a way to count donuts', () => {
     describe('Can add to donut count.', () => {
            let underTest;

        beforeEach(() => {
                underTest = new DonutMaker; 
        });


        it('should start with a click count of 0.', () => {
            
             expect(underTest.clickCount).toBe(0);
        });
        it('should add one click to the click count when it record a click.', () => {
             
               underTest.recordClick();
              expect(underTest.clickCount).toBe(1); 
        });
        it('should have a click count of 2 when it records 2 click.', () => {
            
             underTest.recordClick();
             underTest.recordClick();
             expect(underTest.clickCount).toBe(2); 
            
        });
    });

});
describe('FEATURE 2: Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () => {
     describe('As a user, I want to be able to purchase Auto Clickers,', () => {
          let underTest;

          beforeEach(() => {
               underTest=new DonutMaker();

          });
          it('Can retrieve an Auto Clicker count.', () => {

               expect(underTest.AutoClickCount).toBe(0);
               
          });
          it('Can add to the Auto Clicker count.', () => {

               expect(underTest.AutoClickCount).toBe(0);
          });
          it('Can add to the Donut Multiplier count ',() =>{
               
               underTest.addAutoClick();
               expect(underTest.AutoClickCount).toBe(1);

             });
             it('Can add to the Donut Multiplier count again ',() =>{
               underTest.addAutoClick();

               expect(underTest.AutoClickCount).toBe(2);
             })
          it('Subtract the Auto Clicker cost from your donut count.', () => {
               
               expect(underTest.AutoClickCost).toBe(-100)        
            });

     });
});

describe('Feauture 3: The cost of each Auto Clicker will go up with each purchase.', () => {
     describe('As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game', () => {
          let underTest;

          beforeEach(() => {
               underTest=new DonutMaker();
          });
          it('Increase the cost of the second Auto Clicker by an additional ten percent.', () => {
               expect(underTest.AutoClickCost).toBe(110);
          });
          it('Increase the cost of every additional Auto Clicker by an additional ten percent.', () => {
               expect(underTest.AutoClickCost).toBe(110);
          });
     });
     
});
