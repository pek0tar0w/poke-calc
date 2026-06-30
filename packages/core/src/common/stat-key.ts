export type StatKey =
  "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed";

export type NonHpStatKey = Exclude<StatKey, "hp">;
