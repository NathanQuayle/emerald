describe('Test Model', () => {
    describe('.add', () => {
        it('should add two numbers', () => {
            expect(add(1, 2)).toEq(3);
        })

        it('should add two numbers', () => {
            expect(add(1, 2)).toEq(3);
        })

        it('should add two numbers', () => {
            expect(add(1, 3)).toEq(3);
        })
    });

    describe('.subtract', () => {
        it('should subtract numbers', () => {
            expect(subtract(2, 1)).toEq(1);
        })
        it('should subtract numbers', () => {
            expect(subtract(1, 1)).toEq(0);
        })
    });
});