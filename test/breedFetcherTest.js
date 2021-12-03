const { fetchBreedDescription } = require('../breedFetcher');

const { assert } = require('chai');

describe('#fetchBreedDescription', () => {
  it("returns a string description for an existing breed via callback", (done) => {
    fetchBreedDescription('shorthair', (err,desc) => {
      assert.equal(err, null);

      const expectedDesc = "The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets."

      assert.equal(desc, expectedDesc);

      done();
    });
  });

  it("returns an error when non existing breed is returned", (done) => {
    fetchBreedDescription("Noopwoop", (err, desc) => {
      assert.equal(err, "Breed not found");

      assert.equal(desc, null);
      
      done();
    })
  })
})