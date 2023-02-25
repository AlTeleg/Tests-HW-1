import { getHealthStatus } from "../src/game";

test.each([
    [{name: 'warrior', health: 80}, 'healthy'],
    [{name: 'rogue', health: 40}, 'wounded'],
    [{name: 'paladin', health: 10}, 'critical']
])('test health status check', (player, expected) => {
    const result = getHealthStatus(player);
    expect(result).toBe(expected);
})

test('passing zero forces undefined', () => {
    const result = getHealthStatus(0)
    expect(result).toBe(undefined)
})