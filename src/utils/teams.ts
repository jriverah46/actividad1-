// src/utils/teams.ts
import { Group } from '../types';

const groups: Group[] = [
  {
    name: 'Group A',
    teams: [
      {
        id: 1,
        name: 'COLOMBIA',
        code: 'COL',
        group: 'A',
        flag: '🇨🇴',
        stickers: Array(20).fill(0).map((_, i) => ({
          id: i + 1,
          number: i + 1,
          name: `Player ${i + 1}`,
          position: i % 2 === 0 ? 'Forward' : 'Midfielder',
          image: `https://picsum.photos/150/200?random=${i}`,
          collected: Math.random() > 0.5,
          quantity: Math.floor(Math.random() * 3) + 1
        }))
      }
    ]
  }
];

export { groups };