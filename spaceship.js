function Spaceship(name, crewArr, phasers, shields){
	this.name = name
	this.phasers = phasers
	this.shields = shields
	this.cloaked = false
	this.warpDrive = "disengaged"
	this.docked = true
	this.phasersChargers = "uncharged"
	if (!!crewArr.length) {
		this.docked = false
	}

	crewArr.forEach(function(shipCrew){
	 shipCrew.currentShip = this
  }.bind(this))

}
