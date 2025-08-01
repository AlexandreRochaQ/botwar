import decideMove from "./bot";

describe('Décision du bot', () => {
    test("retourne un objet avec move et action", () => {
        const state = {};
        const decision = decideMove(state);
        expect(decision).toHaveProperty('move');
        expect(decision).toHaveProperty('action');
    });

    test("move est une direction valide", () => {
        const directions = ["UP", "DOWN", "LEFT", "RIGHT", "STAY"];
        const state = {};
        const decision = decideMove(state);
        expect(directions).toContain(decision.move);
    });

    test("action est une action valide", () => {
        const actions = ["COLLECT", "ATTACK", "BOMB", "NONE"];
        const state = {};
        const decision = decideMove(state);
        expect(actions).toContain(decision.action);
    });

    test("retourne des valeurs différentes sur plusieurs appels", () => {
        const state = {};
        const decisions = new Set();
        for (let i = 0; i < 10; i++) {
            decisions.add(JSON.stringify(decideMove(state)));
        }
        expect(decisions.size).toBeGreaterThan(1);
    });
});