/*
* Class sample
*/

class ZodiacSaint {

	constructor(name, cloth) {
		this._name = name;
		this._cloth = cloth;
	}

	sayName() {
		return `My name is ${this._name} and I am the ${this._cloth} saint`;
	}

}

class BronzeSaint extends ZodiacSaint {

	constructor(name, cloth) {
		super(name, `Bronze ${cloth}`);
	}

	sayName() {
		return super.sayName();
	}

}

export { ZodiacSaint, BronzeSaint }
