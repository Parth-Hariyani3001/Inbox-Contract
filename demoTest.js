let car;

beforeEach(() => {
    car = new Car();
});

describe('Car', () => {
    it('has a park function', () => {
        // const car = new Car();
        assert.equal(car.park(),'stopped');
    });
    it('can drive or not', () => {
        // const car = new Car();
        assert.equal(car.drive(),'vroom');
    });
});