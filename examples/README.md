# ダメージ計算の使用例

`@poke-calc/data`で作品別データを解決し、`@poke-calc/core`へ渡します。

```ts
import { calculateDamage } from "@poke-calc/core";
import { resolveChampionsDamageInput } from "@poke-calc/data";

const zeroStats = {
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
};

const zeroBoosts = {
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
};

const input = resolveChampionsDamageInput({
  battleType: "single",
  attacker: {
    pokemonKey: "garchomp",
    natureKey: "adamant",
    statPoints: { ...zeroStats, attack: 32 },
    boosts: zeroBoosts,
  },
  defender: {
    pokemonKey: "corviknight",
    natureKey: "impish",
    statPoints: { ...zeroStats, hp: 32, defense: 32 },
    boosts: zeroBoosts,
  },
  moveKey: "fire-punch",
  weather: null,
});

const result = calculateDamage(input);

console.log(result.normal.minimumDamage, result.normal.maximumDamage);
console.log(result.critical.minimumDamage, result.critical.maximumDamage);
```
