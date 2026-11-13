export type Formation = "line" | "vee" | "column" | "pincer";
export type EnemyKind = "drone" | "dart" | "turret" | "lancer";

export interface Wave {
  tick: number;
  kind: EnemyKind;
  count: number;
  formation: Formation;
  x: number;
}

export interface Sector {
  name: string;
  subtitle: string;
  length: number;
  waves: Wave[];
}

export const ROUTE: Sector[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1800,
    waves: [
      { tick: 60, kind: "drone", count: 4, formation: "line", x: 240 },
      { tick: 360, kind: "drone", count: 5, formation: "vee", x: 168 },
      { tick: 660, kind: "drone", count: 5, formation: "vee", x: 312 },
      { tick: 960, kind: "drone", count: 6, formation: "line", x: 240 },
      { tick: 1200, kind: "drone", count: 4, formation: "column", x: 120 },
      { tick: 1260, kind: "drone", count: 4, formation: "column", x: 360 },
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 2040,
    waves: [
      { tick: 60, kind: "drone", count: 6, formation: "vee", x: 240 },
      { tick: 300, kind: "dart", count: 4, formation: "line", x: 240 },
      { tick: 600, kind: "dart", count: 5, formation: "column", x: 144 },
      { tick: 720, kind: "dart", count: 5, formation: "column", x: 336 },
      { tick: 1020, kind: "drone", count: 7, formation: "line", x: 240 },
      { tick: 1140, kind: "dart", count: 5, formation: "vee", x: 240 },
      { tick: 1440, kind: "dart", count: 6, formation: "line", x: 240 },
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 2160,
    waves: [
      { tick: 60, kind: "turret", count: 1, formation: "line", x: 240 },
      { tick: 240, kind: "drone", count: 6, formation: "vee", x: 240 },
      { tick: 540, kind: "turret", count: 2, formation: "line", x: 240 },
      { tick: 840, kind: "dart", count: 6, formation: "column", x: 240 },
      { tick: 1080, kind: "turret", count: 2, formation: "line", x: 240 },
      { tick: 1140, kind: "drone", count: 6, formation: "line", x: 240 },
      { tick: 1500, kind: "turret", count: 3, formation: "line", x: 240 },
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 2160,
    waves: [
      { tick: 60, kind: "lancer", count: 4, formation: "pincer", x: 240 },
      { tick: 360, kind: "dart", count: 6, formation: "vee", x: 240 },
      { tick: 600, kind: "lancer", count: 6, formation: "pincer", x: 240 },
      { tick: 780, kind: "turret", count: 2, formation: "line", x: 240 },
      { tick: 1140, kind: "lancer", count: 6, formation: "pincer", x: 240 },
      { tick: 1260, kind: "drone", count: 8, formation: "vee", x: 240 },
      { tick: 1560, kind: "dart", count: 8, formation: "line", x: 240 },
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2280,
    waves: [
      { tick: 60, kind: "turret", count: 3, formation: "line", x: 240 },
      { tick: 180, kind: "lancer", count: 6, formation: "pincer", x: 240 },
      { tick: 540, kind: "dart", count: 6, formation: "column", x: 120 },
      { tick: 540, kind: "dart", count: 6, formation: "column", x: 360 },
      { tick: 900, kind: "drone", count: 9, formation: "vee", x: 240 },
      { tick: 1020, kind: "turret", count: 2, formation: "line", x: 240 },
      { tick: 1320, kind: "lancer", count: 8, formation: "pincer", x: 240 },
      { tick: 1560, kind: "dart", count: 8, formation: "vee", x: 240 },
    ],
  },
  {
    name: "The Warden",
    subtitle: "The Warden approaches",
    length: 0,
    waves: [],
  },
];
