const FuckYouKarens = artifacts.require("FuckYouKarens");

contract("FuckYouKarens", function (/* accounts */) {
  it("Should a assert true if deployed.", async function () {
    const instance = await FuckYouKarens.deployed();
    return assert.isTrue(instance.deployed);
  });
});

describe('Deploy', () => {
  it('works', async () => {
    const instance = await deployProxy(FuckYouKarens, { kind: 'uups' })
    const upgraded = await upgradeProxy(instance.address, FuckYouKarens, { deployer });
    assert.isTrue(instance.deployed);
  });
});