const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const speciesData = evt.target.species.value;
  const locationData = evt.target.location.value;
  const dateData = evt.target.date.value;
  const sightingData = {"species": speciesData, "location": locationData, "date": dateData}
  PubSub.publish('SightingFormView:add-sighting', sightingData)
}

module.exports = SightingFormView;
