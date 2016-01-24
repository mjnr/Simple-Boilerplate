/*
* Class sample
*/

class ZodiacSaint {

	constructor(name, cloth) {
		this.name = name
		this.cloth = cloth
	}

	sayName() {
		return `My name is ${this.name} and I am the ${this.cloth} saint`
	}

}

class BronzeSaint extends ZodiacSaint {

	constructor(name, cloth) {
		super(name, `Bronze ${cloth}`)
	}

	sayName() {
		return super.sayName()
	}

}

export { ZodiacSaint, BronzeSaint }
