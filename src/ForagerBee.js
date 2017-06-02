class ForagerBee extends Bee{
  constructor() {
  	super();
  	this.age = 10;
  	this.job = 'find pollen';
  	super.color = 'yellow';
  	this.canFly = true;
  	this.treasureChest = [];
  }
  forage() {
  	this.treasureChest.push('treasure');
  }
};
